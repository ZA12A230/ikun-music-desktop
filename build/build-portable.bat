@echo off
chcp 65001 > nul
echo ========================================
echo   LX-Music 免安装版构建脚本
echo ========================================
echo.

:: 检查 Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Node.js，请先安装 Node.js (推荐 v20 LTS)
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

:: 获取 Node.js 版本
node --version
echo.

:: 安装依赖
echo [1/5] 正在安装项目依赖...
npm install
if %errorlevel% neq 0 (
    echo [错误] 依赖安装失败！
    pause
    exit /b 1
)
echo.

:: 构建主题
echo [2/5] 正在构建主题...
call npm run build:theme
if %errorlevel% neq 0 (
    echo [错误] 主题构建失败！
    pause
    exit /b 1
)
echo.

:: 打包应用
echo [3/5] 正在打包应用（这可能需要几分钟）...
call npm run pack
if %errorlevel% neq 0 (
    echo [错误] 打包失败！
    pause
    exit /b 1
)
echo.

:: 创建 portable 文件夹
echo [4/5] 正在创建 portable 文件夹...
if not exist "build\portable" mkdir build\portable

:: 复制必要文件到 portable
echo [5/5] 正在复制文件到 portable 文件夹...
xcopy /E /Y "dist\win-unpacked\*" "build\portable\" > nul
if %errorlevel% neq 0 (
    echo [错误] 文件复制失败！
    pause
    exit /b 1
)

:: 创建 portable 标记文件
echo. > build\portable\portable.txt

:: 清理
echo.
echo [完成] 正在清理临时文件...
if exist "dist" rmdir /S /Q dist

echo.
echo ========================================
echo   构建完成！
echo ========================================
echo.
echo 便携版已生成在: build\portable 文件夹
echo 可以直接运行里面的 exe 文件，无需安装！
echo.
pause
