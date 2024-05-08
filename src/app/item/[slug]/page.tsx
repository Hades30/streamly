"use client";

export default function Page({ params }: { params: { slug: String } }) {
  console.log(params);
  return <div>{params.slug}</div>;
}
