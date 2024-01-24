const { prisma } = require("../../../../lib/prisma");
const { NextResponse } = require("next/server");

async function GET(){
  const users = await prisma.Users.findMany()
  return NextResponse.json({users, status:200})
} 

module.exports = {GET}