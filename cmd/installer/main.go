package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"

	"grafana_labs/theme"
)

func main() {
	a := app.New()

	// 设置自定义字体
	theme.Apply(a)

	w := a.NewWindow("GrafanaLabs 安装程序")

	// 设置窗口大小
	w.Resize(fyne.NewSize(500, 250))

	// 创建初始界面
	// 检查是否已经安装
	step1 := createStep1(w)
	w.SetContent(step1)

	w.ShowAndRun()
}
