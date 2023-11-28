-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BarberAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BarberAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_BarberAccount" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "BarberAccount";
DROP TABLE "BarberAccount";
ALTER TABLE "new_BarberAccount" RENAME TO "BarberAccount";
CREATE UNIQUE INDEX "BarberAccount_userId_key" ON "BarberAccount"("userId");
CREATE TABLE "new_CustomerAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CustomerAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CustomerAccount" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "CustomerAccount";
DROP TABLE "CustomerAccount";
ALTER TABLE "new_CustomerAccount" RENAME TO "CustomerAccount";
CREATE UNIQUE INDEX "CustomerAccount_userId_key" ON "CustomerAccount"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
