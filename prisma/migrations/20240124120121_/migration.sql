-- AlterTable
ALTER TABLE "Playlists" ALTER COLUMN "contents" DROP NOT NULL,
ALTER COLUMN "contents" SET DEFAULT '[]';

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "library" DROP NOT NULL,
ALTER COLUMN "library" SET DEFAULT '[]';
