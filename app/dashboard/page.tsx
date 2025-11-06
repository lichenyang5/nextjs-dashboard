import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Image
        src="/hero-desktop.png"
        alt="Hero Image"
        width={1000}
        height={750}
        className="hidden md:block"
      />
      <Image
        src="/hero-mobile.png"
        alt="Hero Image"
        width={560}
        height={620}
        className="block md:hidden"
      />
    </div>
  );
}
