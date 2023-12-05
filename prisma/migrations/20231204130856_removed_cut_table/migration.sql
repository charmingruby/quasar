/*
  Warnings:

  - You are about to drop the `Cut` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `cutId` on the `Scheduling` table. All the data in the column will be lost.
  - Added the required column `age_category` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeInAQuarterOfAnHourQuantity` to the `Scheduling` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cut";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scheduling" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "endAt" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "age_category" TEXT NOT NULL,
    "timeInAQuarterOfAnHourQuantity" INTEGER NOT NULL,
    "barberAccountId" TEXT NOT NULL,
    "customerAccountId" TEXT NOT NULL,
    "promoCodeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Scheduling_promoCodeId_fkey" FOREIGN KEY ("promoCodeId") REFERENCES "PromoCode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scheduling_customerAccountId_fkey" FOREIGN KEY ("customerAccountId") REFERENCES "CustomerAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scheduling_barberAccountId_fkey" FOREIGN KEY ("barberAccountId") REFERENCES "BarberAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Scheduling" ("barberAccountId", "createdAt", "customerAccountId", "date", "endAt", "id", "promoCodeId", "status", "time", "updatedAt") SELECT "barberAccountId", "createdAt", "customerAccountId", "date", "endAt", "id", "promoCodeId", "status", "time", "updatedAt" FROM "Scheduling";
DROP TABLE "Scheduling";
ALTER TABLE "new_Scheduling" RENAME TO "Scheduling";
CREATE UNIQUE INDEX "Scheduling_promoCodeId_key" ON "Scheduling"("promoCodeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
