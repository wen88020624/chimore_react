/*
  Warnings:

  - You are about to drop the column `content` on the `projects` table. All the data in the column will be lost.
  - Added the required column `description` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `projects` table without a default value. This is not possible if the table is not empty.

*/

-- 第一步：添加新欄位並設定暫時預設值
ALTER TABLE "projects" 
ADD COLUMN "buildingFloors" TEXT,
ADD COLUMN "description" TEXT DEFAULT '專案描述待更新',
ADD COLUMN "features" TEXT,
ADD COLUMN "landArea" TEXT,
ADD COLUMN "location" TEXT DEFAULT '位置待更新',
ADD COLUMN "statusNote" TEXT,
ADD COLUMN "units" TEXT,
ALTER COLUMN "category" SET DEFAULT '都市更新';

-- 第二步：將現有的 content 資料遷移到 description
UPDATE "projects" SET "description" = "content" WHERE "content" IS NOT NULL;

-- 第三步：移除預設值約束並設為 NOT NULL
ALTER TABLE "projects" 
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "location" DROP DEFAULT,
ALTER COLUMN "location" SET NOT NULL;

-- 第四步：移除舊的 content 欄位
ALTER TABLE "projects" DROP COLUMN "content";
