const seedDatabase = require("../seed/seed");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

beforeEach(async () => {
  await seedDatabase();
});

afterAll(async () => {
  await prisma.$disconnect();
  console.log("End of tests");
});

describe("GET /api/users", () => {
  test("returns array of user objects with correct keys", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    expect(response.status).toBe(200);

    const { users } = await response.json();
    users.forEach((user) => {
      expect(user).toEqual({
        image_url: expect.any(String),
        user_id: expect.any(Number),
        username: expect.any(String),
        library: expect.arrayContaining([]),
      });
    });
  });
});

describe("GET /api/users/:id", () => {
  test("returns a user object with correct keys", async () => {
    const response = await fetch("http://localhost:3000/api/users/1");
    expect(response.status).toBe(200);

    const { user } = await response.json();
    expect(user).toEqual({
      image_url: expect.any(String),
      user_id: expect.any(Number),
      username: expect.any(String),
      library: expect.arrayContaining([]),
    });
  });
  test("returns 404 if user not found", async () => {
    const response = await fetch("http://localhost:3000/api/users/1000");
    expect(response.status).toBe(404);

    const err = await response.json();
    expect(err).toBe("User not found");
  });
  test("returns 400 if invalid datatype", async () => {
    const response = await fetch("http://localhost:3000/api/users/thousand");
    expect(response.status).toBe(400);

    const err = await response.json();
    expect(err).toBe("Incorrect user data type");
  });
});

describe("PATCH /api/users/:id/library", () => {
  test("returns added content object with correct keys when given suitable object", async () => {
    const contentToPost = {
      wrapperType: "track",
      kind: "song",
      artistId: 41742672,
      collectionId: 263301268,
      trackId: 263301273,
      artistName: "This Bike Is a Pipe Bomb",
      collectionName: "Three Way Tie for a Fifth",
      trackName: "Jack Johnson",
      collectionCensoredName: "Three Way Tie for a Fifth",
      trackCensoredName: "Jack Johnson",
      artistViewUrl:
        "https://music.apple.com/us/artist/this-bike-is-a-pipe-bomb/41742672?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson/263301268?i=263301273&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/jack-johnson/263301268?i=263301273&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fd/bb/38/fdbb38d2-073d-4bc7-68c4-348a0be6d560/mzaf_4150435585996894188.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: "2004-06-15T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 1,
      trackTimeMillis: 117573,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Alternative",
      isStreamable: true,
    };

    const response = await fetch("http://localhost:3000/api/users/1/library", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contentToPost),
    });

    expect(response.status).toBe(200);
    const { newContent } = await response.json();
    const parsedContent = JSON.parse(newContent);
    expect(parsedContent).toEqual(contentToPost);
  });

  test("returns 404 with correct error message if user is not found", async () => {
    const contentToPost = {
      wrapperType: "track",
      kind: "song",
      artistId: 41742672,
      collectionId: 263301268,
      trackId: 263301273,
      artistName: "This Bike Is a Pipe Bomb",
      collectionName: "Three Way Tie for a Fifth",
      trackName: "Jack Johnson",
      collectionCensoredName: "Three Way Tie for a Fifth",
      trackCensoredName: "Jack Johnson",
      artistViewUrl:
        "https://music.apple.com/us/artist/this-bike-is-a-pipe-bomb/41742672?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson/263301268?i=263301273&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/jack-johnson/263301268?i=263301273&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fd/bb/38/fdbb38d2-073d-4bc7-68c4-348a0be6d560/mzaf_4150435585996894188.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: "2004-06-15T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 1,
      trackTimeMillis: 117573,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Alternative",
      isStreamable: true,
    };

    const response = await fetch(
      "http://localhost:3000/api/users/10000/library",
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contentToPost),
      }
    );

    expect(response.status).toBe(404);
    const err = await response.json();
    expect(err).toBe("User not found");
  });
});
