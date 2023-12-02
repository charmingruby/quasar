/*
  Warnings:

  - You are about to drop the `BarberAvailableTime` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CutCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `age_category` to the `Cut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Cut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeInAQuarterOfAnHourQuantity` to the `Cut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Cut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberAccountId` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerAccountId` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cutId` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promoCodeId` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Scheduling` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Scheduling` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BarberAvailableTime";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CutCategory";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Transaction";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cut" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "age_category" TEXT NOT NULL,
    "timeInAQuarterOfAnHourQuantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Cut" ("id") SELECT "id" FROM "Cut";
DROP TABLE "Cut";
ALTER TABLE "new_Cut" RENAME TO "Cut";
CREATE TABLE "new_CustomerAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "amountOfSchedules" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CustomerAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CustomerAccount" ("amountOfSchedules", "createdAt", "id", "updatedAt", "userId") SELECT coalesce("amountOfSchedules", 0) AS "amountOfSchedules", "createdAt", "id", "updatedAt", "userId" FROM "CustomerAccount";
DROP TABLE "CustomerAccount";
ALTER TABLE "new_CustomerAccount" RENAME TO "CustomerAccount";
CREATE UNIQUE INDEX "CustomerAccount_userId_key" ON "CustomerAccount"("userId");
CREATE TABLE "new_Scheduling" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "barberAccountId" TEXT NOT NULL,
    "customerAccountId" TEXT NOT NULL,
    "cutId" TEXT NOT NULL,
    "promoCodeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Scheduling_promoCodeId_fkey" FOREIGN KEY ("promoCodeId") REFERENCES "PromoCode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scheduling_cutId_fkey" FOREIGN KEY ("cutId") REFERENCES "Cut" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scheduling_customerAccountId_fkey" FOREIGN KEY ("customerAccountId") REFERENCES "CustomerAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scheduling_barberAccountId_fkey" FOREIGN KEY ("barberAccountId") REFERENCES "BarberAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Scheduling" ("id") SELECT "id" FROM "Scheduling";
DROP TABLE "Scheduling";
ALTER TABLE "new_Scheduling" RENAME TO "Scheduling";
CREATE UNIQUE INDEX "Scheduling_promoCodeId_key" ON "Scheduling"("promoCodeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
