#!/bin/bash

echo "========================================="
echo "  LX Music 构建监控脚本 v2"
echo "========================================="
echo ""
echo "开始监控 GitHub Actions 构建状态..."
echo "监控仓库: https://github.com/ZA12A230/ikun-music-desktop"
echo "检查间隔: 每 3 分钟"
echo ""

CHECK_COUNT=0

while true; do
    CHECK_COUNT=$((CHECK_COUNT + 1))
    echo ""
    echo "========================================="
    echo "检查 #${CHECK_COUNT} - $(date '+%Y-%m-%d %H:%M:%S')"
    echo "========================================="
    
    # 获取最新的构建状态
    RESPONSE=$(curl -s "https://api.github.com/repos/ZA12A230/ikun-music-desktop/actions/runs?per_page=3" 2>&1)
    
    # 检查是否遇到速率限制
    if echo "$RESPONSE" | grep -q "rate limit"; then
        echo "⚠️ 遇到 API 速率限制"
        echo "等待 5 分钟后重试..."
        sleep 300
        continue
    fi
    
    # 解析状态
    STATUS=$(echo "$RESPONSE" | grep -o '"status":"[^"]*"' | head -1 | cut -d'"' -f4)
    CONCLUSION=$(echo "$RESPONSE" | grep -o '"conclusion":"[^"]*"' | head -1 | cut -d'"' -f4)
    RUN_DISPLAY=$(echo "$RESPONSE" | grep -o '"display_title":"[^"]*"' | head -1 | cut -d'"' -f4)
    CREATED_AT=$(echo "$RESPONSE" | grep -o '"created_at":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    echo "最新构建状态:"
    echo "  状态: ${STATUS:-未知}"
    echo "  结论: ${CONCLUSION:-进行中}"
    echo "  显示: ${RUN_DISPLAY:-未知}"
    echo "  创建时间: ${CREATED_AT:-未知}"
    
    if [ "$STATUS" == "completed" ]; then
        echo ""
        echo "========================================="
        echo "  🎉 构建完成！"
        echo "========================================="
        
        if [ "$CONCLUSION" == "success" ]; then
            echo ""
            echo "✅ 构建成功！"
            echo ""
            echo "========================================="
            echo "  📥 下载说明"
            echo "========================================="
            echo ""
            echo "方式 1 - 从 Release 下载（推荐）："
            echo "  1. 访问 https://github.com/ZA12A230/ikun-music-desktop/releases"
            echo "  2. 点击最新的 release"
            echo "  3. 下载 portable 版本"
            echo ""
            echo "方式 2 - 从 Actions 下载："
            echo "  1. 访问 https://github.com/ZA12A230/ikun-music-desktop/actions"
            echo "  2. 点击成功的构建"
            echo "  3. 在 Artifacts 部分下载 portable-version"
            echo ""
            echo "方式 3 - 下载构建文件夹："
            echo "  1. 访问 https://github.com/ZA12A230/ikun-music-desktop/actions"
            echo "  2. 点击成功的构建"
            echo "  3. 在 Artifacts 部分下载 dist-folder"
            echo "  4. 解压后使用 npm run pack:dir 重新打包"
            echo ""
        else
            echo ""
            echo "❌ 构建失败！"
            echo "请检查错误日志并修复问题。"
            echo "访问 https://github.com/ZA12A230/ikun-music-desktop/actions 查看详情"
            echo ""
        fi
        
        break
    else
        echo ""
        echo "⏳ 构建进行中..."
        echo "这可能需要 10-30 分钟"
        echo ""
        echo "你可以随时访问以下链接查看详细进度："
        echo "https://github.com/ZA12A230/ikun-music-desktop/actions"
        echo ""
        echo "等待 3 分钟后再次检查..."
        sleep 180
    fi
done

echo ""
echo "========================================="
echo "监控结束 - $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================="
