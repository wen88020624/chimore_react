<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Chimore 後端 API

基於 NestJS 框架構建的後端 API，使用 PostgreSQL 資料庫和 Prisma ORM。

## 功能特色

- 🚀 NestJS 框架
- 🐘 PostgreSQL 資料庫
- 🔧 Prisma ORM
- 📚 Swagger API 文件
- ✅ 資料驗證
- 🌐 CORS 支援

## 環境需求

- Node.js 18+
- PostgreSQL 12+
- npm 或 yarn

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 環境配置

複製並編輯 `.env` 檔案：

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/chimore_db?schema=public"

# Application
PORT=3000
NODE_ENV=development

# JWT (如果需要認證功能)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 3. 資料庫設定

確保 PostgreSQL 服務正在運行，然後創建資料庫：

```sql
CREATE DATABASE chimore_db;
```

### 4. 執行資料庫遷移

```bash
# 生成並執行遷移
npx prisma migrate dev --name init

# 生成 Prisma Client
npx prisma generate
```

### 5. 啟動應用程式

```bash
# 開發模式
npm run start:dev

# 生產模式
npm run build
npm run start:prod
```

## API 文件

應用程式啟動後，可以在以下位置查看 API 文件：

- Swagger UI: http://localhost:3000/api

## 可用的 API 端點

### 用戶管理

- `GET /users` - 獲取所有用戶
- `GET /users/:id` - 根據 ID 獲取用戶
- `POST /users` - 創建新用戶
- `PATCH /users/:id` - 更新用戶
- `DELETE /users/:id` - 刪除用戶

## 專案結構

```
src/
├── prisma/           # Prisma 配置和服務
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── users/            # 用戶模組
│   ├── dto/          # 資料傳輸物件
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── app.module.ts     # 主應用模組
└── main.ts          # 應用程式入口點
```

## 開發指令

```bash
# 開發模式
npm run start:dev

# 建置
npm run build

# 測試
npm run test

# 格式化程式碼
npm run format

# 檢查程式碼
npm run lint

# Prisma 相關
npx prisma studio          # 開啟資料庫管理介面
npx prisma migrate dev      # 執行開發環境遷移
npx prisma generate         # 生成 Prisma Client
npx prisma db push          # 推送 schema 變更到資料庫
```

## 資料庫 Schema

目前包含以下模型：

- **User**: 用戶資料
- **Post**: 文章資料（與用戶關聯）

詳細的 schema 定義請查看 `prisma/schema.prisma` 檔案。

## 環境變數說明

| 變數名 | 說明 | 預設值 |
|--------|------|--------|
| `DATABASE_URL` | PostgreSQL 連線字串 | - |
| `PORT` | 應用程式埠號 | 3000 |
| `NODE_ENV` | 執行環境 | development |
| `JWT_SECRET` | JWT 密鑰 | - |

## 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交變更 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 授權

此專案採用 MIT 授權條款。

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
