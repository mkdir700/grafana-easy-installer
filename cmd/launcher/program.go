package main

import (
	"fmt"
	"os/exec"
	"strings"
	"unicode/utf16"

	"fyne.io/fyne/v2/widget"
)

type Program struct {
	Name         string
	ServiceName  string
	NssmExecPath string
	Status       *widget.Label
	Button       *widget.Button
}

func (p *Program) GetStatus() (string, error) {
	cmd := exec.Command(p.NssmExecPath, "status", p.ServiceName)
	cmdOutput, err := cmd.Output()
	if err != nil {
		return "", fmt.Errorf("failed to get status of %s: %v", p.Name, err)
	}

	// Convert UTF-16 bytes to a string
	u16s := make([]uint16, 0, len(cmdOutput)/2)
	for i := 0; i < len(cmdOutput); i += 2 {
		u16s = append(u16s, uint16(cmdOutput[i])|uint16(cmdOutput[i+1])<<8)
	}
	output := string(utf16.Decode(u16s))

	// Remove all whitespace characters
	output = strings.TrimSpace(output)
	output = strings.ReplaceAll(output, " ", "")

	if output == "SERVICE_RUNNING" {
		return "在线", nil
	} else {
		return "离线", nil
	}
}

func (p *Program) Start() error {
	cmd := exec.Command(p.NssmExecPath, "start", p.ServiceName)
	err := cmd.Run()
	if err != nil {
		return fmt.Errorf("failed to start %s: %v", p.Name, err)
	}
	return nil
}

func (p *Program) Stop() error {
	cmd := exec.Command(p.NssmExecPath, "stop", p.ServiceName)
	err := cmd.Run()
	if err != nil {
		return fmt.Errorf("failed to stop %s: %v", p.Name, err)
	}
	return nil
}

func (p *Program) Restart() error {
	err := p.Stop()
	if err != nil {
		return fmt.Errorf("failed to stop %s: %v", p.Name, err)
	}
	err = p.Start()
	if err != nil {
		return fmt.Errorf("failed to start %s: %v", p.Name, err)
	}
	return nil
}

func (p *Program) Toggle() error {
	status, _ := p.GetStatus()
	if status == "在线" {
		err := p.Stop()
		if err != nil {
			return fmt.Errorf("failed to stop %s: %v", p.Name, err)
		}
		p.Status.SetText("离线")
		p.Button.SetText("启动")
	} else {
		err := p.Start()
		if err != nil {
			return fmt.Errorf("failed to start %s: %v", p.Name, err)
		}
		p.Status.SetText("在线")
		p.Button.SetText("停止")
	}
	return nil
}
