/*
  Warnings:

  - The primary key for the `estados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `estados` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `estado_id` on the `cidades` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_estados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_estados" ("created_at", "id", "nome", "sigla") SELECT "created_at", "id", "nome", "sigla" FROM "estados";
DROP TABLE "estados";
ALTER TABLE "new_estados" RENAME TO "estados";
CREATE TABLE "new_cidades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "cidades_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cidades" ("created_at", "estado_id", "id", "nome") SELECT "created_at", "estado_id", "id", "nome" FROM "cidades";
DROP TABLE "cidades";
ALTER TABLE "new_cidades" RENAME TO "cidades";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
