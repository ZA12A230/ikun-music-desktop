# GitHub 上传指南

## 上传到 GitHub

### 1. 创建 GitHub 仓库
1. 登录 GitHub
2. 点击 "New repository"
3. 填写仓库名称（如：`ikun-music-desktop`）
4. 选择 Private 或 Public
5. 点击 "Create repository"

### 2. 本地初始化（如果还没有）
```bash
cd build
git init
git add .
git commit -m "Initial commit - LX Music with new features"
```

### 3. 添加远程仓库
```bash
git remote add origin https://github.com/你的用户名/仓库名.git
```

### 4. 推送到 GitHub
```bash
git push -u origin main
```

### 5. 创建发行版（可选但推荐）

1. 在 GitHub 仓库页面，点击 "Releases"
2. 点击 "Create a new release"
3. 填写版本号（如：`v3.3.0-fix.8`）
4. 上传 `build\portable` 文件夹（构建完成后）为附件
5. 点击 "Publish release"

## 📋 Git 操作速查

```bash
# 查看状态
git status

# 添加所有更改
git add .

# 提交
git commit -m "你的提交信息"

# 推送到远程
git push

# 拉取更新
git pull

# 创建分支
git branch 分支名

# 切换分支
git checkout 分支名
```

## ⚠️ 注意事项

1. **不要提交 node_modules** - 太大且不需要
2. **.gitignore** - 确保包含以下内容：
   ```
   node_modules/
   dist/
   *.log
   .env
   ```

3. **敏感信息** - 不要提交任何 API keys 或密码

## 🔄 更新代码后

```bash
git add .
git commit -m "更新描述"
git push
```

然后重新在 Windows 上运行 `build-portable.bat` 生成新的 portable 版本。
