package main

import (
	"fmt"
	"os"
	"os/exec"

	"grafana_labs/utils"
)

func uninstall(installDir string) error {
	var err error
	nssmExecPath := utils.GetNssmExecPath(installDir)
	serviceName := []string{"grafana-server", "loki", "promtail"}

	for _, name := range serviceName {
		// 停止服务
		err = exec.Command(nssmExecPath, "stop", name).Run()
		if err != nil {
			fmt.Printf("Failed to stop Grafana service: %v\n", err)
			return err
		}
		fmt.Printf("Grafana service %s stopped\n", name)

		// 删除服务
		err = exec.Command(nssmExecPath, "remove", name, "confirm").Run()
		if err != nil {
			fmt.Printf("Failed to remove Grafana service: %v\n", err)
			return err
		}
		fmt.Printf("Grafana service %s removed\n", name)
	}
	return nil
}

func waitForExit() {
	// 按任意键退出
	fmt.Print("按回车键退出...")

	for {
		var b = make([]byte, 1)
		_, _ = os.Stdin.Read(b)
		if b[0] == '\n' {
			break
		}
	}
}

func main() {
	defer waitForExit()

	fmt.Print("是否卸载 Grafana 服务? (y/n)")
	var b = make([]byte, 1)
	_, _ = os.Stdin.Read(b)

	if b[0] != 'y' && b[0] != 'Y' {
		return
	}

	installDir, err := os.Getwd()
	if err != nil {
		fmt.Printf("Failed to get current directory: %v\n", err)
	} else {
		err = uninstall(installDir)
		if err != nil {
			fmt.Printf("Failed to uninstall Grafana service: %v\n", err)
		} else {
			fmt.Println("Grafana 服务已卸载, 请手动删除安装目录")
		}
	}
}
