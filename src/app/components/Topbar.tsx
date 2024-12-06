import Image from "next/image";

export function Topbar() {
  return (
    <div>
      <Image
        src="/images/iphoneSeries.png"
        alt="iphoneSeries"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
