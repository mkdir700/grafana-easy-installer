package theme

import (
	_ "embed"
	"grafana_labs/icon"
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/theme"
)

//go:embed fonts/NotoSansSC-Regular.ttf
var NotoSansSCRegularTTF []byte

func Apply(app fyne.App) {
	// 创建自定义主题
	myTheme := &CustomTheme{}
	app.Settings().SetTheme(myTheme)
}

type CustomTheme struct{}

func (m *CustomTheme) Font(style fyne.TextStyle) fyne.Resource {
	fontData := NotoSansSCRegularTTF
	return fyne.NewStaticResource("NotoSansSC-Regular.ttf", fontData)
}

func (m *CustomTheme) Color(name fyne.ThemeColorName, variant fyne.ThemeVariant) color.Color {
	return theme.DefaultTheme().Color(name, variant)
}

func (m *CustomTheme) Icon(name fyne.ThemeIconName) fyne.Resource {
	return &fyne.StaticResource{
		StaticName:    "icon",
		StaticContent: icon.Icon,
	}
}

func (m *CustomTheme) Size(name fyne.ThemeSizeName) float32 {
	return theme.DefaultTheme().Size(name)
}
