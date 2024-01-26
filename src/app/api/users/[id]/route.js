const { prisma } = require("../../../../../lib/prisma");
const { NextResponse } = require("next/server");

async function GET(req, {params}) {
  const id = Number(params.id)

  if(isNaN(id)){
    return NextResponse.json('Incorrect user data type', {status: 400}) 
  }

  const user = await prisma.users.findUnique({
    where: {
      user_id: id
    },
  });

  if(!user){
    return NextResponse.json('User not found', {status: 404}) 
  }

  return NextResponse.json({ user, status: 200 });

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
