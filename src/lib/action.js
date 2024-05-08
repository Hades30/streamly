import makeAxiosCall from "./api";

export const searchMovie = async ({ data }) =>
  makeAxiosCall({
    method: "GET",
    url: "3/search/multi",
    data,
  });
