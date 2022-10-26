/*
  Warnings:

  - You are about to drop the column `data` on the `cotacoes` table. All the data in the column will be lost.
  - Added the required column `date` to the `cotacoes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cotacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "bolsa_id" INTEGER NOT NULL,
    "empresa_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "cotacoes_bolsa_id_fkey" FOREIGN KEY ("bolsa_id") REFERENCES "bolsas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cotacoes_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "empresas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cotacoes" ("bolsa_id", "created_at", "empresa_id", "id", "valor") SELECT "bolsa_id", "created_at", "empresa_id", "id", "valor" FROM "cotacoes";
DROP TABLE "cotacoes";
ALTER TABLE "new_cotacoes" RENAME TO "cotacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
