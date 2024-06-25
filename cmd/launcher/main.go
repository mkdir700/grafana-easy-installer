package main

import (
	"fmt"
	"grafana_labs/theme"
	"grafana_labs/utils"
	"os"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/driver/desktop"
	"fyne.io/fyne/v2/widget"
)

// 启动前的检查
func initBeforeLaunch() error {
	// 检查执行文件和配置文件是否存在
	currDir, err := os.Getwd()
	if err != nil {
		return fmt.Errorf("failed to get current directory: %v", err)
	}

	paths := []string{
		utils.GetLokiExecPath(currDir),
		utils.GetLokiConfigPath(currDir),
		utils.GetGrafanaExecPath(currDir),
		utils.GetPromtailConfigPath(currDir),
		utils.GetGrafanaExecPath(currDir),
	}

	for _, path := range paths {
		_, err = os.Stat(path)
		if err != nil {
			return fmt.Errorf("failed to find file: %v", err)
		}
	}

	return nil
}

func LaunchPage(w fyne.Window) fyne.CanvasObject {
	err := initBeforeLaunch()
	if err != nil {
		fmt.Printf("Failed to init before launch: %v\n", err)
		return widget.NewLabel("Failed to init before launch: " + err.Error())
	}

	installDir, err := os.Getwd()
	if err != nil {
		fmt.Printf("Failed to get current directory: %v\n", err)
		return widget.NewLabel("Failed to get current directory")
	}

	nssmExecPath := utils.GetNssmExecPath(installDir)

	programs := []Program{
		{
			Name:         "Loki",
			ServiceName:  "loki",
			NssmExecPath: nssmExecPath,
		},
		{
			Name:         "Promtail",
			ServiceName:  "promtail",
			NssmExecPath: nssmExecPath,
		},
		{
			Name:         "Grafana",
			ServiceName:  "grafana-server",
			NssmExecPath: nssmExecPath,
		},
	}

	var button_text string
	for i := range programs {
		p := &programs[i]
		status, err := p.GetStatus()
		if err != nil {
			fmt.Printf("Failed to get status of %s: %v\n", p.Name, err)
			status = "未知"
		}
		p.Status = widget.NewLabel(status)

		if p.Status.Text == "在线" {
			button_text = "停止"
		} else {
			button_text = "启动"
		}
		p.Button = widget.NewButton(button_text, func() {
			programs[i].Toggle()
		})
	}

	grid := container.NewGridWithColumns(3)

	for i := range programs {
		grid.Add(widget.NewLabel(programs[i].Name))
		grid.Add(programs[i].Status)
		grid.Add(programs[i].Button)
	}

	return grid
}

func main() {
	a := app.New()
	desk, ok := a.(desktop.App)
	if !ok {
		fmt.Println("This app is not running on a desktop, exiting")
		return
	}

	theme.Apply(a)
	w := a.NewWindow("Granfa Labs")
	page := LaunchPage(w)
	w.SetContent(page)
	w.SetCloseIntercept(func() {
		w.Hide()
	})

	menu := fyne.NewMenu("Granfa Labs",
		fyne.NewMenuItem("Labs", func() {
			w.Show()
		}),
	)
	desk.SetSystemTrayMenu(menu)

	w.ShowAndRun()
}
