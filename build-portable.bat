@echo off
chcp 65001 > nul
title LX Music 构建工具
echo ========================================
echo   LX Music 便携版构建工具
echo ========================================
echo.

:: 检查 Node.js
echo [1/6] 检查 Node.js 环境...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Node.js！
    echo 请先从 https://nodejs.org/ 下载安装 Node.js (推荐 v20 或更高版本)
    pause
    exit /b 1
)
echo [成功] Node.js 已安装:
node --version
npm --version
echo.

:: 检查是否在正确目录
echo [2/6] 检查项目文件...
if not exist "package.json" (
    echo [警告] 未找到 package.json
    echo 请确保你在项目根目录运行此脚本！
    pause
    exit /b 1
)
echo [成功] 项目文件已找到
echo.

:: 安装依赖
echo [3/6] 安装项目依赖...
call npm install
if %errorlevel% neq 0 (
    echo [错误] 依赖安装失败！
    pause
    exit /b 1
)
echo [成功] 依赖安装完成
echo.

:: 构建主题
echo [4/6] 构建主题文件...
call npm run build:theme
if %errorlevel% neq 0 (
    echo [警告] 主题构建可能有问题，但继续...
)
echo [成功] 主题构建完成
echo.

:: 构建项目
echo [5/6] 构建 Electron 应用...
call npm run build
if %errorlevel% neq 0 (
    echo [错误] 项目构建失败！
    pause
    exit /b 1
)
echo [成功] 项目构建完成
echo.

:: 打包到目录
echo [6/6] 打包到目录...
call npm run pack:dir
if %errorlevel% neq 0 (
    echo [错误] 打包失败！
    pause
    exit /b 1
)
echo [成功] 打包完成
echo.

:: 创建便携版目录
echo ========================================
echo   创建便携版
echo ========================================
if exist "dist\win-unpacked" (
    if exist "portable" rmdir /s /q "portable"
    xcopy /E /I /Y "dist\win-unpacked" "portable" >nul
    echo. > portable\portable.txt
    echo [成功] 便携版已创建在 portable 目录中
) else (
    echo [警告] 未找到 dist\win-unpacked 目录！
)

echo.
echo ========================================
echo   构建完成！
echo ========================================
echo.
echo 便携版位置: portable 目录
echo 运行程序: portable\LX Music.exe
echo.
echo 如需创建单文件便携版，运行:
echo   npm run pack:win:portable:x64
echo.
pause
