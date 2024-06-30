import SectionContainer from "@/components/section-container";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import SectionTitle from "@/components/section-title";
import Image from "next/image";
export default function Prices() {
  return (
    <SectionContainer id="prices" className="text-white bg-zinc-950 space-y-6">
      <SectionTitle className="m-auto">OS NOSSOS PREÇOS</SectionTitle>
<div className="flex md:flex-row flex-col iems-center md:justify-center gap-12">
    <Image  alt="Corte de cabelo" src="/haircut.jpg" width={500} height={500}  className="object-cover aspect-square"/>
    <div className="flex flex-col gap-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-white/10 p-6  transition-all hover:scale-105">
          <h3 className="text-xl font-bold">Corte de Cabelo</h3>
          <p className="text-4xl font-bold">R$1</p>
          <p className="text-muted-foreground">
            Escolha qualquer tipo de corte de cabelo que quiser!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-white/10 p-6  transition-all hover:scale-105">
          <h3 className="text-xl font-bold">Tratamento de Barba</h3>
          <p className="text-4xl font-bold">R$1</p>
          <p className="text-muted-foreground">
            Tratamos com cuidado a sua barba!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-white/10 p-6  transition-all hover:scale-105">
          <h3 className="text-xl font-bold">Cabelo + Barba</h3>
          <p className="text-4xl font-bold">R$1</p>
          <p className="text-muted-foreground">
            Tratamos do seu cabelo e da sua barba!
          </p>
        </div>
      </div>
</div>
    </SectionContainer>
  );
}
