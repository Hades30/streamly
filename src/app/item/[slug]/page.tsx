"use client";

import React, { useEffect, useState } from "react";
import Movie from "./movie";
import { Container } from "@mui/material";

import { useSearchParams } from "next/navigation";
import { findMovieById } from "@/lib/action";

export default function Page({ params }: { params: { slug: String } }) {
  const searchParams = useSearchParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    if (params.slug) {
      findMovieById({ id: params.slug }).then((res) => {
        if (res) {
          setItem(res);
        }
      });
    }
  }, [params.slug, searchParams, findMovieById]);

  if (!item.id) {
    return "loading";
  }

  return (
    <Container className="flex items-center justify-center">
      <div style={{ width: "80%", height: "60%" }} className="flex">
        <Movie movie={item} />
      </div>
    </Container>
  );
}
