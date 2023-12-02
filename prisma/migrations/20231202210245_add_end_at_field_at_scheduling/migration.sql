/*
  Warnings:

  - Added the required column `endAt` to the `Scheduling` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scheduling" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "endAt" TEXT NOT NULL,
    "status" TEXT NOT NULL,
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
INSERT INTO "new_Scheduling" ("barberAccountId", "createdAt", "customerAccountId", "cutId", "date", "id", "promoCodeId", "status", "time", "updatedAt") SELECT "barberAccountId", "createdAt", "customerAccountId", "cutId", "date", "id", "promoCodeId", "status", "time", "updatedAt" FROM "Scheduling";
DROP TABLE "Scheduling";
ALTER TABLE "new_Scheduling" RENAME TO "Scheduling";
CREATE UNIQUE INDEX "Scheduling_promoCodeId_key" ON "Scheduling"("promoCodeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
