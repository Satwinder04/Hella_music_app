import { NextResponse } from "next/server";

const songs = [
  {
    song_name: "For A Reason",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "4:00",
    audio_url: "/songs/ForAReason.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
   {
    "song_name": "My Heart Go",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/My Heart Go.mp3"
  },
  {
    "song_name": "AKAD (Bonus Track)",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/AKAD (Bonus Track).mp3"
  },
  {
    "song_name": "Changa Ae",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Changa Ae.mp3"
  },
  {
    "song_name": "Love Gone",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Love Gone.mp3"
  },
  {
    "song_name": "Marjana",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Marjana.mp3"
  },
  {
    "song_name": "Meharma",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Meharma.mp3"
  },
  {
    "song_name": "Taj Mahal",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Taj Mahal.mp3"
  },
  {
    "song_name": "Aphrodite",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Aphrodite.mp3"
  },
  {
    "song_name": "Bewafa",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Bewafa.mp3"
  },
  {
    "song_name": "He Is Mine",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/He Is Mine.mp3"
  },
  {
    "song_name": "Ki Kariye",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Ki Kariye.mp3"
  },
  {
    "song_name": "Mohabbat",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Mohabbat.mp3"
  },
  {
    "song_name": "Mulaqat",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Mulaqat.mp3"
  },
  {
    "song_name": "Portrait Of You",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Portrait Of You.mp3"
  },
  {
    "song_name": "Ik Tarfa",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Ik Tarfa.mp3"
  },
  {
    "song_name": "Love Garrage",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Love Garrage.mp3"
  },
  {
    "song_name": "Ranjha",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Ranjha.mp3"
  },
  {
    "song_name": "Tatoo",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://cover.mr-punjab.com/artwork/81980.webp",
    "song_length": "",
    "audio_url": "/songs/Tatoo.mp3"
  },
  {
    "song_name": "Din Te Gin",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://i.scdn.co/image/ab67616d0000b273cf16de5b31c99de14dd073ca",
    "song_length": "",
    "audio_url": "/songs/Din Te Gin.mp3"
  },
  {
    "song_name": "Kavita",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://i.scdn.co/image/ab67616d0000b273cf16de5b31c99de14dd073ca",
    "song_length": "",
    "audio_url": "/songs/Kavita.mp3"
  },
  {
    "song_name": "Khat Likhi",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://i.scdn.co/image/ab67616d0000b273cf16de5b31c99de14dd073ca",
    "song_length": "",
    "audio_url": "/songs/Khat Likhi.mp3"
  },
  {
    "song_name": "Tu Vida",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://i.scdn.co/image/ab67616d0000b273cf16de5b31c99de14dd073ca",
    "song_length": "",
    "audio_url": "/songs/Tu Vida.mp3"
  },
  {
    "song_name": "Hawa Banke",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://i.scdn.co/image/ab67616d0000b273cf16de5b31c99de14dd073ca",
    "song_length": "",
    "audio_url": "/songs/Hawa Banke.mp3"
  },
  {
    "song_name": "Karma Walia Akhan",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://i.scdn.co/image/ab67616d0000b273cf16de5b31c99de14dd073ca",
    "song_length": "",
    "audio_url": "/songs/Karma Walia Akhan.mp3"
  },
  {
    "song_name": "Pakka Ghar",
    "artist_name": "Arjan Dhillon",
    "thumbnail_img": "https://i.scdn.co/image/ab67616d0000b273cf16de5b31c99de14dd073ca",
    "song_length": "",
    "audio_url": "/songs/Pakka Ghar.mp3"
  }
];

export async function GET() {
  return NextResponse.json(songs);
}
