"use client";

import React, { useEffect, useState } from "react";
import Movie from "./movie";
import { Container, Typography } from "@mui/material";

import { useSearchParams } from "next/navigation";
import { findMovieById } from "@/lib/action";
import Loading from "./loading";

type Item = {
  id?: number;
  tagline?: String;
  release_date?: String;
  vote_average?: number;
  title?: String;
  overview?: String;
};

export default function Page({ params }: { params: { slug: String } }) {
  const searchParams = useSearchParams();
  const [item, setItem] = useState<Item>({});

  useEffect(() => {
    if (params.slug) {
      findMovieById({ id: params.slug }).then((res) => {
        if (res) {
          setItem(res);
        }
      });
    }
  }, [params.slug, searchParams, findMovieById]);
  console.log(item);

  if (!item.id) return <Loading />;

  return (
    <Container className="flex items-center justify-center flex-col">
      <div
        style={{ width: "80%", height: "100%" }}
        className="flex flex-col justify-center"
      >
        <Movie movie={item} />
        <div style={{ marginTop: "16px" }}>
          <div className="flex flex-start align-center">
            <Typography variant="h3">{item.title}&nbsp;</Typography>
            <Typography variant="h5" className="flex items-center">
              ({item.release_date && item.release_date.split("-")[0]})
            </Typography>
          </div>
          {item.tagline && (
            <div className="italic py-2 color-[#a1a1aa]">"{item.tagline}"</div>
          )}
          {item.overview}
          <div className="pt-4">Rating - {item.vote_average}</div>
        </div>
      </div>
    </Container>
  );
}
