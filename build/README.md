# LX-Music 便携版构建系统

## 🎯 自动构建（推荐）

### 方法一：使用 GitHub Actions（无需本地环境）

1. **Fork 本仓库** 或直接使用

2. **触发构建**：
   - **方式 A**：在 GitHub 页面点击 "Actions" → "Build Portable Version" → "Run workflow"
   - **方式 B**：创建一个 tag 来触发构建：
     ```bash
     git tag v3.3.0
     git push origin v3.3.0
     ```

3. **下载构建产物**：
   - 进入项目的 **Actions** 页面
   - 选择最新的 workflow run
   - 下载以下 artifact：
     - `LX-Music-Portable-x64` - 便携版完整文件夹
     - `dist-folder-x64` - 编译后的文件
     - `build-folder-x64` - 构建文件夹

4. **使用便携版**：
   - 解压 `LX-Music-Portable-x64.zip`
   - 进入解压后的文件夹
   - 双击 `LX Music.exe` 运行

### 方法二：手动触发构建（推荐用于测试）

1. 打开 GitHub 仓库页面
2. 点击 **Actions** 标签
3. 选择 **Build Portable Version**
4. 点击 **Run workflow**
5. 填写版本号（如：`v3.3.0`）
6. 点击绿色按钮启动构建
7. 等待 15-20 分钟
8. 在 Summary 页面下载 artifacts

## 🔧 本地构建（需要 Windows + Node.js）

### 前置要求
- Windows 10/11
- Node.js v20 LTS 或更高版本
- 约 5GB 可用磁盘空间

### 构建步骤

1. **克隆仓库**：
   ```bash
   git clone https://github.com/你的用户名/ikun-music-desktop.git
   cd ikun-music-desktop/build
   ```

2. **运行构建脚本**：
   ```bash
   .\build-portable.bat
   ```

3. **等待完成**：
   - 首次构建需要下载 Electron（约 100MB）
   - 构建过程约 15-20 分钟

4. **找到便携版**：
   ```
   build\portable\LX Music.exe
   ```

## 📦 构建产物说明

### Artifact 列表

1. **LX-Music-Portable-x64**
   - 便携版完整文件夹（已压缩）
   - 可以直接使用
   - 包含 EXE 和所有依赖

2. **dist-folder-x64**
   - Webpack 编译后的文件
   - 用于调试或重新打包

3. **build-folder-x64**
   - 完整的构建文件夹
   - 包含源码、配置和 dist 文件

## ✨ GitHub Actions 工作流程

### 自动触发条件

1. **Tag 推送**：当推送 `v*` 格式的 tag 时自动构建
2. **Release 创建**：创建 Release 时自动附加构建产物
3. **手动触发**：在 Actions 页面手动运行

### 工作流程说明

```
workflow_dispatch (手动触发)
  ↓
build (构建作业)
  ├─ Checkout code
  ├─ Setup Node.js 20.x
  ├─ npm install
  ├─ npm run build:theme
  ├─ npm run pack
  ├─ Create portable folder
  ├─ Upload portable artifact
  ├─ Upload build folder
  └─ Upload dist folder
  ↓
create-release (发布作业)
  ├─ Download portable artifact
  ├─ Create portable.zip
  └─ Upload to Release
```

### 配置文件

工作流配置文件位置：`.github/workflows/build.yml`

主要配置：
- **Node.js 版本**：20.x
- **Electron 版本**：37.6.1
- **构建平台**：Windows x64
- **Artifact 保留时间**：30 天（自动构建）/ 90 天（手动构建）

## 🎨 新增功能

1. **动态背景** - 根据播放歌曲封面自动生成模糊背景
2. **液态玻璃效果** - 全局毛玻璃和半透明效果
3. **定时关闭** - 播放详情页定时关闭功能
4. **第三方同步服务器** - 支持 https://lxsync.5had0w.com/
5. **网盘备份** - 多种网盘备份支持框架
6. **开机自启动** - 可在设置中开启
7. **开发者** - G佑（已删除聊群）

## ❓ 常见问题

### Q: 构建失败怎么办？

**A**: 检查以下几点：
1. 查看 Actions 日志中的错误信息
2. 确保仓库有足够的存储空间（GitHub 提供 2GB）
3. 尝试重新运行构建
4. 检查是否有语法错误

### Q: 下载的 artifact 是空的？

**A**: GitHub 限制 artifact 下载大小。如果文件超过一定大小，可能需要通过 Release 下载。

### Q: 如何更新到最新版本？

**A**: 
1. 拉取最新代码：`git pull`
2. 推送新的 tag：`git tag v新版本号 && git push origin v新版本号`
3. 等待自动构建完成

### Q: 便携版无法运行？

**A**: 
1. 确保完整解压所有文件
2. 检查是否有杀毒软件阻止
3. 尝试以管理员身份运行

## 📞 技术支持

- 提交 GitHub Issue
- 查看 Actions 日志进行故障排除
- 参考构建日志中的错误信息

## 📄 许可证

本项目基于 Apache-2.0 许可证开源。

## 🙏 致谢

- 原始项目：LX Music Desktop
- 开发者：G佑
