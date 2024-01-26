const { prisma } = require("../../../../../../lib/prisma");
const { NextResponse } = require("next/server");

async function PATCH(req, { params }) {
  const id = Number(params.id);
  const body = await req.json();

  const user = await prisma.users.findUnique({
    where: {
      user_id: id,
    },
  });

  if(!user){
    return NextResponse.json('User not found', {status: 404}) 
  }

  const updatedUser = await prisma.users.update({
    where: { user_id: id },
    data: {
      library: [...user.library, JSON.stringify(body)],
    },
  });

  return NextResponse.json({
    newContent: updatedUser.library.shift(),
    status: 200,
  });
}

module.exports = { PATCH };
