const { PrismaClient } = require("@prisma/client");
const {users, playlists} = require('../data/index');

const prisma = new PrismaClient();

async function seedDatabase(){
  try{
    await prisma.$executeRaw`TRUNCATE TABLE "Users" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Playlists" RESTART IDENTITY CASCADE`;

    await prisma.users.createMany({data: users});
    await prisma.playlists.createMany({data: playlists})

    console.log('Data inserted')
  } catch(error){
    console.error('Error inserting data: ', error)
  } finally {
    await prisma.$disconnect();
  }

}

module.exports = seedDatabase