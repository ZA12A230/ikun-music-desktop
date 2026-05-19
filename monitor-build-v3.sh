#!/bin/bash

echo "========================================="
echo "  LX Music 构建监控脚本 v3 (智能版)"
echo "========================================="
echo ""
echo "开始监控 GitHub Actions 构建状态..."
echo "监控仓库: https://github.com/ZA12A230/ikun-music-desktop"
echo "检查间隔: 每 2 分钟（开始时）"
echo ""

# 获取最新的tag
LATEST_TAG="v3.3.0-fix.11"
CHECK_INTERVAL=120  # 初始间隔：2分钟
MAX_CHECKS=60  # 最多检查60次（约2小时）
CHECK_COUNT=0

while [ $CHECK_COUNT -lt $MAX_CHECKS ]; do
    CHECK_COUNT=$((CHECK_COUNT + 1))
    echo ""
    echo "========================================="
    echo "检查 #${CHECK_COUNT} - $(date '+%Y-%m-%d %H:%M:%S')"
    echo "========================================="
    
    # 获取最新的构建信息
    RESPONSE=$(curl -s "https://api.github.com/repos/ZA12A230/ikun-music-desktop/actions/runs?per_page=5" 2>&1)
    
    # 检查是否遇到速率限制
    if echo "$RESPONSE" | grep -q '"message":.*rate limit' || echo "$RESPONSE" | grep -q 'rate limit'; then
        echo "⚠️ 遇到 API 速率限制"
        echo "等待 10 分钟后重试..."
        sleep 600
        continue
    fi
    
    # 检查响应是否为空或错误
    if [ -z "$RESPONSE" ] || echo "$RESPONSE" | grep -q '"statusCode"'; then
        echo "⚠️ API 响应异常"
        echo "等待 3 分钟后重试..."
        sleep 180
        continue
    fi
    
    # 解析最新的构建状态
    # 获取第一个run的信息
    RUN_ID=$(echo "$RESPONSE" | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)
    STATUS=$(echo "$RESPONSE" | grep -o '"status":"[^"]*"' | head -1 | cut -d'"' -f4)
    CONCLUSION=$(echo "$RESPONSE" | grep -o '"conclusion":"[^"]*"' | head -1 | cut -d'"' -f4)
    RUN_NAME=$(echo "$RESPONSE" | grep -o '"name":"[^"]*"' | head -1 | cut -d'"' -f4)
    EVENT=$(echo "$RESPONSE" | grep -o '"event":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    echo "最新构建信息:"
    echo "  构建ID: ${RUN_ID:-未知}"
    echo "  状态: ${STATUS:-未知}"
    echo "  结论: ${CONCLUSION:-进行中}"
    echo "  名称: ${RUN_NAME:-未知}"
    echo "  触发事件: ${EVENT:-未知}"
    
    # 如果构建完成
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
            echo "  2. 点击最新的 release (v3.3.0-fix.11)"
            echo "  3. 下载 LX-Music-Portable-win-x64.zip"
            echo ""
            echo "方式 2 - 从 Actions 下载："
            echo "  1. 访问 https://github.com/ZA12A230/ikun-music-desktop/actions"
            echo "  2. 点击成功的构建"
            echo "  3. 在 Artifacts 部分下载 LX-Music-Portable-win-x64"
            echo ""
            echo "方式 3 - 下载构建文件夹："
            echo "  1. 访问 https://github.com/ZA12A230/ikun-music-desktop/actions"
            echo "  2. 点击成功的构建"
            echo "  3. 在 Artifacts 部分下载 dist-folder"
            echo "  4. 解压后直接运行"
            echo ""
            echo "⏰ 注意：构建完成后可能需要几分钟才能生成 Artifacts"
            echo ""
        else
            echo ""
            echo "❌ 构建失败！"
            echo "错误结论: ${CONCLUSION}"
            echo ""
            echo "请检查错误日志："
            echo "https://github.com/ZA12A230/ikun-music-desktop/actions"
            echo ""
            echo "可能的问题："
            echo "  1. 依赖安装失败"
            echo "  2. TypeScript 编译错误"
            echo "  3. 构建脚本执行失败"
            echo "  4. 其他未知错误"
            echo ""
        fi
        
        break
    else
        echo ""
        echo "⏳ 构建进行中..."
        echo "这通常需要 10-30 分钟"
        echo ""
        echo "你可以随时访问以下链接查看详细进度："
        echo "https://github.com/ZA12A230/ikun-music-desktop/actions"
        echo ""
        
        # 根据检查次数调整等待时间
        if [ $CHECK_COUNT -lt 5 ]; then
            # 开始阶段，每2分钟检查一次
            echo "等待 2 分钟后再次检查..."
            sleep 120
        elif [ $CHECK_COUNT -lt 15 ]; then
            # 中期阶段，每3分钟检查一次
            echo "等待 3 分钟后再次检查..."
            sleep 180
        else
            # 后期阶段，每5分钟检查一次
            echo "等待 5 分钟后再次检查..."
            sleep 300
        fi
    fi
done

if [ $CHECK_COUNT -ge $MAX_CHECKS ]; then
    echo ""
    echo "========================================="
    echo "⚠️ 监控超时"
    echo "========================================="
    echo "已检查 ${MAX_CHECKS} 次（约2小时），仍未完成"
    echo "请手动检查构建状态："
    echo "https://github.com/ZA12A230/ikun-music-desktop/actions"
fi

echo ""
echo "========================================="
echo "监控结束 - $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================="
