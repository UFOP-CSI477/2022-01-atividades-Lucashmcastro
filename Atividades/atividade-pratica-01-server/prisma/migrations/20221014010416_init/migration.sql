/*
  Warnings:

  - The primary key for the `tiposSanguineos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `estados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `locaisColeta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pessoas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `doacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tiposSanguineos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "fator" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_tiposSanguineos" ("created_at", "fator", "id", "tipo") SELECT "created_at", "fator", "id", "tipo" FROM "tiposSanguineos";
DROP TABLE "tiposSanguineos";
ALTER TABLE "new_tiposSanguineos" RENAME TO "tiposSanguineos";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("created_at", "email", "id", "nome", "password") SELECT "created_at", "email", "id", "nome", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_estados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_estados" ("created_at", "id", "nome", "sigla") SELECT "created_at", "id", "nome", "sigla" FROM "estados";
DROP TABLE "estados";
ALTER TABLE "new_estados" RENAME TO "estados";
CREATE TABLE "new_locaisColeta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cidade_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "locaisColeta_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_locaisColeta" ("cidade_id", "complemento", "created_at", "id", "nome", "numero", "rua") SELECT "cidade_id", "complemento", "created_at", "id", "nome", "numero", "rua" FROM "locaisColeta";
DROP TABLE "locaisColeta";
ALTER TABLE "new_locaisColeta" RENAME TO "locaisColeta";
CREATE TABLE "new_cidades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "estado_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "cidades_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cidades" ("created_at", "estado_id", "id", "nome") SELECT "created_at", "estado_id", "id", "nome" FROM "cidades";
DROP TABLE "cidades";
ALTER TABLE "new_cidades" RENAME TO "cidades";
CREATE TABLE "new_pessoas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "cidade_id" TEXT NOT NULL,
    "tipoSanguineo_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "pessoas_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pessoas_tipoSanguineo_id_fkey" FOREIGN KEY ("tipoSanguineo_id") REFERENCES "tiposSanguineos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pessoas" ("cidade_id", "complemento", "created_at", "documento", "id", "nome", "numero", "rua", "tipoSanguineo_id") SELECT "cidade_id", "complemento", "created_at", "documento", "id", "nome", "numero", "rua", "tipoSanguineo_id" FROM "pessoas";
DROP TABLE "pessoas";
ALTER TABLE "new_pessoas" RENAME TO "pessoas";
CREATE TABLE "new_doacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pessoa_id" TEXT NOT NULL,
    "local_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "doacoes_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "doacoes_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locaisColeta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_doacoes" ("created_at", "id", "local_id", "pessoa_id") SELECT "created_at", "id", "local_id", "pessoa_id" FROM "doacoes";
DROP TABLE "doacoes";
ALTER TABLE "new_doacoes" RENAME TO "doacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
