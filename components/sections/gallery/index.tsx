import SectionContainer from "@/components/section-container";
import SectionTitle from "@/components/section-title";
import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <SectionContainer
      id="gallery"
      className="space-y-12 relative overflow-hidden text-black bg-foreground"
    >
      <SectionTitle className="text-center">Veja o nosso trabalho</SectionTitle>

      <div className="md:grid md:grid-cols-3 flex flex-col gap-3 justify-center items-center">
            <div
              className="relative w-full object-cover aspect-square"
            >
              <Image src={`/haircuts/1.jpg`} fill alt="Hairtcut" className="shadow-2xl" />
            </div>
            <div
              className="relative w-full object-cover aspect-square"
            >
              <Image src={`/haircuts/2.jpg`} fill alt="Hairtcut" className="shadow-2xl" />
            </div>
            <div
              className="relative w-full object-cover aspect-square"
            >
              <Image src={`/haircuts/3.jpg`} fill alt="Hairtcut" className="shadow-2xl" />
            </div>
      </div>
    </SectionContainer>
  );
}
