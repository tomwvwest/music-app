const { prisma } = require("../../../../lib/prisma");
const { NextResponse } = require("next/server");

async function GET() {
  const users = await prisma.Users.findMany();
  return NextResponse.json({ users, status: 200 });

  // catch (err) {
  //   return NextResponse.error(
  //     {
  //       error: "Internal Server Error",
  //       message: "An error occured while fetching users",
  //     },
  //     { status: 500 }
  //   );
  // }
}

module.exports = { GET };
