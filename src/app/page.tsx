import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-around align-center m-auto	">
      <div className="flex flex-col m-auto">
        <Image
          src="/streamly/stream.png"
          width={100}
          height={100}
          className="m-auto"
          alt=""
        />
        <span style={{ marginTop: "8px" }}>
          Watch movies and shows free on{" "}
          <span className="font-bold">Streamly!</span>
        </span>
      </div>
    </main>
  );
}
