# Grafana Loki Promtail 一键安装器

## 简介

这是一个使用 Golang 实现的安装器，旨在简化 Grafana、Loki 和 Promtail 的安装过程。对于那些不适合在本机使用 Docker 的用户，特别是 Windows 用户，此安装器提供了一键安装的便捷方式。通过此安装器，用户可以快速安装这三个程序，并在安装完成后直接通过浏览器访问 Grafana，无需进行复杂的配置。

## 功能

- 一键安装 Grafana、Loki 和 Promtail
- 自动配置，使 Grafana 可以直接使用
- 目前仅支持 Windows 平台

## 安装

### 准备工作

在开始安装之前，请确保您的系统满足以下条件：

- Windows 操作系统

### 下载安装器

请下载我们预构建的安装器 `installer.exe`，并将其保存到您的本地计算机。

### 运行安装器

双击运行下载的 `installer.exe` 文件。安装器会自动下载并安装 Grafana、Loki 和 Promtail，并进行必要的配置。

安装完成后，您可以通过浏览器访问 Grafana：

```
http://localhost:3000
```

默认登录账号为 `admin`，默认密码为 `admin`。

## 使用

### Grafana

Grafana 是一个开源的分析和监控平台。安装完成后，您可以通过 `http://localhost:3000` 访问 Grafana 的 Web 界面。

### Loki

Loki 是一个日志聚合系统，专为高效存储和查询日志而设计。Loki 将作为 Grafana 的数据源之一。

### Promtail

Promtail 是一个日志收集器，负责将日志从主机收集并发送到 Loki。安装器会自动配置 Promtail 以收集本地日志。

## 贡献

如果您有任何建议或改进，欢迎提交 Pull Request 或 Issue。

## 许可证

该项目使用 MIT 许可证，详情请参阅 LICENSE 文件。

---

感谢您使用 Grafana Loki Promtail 一键安装器！如果您有任何问题，请随时联系我。