"use client";

import React from "react";

export default function Movie({ movie }) {
  const movieUrl = `https://multiembed.mov/?video_id=${movie.id}&tmdb=1`;
  return <iframe src={movieUrl} allowfullscreen style={{ width: "100%" }} />;
}
