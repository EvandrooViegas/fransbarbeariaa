import SectionContainer from "@/components/section-container";
import SectionTitle from "@/components/section-title";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import barbers from "./data";
import Image from "next/image";
import { FaStar } from "react-icons/fa"
export default function Cast() {
  return (
    <SectionContainer
      id="cast"
      className="bg-black text-white space-y-12 relative overflow-hidden md:py-6 py-20"
    >
      <SectionTitle>Nossos Profissionais</SectionTitle>
      <Carousel
        opts={{
          align: "start",
          loop: true,
    
        }}
        className="w-full "
      >
        <CarouselContent>
          {barbers.map((b) => (
            <CarouselItem key={b.name} className=" md:basis-1/3 lg:basis-1/3">
              <div className="p-1 text-center items-center justify-center flex flex-col gap-3">
                <img
                  src={b.photo_path}
            className="w-full aspect-square object-cover"
                  alt="Barber image"
                />
                <span className="text-3xl font-semibold">{b.name}</span>
                <div className="flex items-center gap-1.5 text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="mt-6 text-neutral-400">{b.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionContainer>
  );
}
