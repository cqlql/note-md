## 常见问题

1. 明明在 Microsoft Store 下安装了 Ubuntu 22.04，`wsl -l -v` 却检查不到
   1. 安装成功后需打开 Ubuntu 22.04 应用，等待初始化完成再使用 `wsl -l -v` 命令检查
2. 使用 `wsl --set-version Ubuntu 22.04 2` 无法将 wsl 升级成 wsl2
   1. 先[启用虚拟机功能](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#step-3---enable-virtual-machine-feature)
   2. 然后[安装 Linux 内核包](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)
