# LX Music 桌面版

<p align="center"><a href="https://github.com/ZA12A230/ikun-music-desktop"><img width="200" src="https://raw.githubusercontent.com/ZA12A230/ikun-music-desktop/refs/heads/main/doc/images/icon.png" alt="lx-music logo"></a></p>

<h1 align="center">LX Music 桌面版</h1>

<p align="center">
  <a href="https://github.com/ZA12A230/ikun-music-desktop/releases"><img src="https://img.shields.io/github/release/ZA12A230/ikun-music-desktop" alt="Release version"></a>
  <a href="https://github.com/ZA12A230/ikun-music-desktop/actions/workflows/build-final.yml"><img src="https://github.com/ZA12A230/ikun-music-desktop/workflows/Build%20Final/badge.svg" alt="Build status"></a>
  <a href="https://electronjs.org/releases/stable"><img src="https://img.shields.io/github/package-json/dependency-version/ZA12A230/ikun-music-desktop/dev/electron/master" alt="Electron version"></a>
  <a href="https://github.com/ZA12A230/ikun-music-desktop/releases"><img src="https://img.shields.io/github/downloads/ZA12A230/ikun-music-desktop/latest/total" alt="Downloads"></a>
  <a href="https://github.com/ZA12A230/ikun-music-desktop/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ZA12A230/ikun-music-desktop" alt="License"></a> 
</p>

<p align="center">一个基于 Electron & Vue 开发的音乐软件</p>

## ✨ 功能特性

### 🎵 音乐播放
- 支持多个音乐源搜索和播放
- 支持多种音质选择（128k、320k、FLAC等）
- 歌词同步显示和桌面歌词
- 播放列表管理
- 定时关闭功能

### 🎨 界面特色
- 现代化毛玻璃设计风格
- 支持自定义主题和背景
- 动态背景效果
- iOS液态玻璃风格按钮
- 响应式布局

### ☁️ 云盘同步
- 支持多云盘备份和恢复
- 自动备份功能
- 同步设置、歌单等数据

### 🔄 第三方同步
- 支持多个同步服务器连接
- 自动获取连接码
- 实时显示连接状态
- 支持历史连接地址

### 🤖 AI 智能助手
- 支持多种AI模型（DeepSeek、豆包、ChatGPT等）
- AI智能搜索
- AI聊天功能
- 自定义AI角色
- 一键恢复默认角色

### 📥 下载功能
- 支持下载多种音质
- 批量下载
- 下载进度显示

### 👤 本地账号系统
- 本地账号登录
- 自定义头像和昵称
- 账号数据完全隔离
- 密码保护

## 📥 下载使用

### 便携版（推荐）
1. 访问 [Actions](https://github.com/ZA12A230/ikun-music-desktop/actions)
2. 选择最新的构建任务
3. 下载 `LX-Music-Build-Folder` 或 `LX-Music-Compressed`
4. 解压后直接运行 `LX Music.exe`

### 构建版本
- Windows Portable: 免安装，直接运行
- 自动更新支持

## 🔧 技术栈

- **框架**: Electron 37.6.1
- **前端**: Vue 3.3.13 + TypeScript
- **构建**: electron-builder
- **样式**: LESS + CSS3

## 📦 构建说明

本项目使用 GitHub Actions 自动构建，每次推送代码到 main 分支会自动构建。

构建产物：
- `LX-Music-Build-Folder`: 完整的构建文件夹
- `LX-Music-Compressed`: 压缩版本

## 🛠️ 本地开发

```bash
# 克隆仓库
git clone https://github.com/ZA12A230/ikun-music-desktop.git

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建便携版
npm run pack:dir
```

## 📝 许可证

Apache License 2.0

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系

- GitHub: https://github.com/ZA12A230/ikun-music-desktop
- Issues: https://github.com/ZA12A230/ikun-music-desktop/issues

---

**本版本为修改版，增加了音质选项、UI优化和多项新功能。**
