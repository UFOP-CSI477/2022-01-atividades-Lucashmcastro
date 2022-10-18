/*
  Warnings:

  - Added the required column `data` to the `doacoes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_doacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pessoa_id" TEXT NOT NULL,
    "local_id" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "doacoes_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "doacoes_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locaisColeta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_doacoes" ("created_at", "id", "local_id", "pessoa_id") SELECT "created_at", "id", "local_id", "pessoa_id" FROM "doacoes";
DROP TABLE "doacoes";
ALTER TABLE "new_doacoes" RENAME TO "doacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
