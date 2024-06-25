.PHONY: run
run:
	go run .

.PHONY: build
build:
	7z a assets/resources.7z resources/*
	# build launcher
	C:\Users\xyz\sdk\go1.22.2\bin\go.exe build -ldflags -H=windowsgui -o resources/launcher.exe ./cmd/launcher
	# build uninstall
	C:\Users\xyz\sdk\go1.22.2\bin\go.exe build -o resources/uninstall.exe ./cmd/uninstall
	# pack resources
	C:\Users\xyz\sdk\go1.22.2\bin\go.exe build -ldflags -H=windowsgui -o dist/grafana-labs-installer.exe ./cmd/installer

.PHONY: build-uninstall
build-uninstall:
	C:\Users\xyz\sdk\go1.22.2\bin\go.exe build -o resources/uninstall.exe ./cmd/uninstall
	
.PHONY: build-launcher
build-launcher:
	C:\Users\xyz\sdk\go1.22.2\bin\go.exe build -ldflags -H=windowsgui -o resources/launcher.exe ./cmd/launcher
	# C:\Users\xyz\sdk\go1.22.2\bin\go.exe build -o resources/launcher.exe ./cmd/launcher