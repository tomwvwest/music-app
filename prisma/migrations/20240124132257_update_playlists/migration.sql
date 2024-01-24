/*
  Warnings:

  - The `contents` column on the `Playlists` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Playlists" DROP COLUMN "contents",
ADD COLUMN     "contents" TEXT[];
