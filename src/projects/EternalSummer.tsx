import type { Project } from "../types/project";

import { SocialIcon } from "react-social-icons";

import { useState } from "react";

// const cover =
//   "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/2.jpg";

const songs = [
  {
    image:
      "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/3.jpg",
    title: "Hello Tomorrow",
    spotifyId: "4ncMaRKRMtZrdHNNHXsbxE",
  },
  {
    image:
      "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/4.jpg",
    title: "Careless Love",
    spotifyId: "0s8HehKlPriUnR1w9WKZUV",
  },
  {
    image:
      "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/5.jpg",
    title: "Lizard King",
    spotifyId: "5zEXMWNRlfzA5hkWID6Ac4",
  },
  {
    image:
      "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/6.jpg",
    title: "Solaire",
    spotifyId: "1qWtmdLkhvTXDX5Un1hjsB",
  },
  {
    image:
      "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/7.jpg",
    title: "Now and Then",
    spotifyId: "0wE759VjiIH8MxX6pHuoRy",
  },
  {
    image:
      "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/8.jpg",
    title: "Vin Rosé",
    spotifyId: "0Uya84Gk7YZS7OhdwSZjQB",
  },
];

export default function EternalSummer({ project }: { project: Project }) {
  const [selectedSong, setSelectedSong] = useState<string | null>(null);

  return (
    <>
      <div className="container pb-32">
        <h1 className="text-6xl font-bold mt-12 text-center">
          {project.title}
        </h1>

        <div className="max-w-10xl mx-auto">
          <img
            src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/eternal-summer/Free_Vinyl_Mockup_DRFG5.png"
            alt={project.title}
            className="w-full object-contain"
          />
        </div>
        <div className="flex items-center gap-3 max-w-4xl mx-auto mb-10">
          <p className="text-sm leading-relaxed ">
            A series of single covers and album cover for “THE ETERNAL SUMMER”
            album by SOURFACE.
          </p>

          <SocialIcon
            style={{ height: 35, width: 35 }}
            url="https://open.spotify.com/artist/52KnNbAieqBwivwgKsaP7W?si=s-NztJMmRXygU6jVFVKWxg"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
          {songs.map((song) => (
            <div
              key={song.spotifyId}
              onClick={() => setSelectedSong(song.spotifyId)}
              className="cursor-pointer hover:opacity-80 transition"
            >
              <img src={song.image} alt={song.title} className="w-full" />
              <p className="text-xs mt-1 text-center">{song.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedSong && (
        <div className="fixed bottom-4 right-4 z-50 w-80">
          <iframe
            key={selectedSong}
            src={`https://open.spotify.com/embed/track/${selectedSong}`}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="border-0 rounded-xl"
          />
        </div>
      )}
    </>
  );
}
