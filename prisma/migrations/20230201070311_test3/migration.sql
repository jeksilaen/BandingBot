/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_age_name_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age";
