#!/bin/bash

echo "========================================="
echo "  LX Music 构建监控脚本"
echo "========================================="
echo ""
echo "开始监控 GitHub Actions 构建状态..."
echo "监控仓库: https://github.com/ZA12A230/ikun-music-desktop"
echo ""

CHECK_COUNT=0

while true; do
    CHECK_COUNT=$((CHECK_COUNT + 1))
    echo "----------------------------------------"
    echo "检查 #${CHECK_COUNT} - $(date '+%Y-%m-%d %H:%M:%S')"
    echo "----------------------------------------"
    
    # 获取最新的构建状态
    STATUS=$(curl -s "https://api.github.com/repos/ZA12A230/ikun-music-desktop/actions/runs?per_page=1" | grep -o '"status":"[^"]*"' | head -1 | cut -d'"' -f4)
    CONCLUSION=$(curl -s "https://api.github.com/repos/ZA12A230/ikun-music-desktop/actions/runs?per_page=1" | grep -o '"conclusion":"[^"]*"' | head -1 | cut -d'"' -f4)
    WORKFLOW_NAME=$(curl -s "https://api.github.com/repos/ZA12A230/ikun-music-desktop/actions/runs?per_page=1" | grep -o '"name":"[^"]*"' | head -1 | cut -d'"' -f4)
    RUN_NUMBER=$(curl -s "https://api.github.com/repos/ZA12A230/ikun-music-desktop/actions/runs?per_page=1" | grep -o '"run_number":[0-9]*' | head -1 | cut -d':' -f2)
    HEAD_COMMIT=$(curl -s "https://api.github.com/repos/ZA12A230/ikun-music-desktop/actions/runs?per_page=1" | grep -o '"message":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    echo "状态: ${STATUS}"
    echo "结论: ${CONCLUSION}"
    echo "工作流: ${WORKFLOW_NAME}"
    echo "运行号: ${RUN_NUMBER}"
    echo "提交信息: ${HEAD_COMMIT}"
    
    if [ "$STATUS" == "completed" ]; then
        echo ""
        echo "========================================="
        echo "  🎉 构建完成！"
        echo "========================================="
        echo ""
        
        if [ "$CONCLUSION" == "success" ]; then
            echo "✅ 构建成功！"
            echo ""
            echo "下载链接："
            echo "1. 访问 https://github.com/ZA12A230/ikun-music-desktop/releases"
            echo "2. 或访问 https://github.com/ZA12A230/ikun-music-desktop/actions"
            echo "   下载 Artifacts 中的 portable-version"
            echo ""
        else
            echo "❌ 构建失败！"
            echo "请检查错误日志并修复问题。"
            echo "访问 https://github.com/ZA12A230/ikun-music-desktop/actions 查看详情"
            echo ""
        fi
        
        break
    else
        echo "⏳ 构建进行中..."
        echo "预计还需要 10-30 分钟"
        echo ""
        echo "你可以访问以下链接查看进度："
        echo "https://github.com/ZA12A230/ikun-music-desktop/actions"
        echo ""
        echo "等待 60 秒后再次检查..."
        sleep 60
    fi
done

echo ""
echo "监控结束"
