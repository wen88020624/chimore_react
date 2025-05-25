#!/bin/bash

echo "🚀 設定 Chimore 開發環境..."

# 檢查 Docker 是否安裝
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 未安裝，請先安裝 Docker"
    exit 1
fi

# 檢查 Docker Compose 是否安裝
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose 未安裝，請先安裝 Docker Compose"
    exit 1
fi

echo "📦 啟動 PostgreSQL 資料庫..."
docker-compose up -d postgres

echo "⏳ 等待資料庫啟動..."
sleep 10

echo "🔧 執行資料庫遷移..."
npx prisma migrate dev --name init

echo "🎯 生成 Prisma Client..."
npx prisma generate

echo "✅ 開發環境設定完成！"
echo ""
echo "🌐 現在可以啟動應用程式："
echo "   npm run start:dev"
echo ""
echo "📚 API 文件將在以下位置提供："
echo "   http://localhost:3000/api"
echo ""
echo "🗄️  資料庫管理介面："
echo "   npx prisma studio" 