"use client";
import Image from "next/image";
export default function SampleCategory() {
  return (
    <>
      <div>
        <Image
          src="/images/sampleCategory.png"
          alt="Sample Category"
          width={80}
          height={20}
        />
        <h1 className=" max-w-[75px] text-center ">Sample category</h1>
      </div>
    </>
  );
}
