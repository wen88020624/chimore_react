# 奇模有限公司 - 專案管理系統

這是一個全端專案管理系統，包含前端展示頁面和管理員後台管理功能。

## 功能特色

### 前端展示頁面
- 首頁展示
- 公司簡介
- 專案展示（實例佳績）
- 聯絡我們

### 管理員後台
- 管理員身份驗證
- 專案CRUD操作（創建、讀取、更新、刪除）
- 地區分類篩選
- 專案狀態管理
- 範例資料創建

## 技術架構

### 前端
- **React 18** + **TypeScript**
- **Ant Design** - UI組件庫
- **React Router** - 路由管理
- **Styled Components** - 樣式管理
- **Vite** - 建構工具

### 後端
- **NestJS** - Node.js框架
- **Prisma** - ORM資料庫工具
- **PostgreSQL** - 資料庫
- **Swagger** - API文件
- **TypeScript** - 型別安全

## 快速開始

### 環境需求
- Node.js 18+
- PostgreSQL 14+
- npm 或 yarn

### 安裝與啟動

1. **克隆專案**
```bash
git clone <repository-url>
cd chimore_react
```

2. **安裝依賴**
```bash
# 安裝後端依賴
cd server
npm install

# 安裝前端依賴
cd ../frontend
npm install
```

3. **設置資料庫**
```bash
cd ../server
# 複製環境變數檔案
cp .env.example .env

# 編輯 .env 檔案，設置資料庫連線
# DATABASE_URL="postgresql://username:password@localhost:5432/chimore_db"

# 執行資料庫遷移
npm run db:migrate
```

4. **啟動服務**
```bash
# 啟動後端服務 (在 server 目錄)
npm run start:dev

# 啟動前端服務 (在 frontend 目錄)
cd ../frontend
npm run dev
```

5. **訪問應用**
- 前端應用：http://localhost:5173
- 後端API：http://localhost:3000
- API文件：http://localhost:3000/api

## 管理員功能使用說明

### 登入管理後台

1. 訪問管理員登入頁面：http://localhost:5173/admin/login
2. 使用測試帳號登入：
   - 電子郵件：`admin@chimore.com`
   - 密碼：`admin123`

### 專案管理功能

#### 查看專案列表
- 登入後自動跳轉到專案管理頁面
- 可查看所有專案的詳細資訊
- 支援地區分類篩選

#### 新增專案
1. 點擊「新增專案」按鈕
2. 填寫專案資訊：
   - **必填欄位**：專案標題、專案位置、專案描述
   - **選填欄位**：專案分類、專案狀態、狀態說明、土地面積、建築樓層、住宅單位數、專案特色、圖片URL

#### 編輯專案
1. 在專案卡片上點擊「編輯」按鈕
2. 修改專案資訊
3. 點擊「更新」保存變更

#### 刪除專案
1. 在專案卡片上點擊「刪除」按鈕
2. 確認刪除操作

#### 創建範例資料
- 點擊「創建範例資料」按鈕可快速創建都市更新專案範例

### 專案分類

系統支援以下專案分類：
- 都市更新
- 住宅開發
- 商業開發
- 住商混合
- 公共建設

### 地區篩選

支援台灣各縣市的地區篩選：
- 直轄市：台北市、新北市、桃園市、台中市、台南市、高雄市
- 省轄市：基隆市、新竹市、嘉義市
- 縣：新竹縣、苗栗縣、彰化縣、南投縣、雲林縣、嘉義縣、屏東縣、宜蘭縣、花蓮縣、台東縣、澎湖縣、金門縣、連江縣

## API 端點

### 身份驗證
- `POST /auth/login` - 管理員登入

### 專案管理
- `GET /projects` - 獲取所有專案
- `GET /projects?category={category}` - 根據分類獲取專案
- `GET /projects?status={status}` - 根據狀態獲取專案
- `GET /projects/:id` - 獲取單個專案
- `POST /projects` - 創建新專案
- `PATCH /projects/:id` - 更新專案
- `DELETE /projects/:id` - 刪除專案
- `POST /projects/sample/urban-renewal` - 創建範例專案

## 資料庫結構

### Project 模型
```typescript
{
  id: string              // UUID
  title: string           // 專案標題
  location: string        // 專案位置
  description: string     // 專案描述
  statusNote?: string     // 狀態說明
  category: string        // 專案分類
  status: ProjectStatus   // 專案狀態 (inProgress | complete)
  imageUrl?: string       // 圖片URL
  landArea?: string       // 土地面積
  buildingFloors?: string // 建築樓層
  units?: string          // 住宅單位數
  features?: string       // 專案特色
  createdAt: DateTime     // 創建時間
  updatedAt: DateTime     // 更新時間
}
```

## 開發指令

### 後端
```bash
npm run start:dev      # 開發模式
npm run build          # 建構
npm run start:prod     # 生產模式
npm run db:migrate     # 資料庫遷移
npm run db:studio      # 開啟Prisma Studio
```

### 前端
```bash
npm run dev            # 開發模式
npm run build          # 建構
npm run preview        # 預覽建構結果
```

## 部署說明

### 環境變數設置
確保在生產環境中設置以下環境變數：
- `DATABASE_URL` - PostgreSQL連線字串
- `NODE_ENV=production`

### 建構與部署
```bash
# 後端
cd server
npm run build
npm run start:prod

# 前端
cd frontend
npm run build
# 將 dist 目錄部署到靜態檔案服務器
```

## 安全注意事項

⚠️ **重要**：當前的身份驗證系統是簡化版本，僅用於開發和測試。在生產環境中，請實施以下安全措施：

1. 使用真實的JWT令牌系統
2. 實施密碼加密（bcrypt）
3. 添加CSRF保護
4. 實施速率限制
5. 使用HTTPS
6. 定期更新依賴套件

## 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交變更 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 授權

此專案採用 MIT 授權條款。 