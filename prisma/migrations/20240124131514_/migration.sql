/*
  Warnings:

  - The `library` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "library",
ADD COLUMN     "library" TEXT[];
