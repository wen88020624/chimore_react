#!/bin/bash

echo "🧪 奇模專案管理系統 - 功能測試"
echo "================================"

# 測試後端API
echo "📡 測試後端API..."

# 測試專案列表API
echo "1. 測試專案列表API"
PROJECTS_COUNT=$(curl -s http://localhost:3000/projects | jq length 2>/dev/null)
if [ "$PROJECTS_COUNT" -gt 0 ]; then
    echo "   ✅ 專案列表API正常 (共 $PROJECTS_COUNT 個專案)"
else
    echo "   ❌ 專案列表API異常"
fi

# 測試身份驗證API
echo "2. 測試身份驗證API"
AUTH_RESPONSE=$(curl -s -X POST http://localhost:3000/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"admin@chimore.com","password":"admin123"}' | jq -r .message 2>/dev/null)
if [ "$AUTH_RESPONSE" = "登入成功" ]; then
    echo "   ✅ 身份驗證API正常"
else
    echo "   ❌ 身份驗證API異常"
fi

# 測試前端服務器
echo "📱 測試前端服務器..."
FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5174 2>/dev/null)
if [ "$FRONTEND_STATUS" = "200" ]; then
    echo "   ✅ 前端服務器正常運行"
else
    echo "   ❌ 前端服務器異常 (狀態碼: $FRONTEND_STATUS)"
fi

echo ""
echo "🎯 測試完成！"
echo ""
echo "📋 訪問連結："
echo "   前端應用: http://localhost:5174"
echo "   專案頁面: http://localhost:5174/projects"
echo "   管理後台: http://localhost:5174/admin/login"
echo "   API文件:  http://localhost:3000/api"
echo ""
echo "🔑 測試帳號："
echo "   電子郵件: admin@chimore.com"
echo "   密碼:     admin123" 