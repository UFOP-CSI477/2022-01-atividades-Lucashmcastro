/*
  Warnings:

  - You are about to drop the column `Data` on the `distribuicoes` table. All the data in the column will be lost.
  - Added the required column `data` to the `distribuicoes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_distribuicoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "produto_id" TEXT NOT NULL,
    "unidade_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "distribuicoes_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "distribuicoes_unidade_id_fkey" FOREIGN KEY ("unidade_id") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_distribuicoes" ("created_at", "id", "produto_id", "unidade_id") SELECT "created_at", "id", "produto_id", "unidade_id" FROM "distribuicoes";
DROP TABLE "distribuicoes";
ALTER TABLE "new_distribuicoes" RENAME TO "distribuicoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
