const seedDatabase = require("../seed/seed");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

beforeEach(async () => {
  await seedDatabase();
});

afterAll(async () => {
  await prisma.$disconnect();
  console.log('End of tests')
});

describe("/api/users", () => {
  test("returns array of user objects with correct keys", async () => {
    const response = await fetch('http://localhost:3000/api/users')
    expect(response.status).toBe(200)

    const {users} = await response.json()
    users.forEach((user => {
      expect(user).toEqual({
        image_url : expect.any(String),
        user_id: expect.any(Number),
        username: expect.any(String),
        library: expect.arrayContaining([])
      })
    }))
  })
});
