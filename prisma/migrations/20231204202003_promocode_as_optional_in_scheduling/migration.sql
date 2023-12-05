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
    "observation" TEXT,
    "barberAccountId" TEXT NOT NULL,
    "customerAccountId" TEXT NOT NULL,
    "promoCodeId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Scheduling_promoCodeId_fkey" FOREIGN KEY ("promoCodeId") REFERENCES "PromoCode" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Scheduling_customerAccountId_fkey" FOREIGN KEY ("customerAccountId") REFERENCES "CustomerAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scheduling_barberAccountId_fkey" FOREIGN KEY ("barberAccountId") REFERENCES "BarberAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Scheduling" ("age_category", "barberAccountId", "createdAt", "customerAccountId", "date", "endAt", "id", "name", "observation", "price", "promoCodeId", "status", "time", "timeInAQuarterOfAnHourQuantity", "updatedAt") SELECT "age_category", "barberAccountId", "createdAt", "customerAccountId", "date", "endAt", "id", "name", "observation", "price", "promoCodeId", "status", "time", "timeInAQuarterOfAnHourQuantity", "updatedAt" FROM "Scheduling";
DROP TABLE "Scheduling";
ALTER TABLE "new_Scheduling" RENAME TO "Scheduling";
CREATE UNIQUE INDEX "Scheduling_promoCodeId_key" ON "Scheduling"("promoCodeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
