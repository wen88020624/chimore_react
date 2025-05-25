# Projects API 說明文件

## 概述
這是一個案例實績專案管理的 RESTful API，提供完整的 CRUD 操作功能。

## 資料模型

### Project 專案模型
```typescript
{
  id: string;          // UUID 主鍵
  title: string;       // 文章標題
  category: string;    // 文章分類
  content: string;     // 內文
  status: ProjectStatus; // 狀態 (inProgress | complete)
  imageUrl?: string;   // 圖片 URL (可選)
  createdAt: Date;     // 建立時間
  updatedAt: Date;     // 更新時間
}
```

### ProjectStatus 狀態枚舉
- `inProgress`: 進行中
- `complete`: 完成

## API 端點

### 1. 建立專案
- **方法**: `POST /projects`
- **請求體**:
```json
{
  "title": "專案標題",
  "category": "專案分類",
  "content": "專案內容描述",
  "status": "inProgress", // 可選，預設為 inProgress
  "imageUrl": "https://example.com/image.jpg" // 可選
}
```

### 2. 取得所有專案
- **方法**: `GET /projects`
- **查詢參數**:
  - `status`: 根據狀態篩選 (`inProgress` | `complete`)
  - `category`: 根據分類篩選

### 3. 取得單一專案
- **方法**: `GET /projects/:id`
- **參數**: `id` - 專案的 UUID

### 4. 更新專案
- **方法**: `PATCH /projects/:id`
- **參數**: `id` - 專案的 UUID
- **請求體**: 任何需要更新的欄位

### 5. 刪除專案
- **方法**: `DELETE /projects/:id`
- **參數**: `id` - 專案的 UUID

## 使用範例

### 建立專案
```bash
curl -X POST http://localhost:3000/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "企業官網重新設計",
    "category": "網頁設計",
    "content": "為某科技公司重新設計企業官網...",
    "status": "inProgress",
    "imageUrl": "https://example.com/project.jpg"
  }'
```

### 取得所有專案
```bash
curl http://localhost:3000/projects
```

### 根據狀態篩選
```bash
curl http://localhost:3000/projects?status=inProgress
```

### 根據分類篩選
```bash
curl http://localhost:3000/projects?category=網頁設計
```

### 更新專案
```bash
curl -X PATCH http://localhost:3000/projects/{project-id} \
  -H "Content-Type: application/json" \
  -d '{
    "status": "complete"
  }'
```

### 刪除專案
```bash
curl -X DELETE http://localhost:3000/projects/{project-id}
```

## 錯誤處理
- `404 Not Found`: 當專案不存在時
- `400 Bad Request`: 當請求資料格式錯誤時
- `500 Internal Server Error`: 伺服器內部錯誤

## 資料驗證
- `title`: 必填字串
- `category`: 必填字串
- `content`: 必填字串
- `status`: 可選，必須是 `inProgress` 或 `complete`
- `imageUrl`: 可選字串

## 啟動伺服器
```bash
npm run start:dev
```

伺服器將在 `http://localhost:3000` 啟動。 