# LX Music 音乐播放器 - 构建与使用说明

## 🎉 项目说明

这是一个增强版的 LX Music 音乐播放器，包含以下新功能：

1. ✅ **动态背景** - 根据当前播放歌曲的封面自动生成模糊背景
2. ✅ **全局液态玻璃效果** - 美观的毛玻璃半透明界面
3. ✅ **播放页定时关闭** - 支持自动停止播放，可选择等待歌曲播放完
4. ✅ **网盘备份** - 支持多种网盘备份（界面已搭建）
5. ✅ **第三方同步服务** - 支持 https://lxsync.5had0w.com/
6. ✅ **开发者信息** - 更新为 G佑，删除所有聊群
7. ✅ **开机自启动** - 可在设置中配置

---

## 🚀 快速开始

### 方式一：本地构建（推荐，最稳定）

#### 1. 准备环境

下载并安装 Node.js (推荐 v20 LTS 或更高版本)：
- 访问：https://nodejs.org/
- 下载并安装，一路"下一步"即可

#### 2. 下载项目

**方式 A：用 Git 克隆（推荐）**
```bash
git clone https://github.com/ZA12A230/ikun-music-desktop.git
cd ikun-music-desktop
```

**方式 B：直接下载 ZIP**
- 访问：https://github.com/ZA12A230/ikun-music-desktop
- 点击绿色的 "Code" 按钮，选择 "Download ZIP"
- 解压到你想要的位置

#### 3. 开始构建

1. 进入项目文件夹
2. 双击运行 `build-portable.bat`
3. 等待 10-30 分钟（首次需要下载 Electron，约 100MB）

**如果没有 build-portable.bat，手动构建：**
```bash
# 打开 PowerShell 或 CMD，进入项目文件夹
npm install
npm run build:theme
npm run build
npm run pack:dir

# 然后创建便携版
# 复制 dist\win-unpacked 文件夹为 portable
# 在 portable 文件夹内创建一个空的 portable.txt 文件
```

#### 4. 运行程序

构建完成后：
- 进入 `portable` 文件夹
- 运行 `LX Music.exe`
- 享受音乐吧！🎵

---

### 方式二：GitHub Actions 自动构建

1. 访问：https://github.com/ZA12A230/ikun-music-desktop/actions
2. 点击 "Build Portable Version"
3. 点击 "Run workflow"（如果有这个按钮的话）
4. 填写版本号，点击绿色的 "Run workflow"
5. 等待构建完成（15-45分钟）
6. 下载 artifacts 中的 portable 版本

---

## 📂 目录说明

```
ikun-music-desktop/
├── build-portable.bat    # 一键构建脚本（我们刚创建的）
├── package.json          # 项目配置
├── src/                  # 源代码
│   ├── renderer/         # 前端界面代码
│   ├── main/             # Electron 主进程
│   └── ...
├── dist/                 # 构建输出（构建后出现）
└── portable/             # 便携版（构建后出现）
```

---

## 🎯 使用新功能

### 1. 开启动态背景
- 打开设置
- 选择"基本设置"
- 找到"动态背景"选项
- 开启开关

### 2. 使用定时关闭
- 在播放详情页
- 点击右上角的时钟图标
- 设置时间
- 可选"等待歌曲播放完"

### 3. 第三方同步
- 打开设置
- 选择"同步"
- 配置同步地址：https://lxsync.5had0w.com/

---

## 🐛 常见问题

### Q: npm install 很慢怎么办？
A: 使用淘宝镜像：
```bash
npm config set registry https://registry.npmmirror.com/
npm install
```

### Q: 杀毒软件报警？
A: 正常现象，Electron 应用常被误报，添加信任即可。

### Q: 如何更新？
A:
1. 备份 `portable\LxDatas` 文件夹（用户数据）
2. 删除旧项目，下载新的
3. 重新构建
4. 复制 `LxDatas` 回去

### Q: 数据存储在哪里？
A: 在程序同级的 `portable\LxDatas` 文件夹里。

---

## 📄 构建流程详解

如果你想了解每个步骤：

1. `npm install` - 安装所有依赖包
2. `npm run build:theme` - 构建主题文件
3. `npm run build` - 编译 TypeScript/JavaScript
4. `npm run pack:dir` - 打包成目录格式

---

## 👨‍💻 开发者

- 开发者：G佑
- 项目基于：LX Music

---

## 📝 许可证

Apache-2.0 License

---

## ✨ 祝你使用愉快！

如果有问题，欢迎提交 Issue！

---
享受你的音乐吧！🎵
