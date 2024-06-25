package main

import (
	_ "embed"
	"fmt"
	"grafana_labs/assets"
	"grafana_labs/utils"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/layout"
	"github.com/bodgit/sevenzip"

	"fyne.io/fyne/v2/widget"
)

func createStep1(w fyne.Window) fyne.CanvasObject {
	label := widget.NewLabel("请选择安装目录")
	entry := widget.NewEntry()
	entry.SetText("C:\\Program Files\\GrafanaLabs")

	browseButton := widget.NewButton("浏览", func() {
		dialog.ShowFolderOpen(func(uri fyne.ListableURI, err error) {
			if err == nil && uri != nil {
				entry.SetText(uri.Path())
			}
		}, w)
	})

	nextButton := widget.NewButton("下一步", func() {
		installDir := entry.Text
		if installDir == "" {
			fyne.CurrentApp().SendNotification(&fyne.Notification{
				Title:   "错误",
				Content: "安装目录不能为空",
			})
			return
		}
		step3 := createStep2(w, installDir)
		w.SetContent(step3)
	})

	// 使用 VBox 包装按钮，并在按钮上方添加一个 Spacer
	buttons := container.NewVBox(
		layout.NewSpacer(), // 添加一个 Spacer 以增加按钮和底部之间的距离
		container.NewHBox(
			layout.NewSpacer(),
			browseButton,
			nextButton,
		),
	)

	return container.NewBorder(
		nil,     // top
		buttons, // bottom
		nil,     // left
		nil,     // right
		container.NewVBox(
			label,
			entry,
		),
	)
}

func createStep2(w fyne.Window, installDir string) fyne.CanvasObject {
	label := widget.NewLabel("正在安装，请稍候...")
	progress := widget.NewProgressBar()

	go func() {
		err := extractFiles(installDir, func(current, total int64) {
			progress.SetValue(float64(current) / float64(total) * 0.99)
		})
		if err != nil {
			fmt.Println("解压文件失败: ", err)
			fyne.CurrentApp().SendNotification(&fyne.Notification{
				Title:   "错误",
				Content: fmt.Sprintf("解压文件失败: %v", err),
			})
			return
		}

		fyne.CurrentApp().SendNotification(&fyne.Notification{
			Title:   "成功",
			Content: "文件解压完成",
		})

		err = registerAndStartServices(installDir)
		if err != nil {
			fmt.Println("注册和启动服务失败: ", err)
			fyne.CurrentApp().SendNotification(&fyne.Notification{
				Title:   "错误",
				Content: fmt.Sprintf("注册和启动服务失败: %v", err),
			})
			return
		}

		progress.SetValue(1.0)

		step4 := createStep3(w, installDir)
		w.SetContent(step4)
	}()

	// 使用 VBox 和 Spacer 来垂直居中进度条
	return container.NewVBox(
		label,
		layout.NewSpacer(), // 下方 Spacer
		progress,
		layout.NewSpacer(), // 下方 Spacer
	)
}

func createStep3(w fyne.Window, installDir string) fyne.CanvasObject {
	label := widget.NewLabel("安装完成")
	label.Wrapping = fyne.TextWrapWord

	// 勾选框
	check := widget.NewCheck("创建桌面快捷方式", func(checked bool) {})
	check.SetChecked(true)

	finishButton := widget.NewButton("完成", func() {
		if check.Checked {
			err := createShortcut(installDir)
			if err != nil {
				fmt.Println("创建快捷方式失败: ", err)
			}
		}

		w.Close()
	})

	return container.NewVBox(
		label,
		check,
		container.NewCenter(finishButton),
	)
}

func extractFiles(destDir string, callback func(current, total int64)) error {
	tmpFile, err := os.CreateTemp("", "resources.7z")
	if err != nil {
		return err
	}
	defer os.Remove(tmpFile.Name())

	// 从嵌入资源中读取文件
	_, err = tmpFile.Write(assets.Resources7z)
	if err != nil {
		return err
	}
	tmpFile.Close()

	// 打开 7z 文件
	r, err := sevenzip.OpenReader(tmpFile.Name())
	if err != nil {
		return err
	}
	defer r.Close()

	var totalSize int64
	var currentSize int64
	for _, f := range r.File {
		totalSize += f.FileInfo().Size()
	}

	// 解压文件
	for _, f := range r.File {
		// 去掉 "resources/" 前缀
		relativePath := strings.TrimPrefix(f.Name, "resources/")
		fpath := filepath.Join(destDir, relativePath)
		if f.FileInfo().IsDir() {
			os.MkdirAll(fpath, os.ModePerm)
			continue
		}

		if err := os.MkdirAll(filepath.Dir(fpath), os.ModePerm); err != nil {
			return err
		}

		outFile, err := os.OpenFile(fpath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
		if err != nil {
			return err
		}

		rc, err := f.Open()
		if err != nil {
			return err
		}

		n, err := io.Copy(outFile, rc)
		outFile.Close()
		rc.Close()

		if err != nil {
			return err
		}

		currentSize += n
		callback(currentSize, totalSize)
	}

	return nil
}

func registerAndStartServices(installDir string) error {
	services := []struct {
		Name        string
		DisplayName string
		Description string
		ExecPath    string
		Args        []string
	}{
		{
			"grafana-server",
			"Grafana Server",
			"Grafana Server is an open source, feature rich metrics dashboard and graph editor for Graphite, Elasticsearch, OpenTSDB, Prometheus and InfluxDB.",
			utils.GetGrafanaExecPath(installDir),
			[]string{},
		},
		{
			"loki",
			"Loki",
			"Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost effective and easy to operate, as it does not index the contents of the logs, but rather a set of labels for each log stream.",
			utils.GetLokiExecPath(installDir),
			[]string{"--config.file=loki-local-config.yaml"},
		},
		{
			"promtail",
			"Promtail",
			"Promtail is an agent which ships the contents of local logs to a private Loki instance or Grafana Cloud. It is usually deployed to every machine that has applications needed to be monitored.",
			utils.GetPromtailExecPath(installDir),
			[]string{"--config.file=promtail-local-config.yaml"},
		},
	}
	nssmExecPath := utils.GetNssmExecPath(installDir)

	for _, service := range services {
		err := exec.Command(nssmExecPath, "install", service.Name, service.ExecPath).Run()
		if err != nil {
			return fmt.Errorf("安装服务 %s 失败: %v", service.Name, err)
		}

		err = exec.Command(nssmExecPath, "set", service.Name, "DisplayName", service.DisplayName).Run()
		if err != nil {
			return fmt.Errorf("设置服务 %s 的显示名称失败: %v", service.Name, err)
		}

		err = exec.Command(nssmExecPath, "set", service.Name, "Description", service.Description).Run()
		if err != nil {
			return fmt.Errorf("设置服务 %s 的描述失败: %v", service.Name, err)
		}

		if len(service.Args) > 0 {
			args := strings.Join(service.Args, " ")
			err = exec.Command(nssmExecPath, "set", service.Name, "AppParameters", args).Run()
			if err != nil {
				return fmt.Errorf("设置服务 %s 的参数失败: %v", service.Name, err)
			}
		}

		err = exec.Command(nssmExecPath, "start", service.Name).Run()
		if err != nil {
			return fmt.Errorf("启动服务 %s 失败: %v", service.Name, err)
		}
		fmt.Printf("服务 %s 安装成功\n", service.Name)
	}

	return nil
}

// 将快捷方式复制到用户桌面
func createShortcut(installDir string) error {
	// 获取用户桌面路径
	desktopDir, err := os.UserHomeDir()
	if err != nil {
		return err
	}
	desktopDir = filepath.Join(desktopDir, "Desktop")

	shortcuts := []string{"日志面板", "HMI日志"}

	for _, shortcut := range shortcuts {
		// 日志面板的快捷方式
		lnk := filepath.Join(installDir, shortcut+".url")
		// 判断 lnk 文件是否存在
		_, err := os.Stat(lnk)
		if err != nil {
			continue
		}
		// 创建快捷方式
		err = os.Link(lnk, filepath.Join(desktopDir, shortcut+".url"))
		if err != nil {
			return err
		}
	}

	return nil
}
