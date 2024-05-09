import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-around align-center">
      <div className="flex flex-col m-auto">
        <Image src="/stream.png" width={100} height={100} className="m-auto" />
        <span style={{ marginTop: "8px" }}>
          Watch movies, shows free on Streamly!
        </span>
      </div>
    </main>
  );
}
