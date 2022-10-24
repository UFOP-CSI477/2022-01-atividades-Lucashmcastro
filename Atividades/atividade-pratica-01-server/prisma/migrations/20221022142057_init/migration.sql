/*
  Warnings:

  - The primary key for the `tiposSanguineos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `tiposSanguineos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `doacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `doacoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `local_id` on the `doacoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `pessoa_id` on the `doacoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `pessoas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cidade_id` on the `pessoas` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `pessoas` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `tipoSanguineo_id` on the `pessoas` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `doacao_id` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `locaisColeta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cidade_id` on the `locaisColeta` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `locaisColeta` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `unidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cidade_id` on the `unidades` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `unidades` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `distribuicoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `distribuicoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `produto_id` on the `distribuicoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `unidade_id` on the `distribuicoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `cidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cidades` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tiposSanguineos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "fator" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_tiposSanguineos" ("created_at", "fator", "id", "tipo") SELECT "created_at", "fator", "id", "tipo" FROM "tiposSanguineos";
DROP TABLE "tiposSanguineos";
ALTER TABLE "new_tiposSanguineos" RENAME TO "tiposSanguineos";
CREATE TABLE "new_doacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa_id" INTEGER NOT NULL,
    "local_id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "doacoes_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "doacoes_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locaisColeta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_doacoes" ("created_at", "data", "id", "local_id", "pessoa_id") SELECT "created_at", "data", "id", "local_id", "pessoa_id" FROM "doacoes";
DROP TABLE "doacoes";
ALTER TABLE "new_doacoes" RENAME TO "doacoes";
CREATE TABLE "new_pessoas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "tipoSanguineo_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "pessoas_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pessoas_tipoSanguineo_id_fkey" FOREIGN KEY ("tipoSanguineo_id") REFERENCES "tiposSanguineos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pessoas" ("cidade_id", "complemento", "created_at", "documento", "id", "nome", "numero", "rua", "tipoSanguineo_id") SELECT "cidade_id", "complemento", "created_at", "documento", "id", "nome", "numero", "rua", "tipoSanguineo_id" FROM "pessoas";
DROP TABLE "pessoas";
ALTER TABLE "new_pessoas" RENAME TO "pessoas";
CREATE TABLE "new_produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "etiqueta" TEXT NOT NULL,
    "validade" DATETIME NOT NULL,
    "doacao_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "produtos_doacao_id_fkey" FOREIGN KEY ("doacao_id") REFERENCES "doacoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_produtos" ("created_at", "doacao_id", "etiqueta", "id", "validade") SELECT "created_at", "doacao_id", "etiqueta", "id", "validade" FROM "produtos";
DROP TABLE "produtos";
ALTER TABLE "new_produtos" RENAME TO "produtos";
CREATE TABLE "new_locaisColeta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "locaisColeta_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_locaisColeta" ("cidade_id", "complemento", "created_at", "id", "nome", "numero", "rua") SELECT "cidade_id", "complemento", "created_at", "id", "nome", "numero", "rua" FROM "locaisColeta";
DROP TABLE "locaisColeta";
ALTER TABLE "new_locaisColeta" RENAME TO "locaisColeta";
CREATE TABLE "new_unidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "unidades_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_unidades" ("cidade_id", "complemento", "created_at", "id", "nome", "numero") SELECT "cidade_id", "complemento", "created_at", "id", "nome", "numero" FROM "unidades";
DROP TABLE "unidades";
ALTER TABLE "new_unidades" RENAME TO "unidades";
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("created_at", "email", "id", "nome", "password") SELECT "created_at", "email", "id", "nome", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_distribuicoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "unidade_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "distribuicoes_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "distribuicoes_unidade_id_fkey" FOREIGN KEY ("unidade_id") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_distribuicoes" ("created_at", "data", "id", "produto_id", "unidade_id") SELECT "created_at", "data", "id", "produto_id", "unidade_id" FROM "distribuicoes";
DROP TABLE "distribuicoes";
ALTER TABLE "new_distribuicoes" RENAME TO "distribuicoes";
CREATE TABLE "new_cidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
