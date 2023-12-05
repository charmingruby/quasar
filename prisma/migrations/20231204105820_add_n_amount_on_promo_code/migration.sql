/*
  Warnings:

  - Added the required column `generatedOnNSchedulings` to the `PromoCode` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PromoCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "generatedOnNSchedulings" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "usedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PromoCode_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "CustomerAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PromoCode" ("code", "createdAt", "createdBy", "id", "updatedAt", "usedAt") SELECT "code", "createdAt", "createdBy", "id", "updatedAt", "usedAt" FROM "PromoCode";
DROP TABLE "PromoCode";
ALTER TABLE "new_PromoCode" RENAME TO "PromoCode";
CREATE UNIQUE INDEX "PromoCode_createdBy_key" ON "PromoCode"("createdBy");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
