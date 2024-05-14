"use client";

import React from "react";

export default function Movie({ movie }) {
  const movieUrl = `https://multiembed.mov/directstream.php?video_id=${movie.id}&tmdb=1`;
  return (
    <iframe
      src={movieUrl}
      allowFullScreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      style={{ width: "100%", height: "60%" }}
    />
  );
}
