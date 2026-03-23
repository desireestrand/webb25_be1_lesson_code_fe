const artists = [
  {
    _id: "a1",
    name: "Queen",
    slug: "queen",
    createdAt: "2025-01-10T10:00:00.000Z",
    updatedAt: "2025-01-10T10:00:00.000Z",
  },
  {
    _id: "a2",
    name: "Pink Floyd",
    slug: "pink-floyd",
    createdAt: "2025-01-11T10:00:00.000Z",
    updatedAt: "2025-01-11T10:00:00.000Z",
  },
  {
    _id: "a3",
    name: "Led Zeppelin",
    slug: "led-zeppelin",
    createdAt: "2025-01-12T10:00:00.000Z",
    updatedAt: "2025-01-12T10:00:00.000Z",
  },
];

const albums = [
  {
    _id: "al1",
    title: "A Night at the Opera",
    artist: artists[0],
    releaseDate: "1975-11-21T00:00:00.000Z",
    createdAt: "2025-01-10T10:00:00.000Z",
    updatedAt: "2025-01-10T10:00:00.000Z",
  },
  {
    _id: "al2",
    title: "The Dark Side of the Moon",
    artist: artists[1],
    releaseDate: "1973-03-01T00:00:00.000Z",
    createdAt: "2025-01-11T10:00:00.000Z",
    updatedAt: "2025-01-11T10:00:00.000Z",
  },
  {
    _id: "al3",
    title: "Led Zeppelin IV",
    artist: artists[2],
    releaseDate: "1971-11-08T00:00:00.000Z",
    createdAt: "2025-01-12T10:00:00.000Z",
    updatedAt: "2025-01-12T10:00:00.000Z",
  },
  {
    _id: "al4",
    title: "News of the World",
    artist: artists[0],
    releaseDate: "1977-10-28T00:00:00.000Z",
    createdAt: "2025-01-13T10:00:00.000Z",
    updatedAt: "2025-01-13T10:00:00.000Z",
  },
];

const songs = [
  {
    _id: "s1",
    title: "Bohemian Rhapsody",
    artist: artists[0],
    album: albums[0],
    length: 354,
    createdAt: "2025-02-01T10:00:00.000Z",
    updatedAt: "2025-02-01T10:00:00.000Z",
  },
  {
    _id: "s2",
    title: "We Will Rock You",
    artist: artists[0],
    album: albums[3],
    length: 122,
    createdAt: "2025-02-02T10:00:00.000Z",
    updatedAt: "2025-02-02T10:00:00.000Z",
  },
  {
    _id: "s3",
    title: "Comfortably Numb",
    artist: artists[1],
    album: albums[1],
    length: 382,
    createdAt: "2025-02-03T10:00:00.000Z",
    updatedAt: "2025-02-03T10:00:00.000Z",
  },
  {
    _id: "s4",
    title: "Money",
    artist: artists[1],
    album: albums[1],
    length: 382,
    createdAt: "2025-02-04T10:00:00.000Z",
    updatedAt: "2025-02-04T10:00:00.000Z",
  },
  {
    _id: "s5",
    title: "Stairway to Heaven",
    artist: artists[2],
    album: albums[2],
    length: 482,
    createdAt: "2025-02-05T10:00:00.000Z",
    updatedAt: "2025-02-05T10:00:00.000Z",
  },
  {
    _id: "s6",
    title: "Black Dog",
    artist: artists[2],
    album: albums[2],
    length: 295,
    createdAt: "2025-02-06T10:00:00.000Z",
    updatedAt: "2025-02-06T10:00:00.000Z",
  },
];

const playlists = [
  {
    _id: "p1",
    name: "Classic Rock Hits",
    description: "The best classic rock songs of all time",
    songs: [songs[0], songs[2], songs[4]],
    length: 354 + 382 + 482,
    createdAt: "2025-03-01T10:00:00.000Z",
    updatedAt: "2025-03-01T10:00:00.000Z",
  },
  {
    _id: "p2",
    name: "Queen Essentials",
    description: "Must-hear Queen tracks",
    songs: [songs[0], songs[1]],
    length: 354 + 122,
    createdAt: "2025-03-02T10:00:00.000Z",
    updatedAt: "2025-03-02T10:00:00.000Z",
  },
];

export { artists, albums, songs, playlists };
