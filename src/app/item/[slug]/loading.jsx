import Image from "next/image";

export default function Loading({ height = 60, width = 60 }) {
  return (
    <div className="animate-spin mx-auto self-center" style={{ height, width }}>
      <Image src="/loading.png" width={width} height={height} />
    </div>
  );
}
