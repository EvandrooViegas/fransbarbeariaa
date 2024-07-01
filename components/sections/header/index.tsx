import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {IoIosArrowDown} from "react-icons/io" 
export default function Header() {
  return (
    <div className="h-screen w-full relative md:pt-0 pt-20">
      <video autoPlay={true} loop={true} className="absolute inset-0 w-full h-full object-cover  z-[-1]">
        <source src="/bg.mp4" type="video/mp4" />
        <div className=" to-black" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-[-1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50 z-[-1]" />
      <div className="relative z-[2]  w-full h-full flex flex-col justify-center items-center">
        <div className="text-center md:space-y-4 space-y-12 text-white md:p-0 p-12">
            <SectionTitle className="text-6xl text-left md:text-center" background={false}>A SUA BARBEARIA FAVORITA</SectionTitle>
            <p className="text-3xl md:text-md text-neutral-300 text-left md:text-center ">Tradição e modernidade se encontram aqui na nossa barbearia!</p>
           <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-4">
           <a target="_blank" href="https://fransbarbearia.ageenda.com.br/" className="w-full md:w-fit ">
           <Button  size="lg" className="w-full md:w-fit">Fazer Marcação</Button>
           </a>

           <a href="#prices" className="w-full md:w-fit ">
           <Button variant="outline" size="lg" className="w-full md:w-fit ">Ver Preços</Button>
           </a>
           </div>
        </div>
      </div>
      <IoIosArrowDown className="hidden md:inline absolute left-1/2 bottom-5 text-white -translate-x-1/2 text-3xl animate-bounce" />
    </div>
  );
}
