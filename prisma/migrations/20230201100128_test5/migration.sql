/*
  Warnings:

  - Made the column `userPreferenceId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userPreferenceId" SET NOT NULL;
