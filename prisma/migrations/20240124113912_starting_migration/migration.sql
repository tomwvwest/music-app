-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "image_url" TEXT DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    "library" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Playlists" (
    "playlist_id" SERIAL NOT NULL,
    "playlist_name" TEXT NOT NULL,
    "creator_id" INTEGER NOT NULL,
    "contents" TEXT NOT NULL,

    CONSTRAINT "Playlists_pkey" PRIMARY KEY ("playlist_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Playlists" ADD CONSTRAINT "Playlists_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
