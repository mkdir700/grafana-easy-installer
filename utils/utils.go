package utils

import "path/filepath"

func GetNssmExecPath(installDir string) string {
	return filepath.Join(installDir, "resources/nssm.exe")
}

func GetLokiExecPath(installDir string) string {
	return filepath.Join(installDir, "resources/loki.exe")
}

func GetPromtailExecPath(installDir string) string {
	return filepath.Join(installDir, "resources/promtail.exe")
}

func GetPromtailConfigPath(installDir string) string {
	return filepath.Join(installDir, "resources/promtail-local-config.yaml")
}

func GetLokiConfigPath(installDir string) string {
	return filepath.Join(installDir, "resources/loki-local-config.yaml")
}

func GetGrafanaExecPath(installDir string) string {
	return filepath.Join(installDir, "resources/grafana/bin/grafana-server.exe")
}
