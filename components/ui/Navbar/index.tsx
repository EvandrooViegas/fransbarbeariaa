"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import links from "./links";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <header>
      <nav className="w-full absolute text-white top-0 inset-x-0  ">
        <div className="flex items-center justify-between  px-6 ">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Image src="/icon.png" width={100} height={100} alt="Icon" />
            </Link>
            <ul className="md:flex items-center gap-6 hidden">
              {links.map((link) => (
                <a href={link.href} key={link.href} className="cursor-pointer hover:opacity-60 z-10">
                  {link.name}
                </a>
              ))}
            </ul>
          </div>
          <RxHamburgerMenu
            onClick={() => setShow(!show)}
            className="inline md:hidden text-4xl cursor-pointer rotate-0 transition-all hover:rotate-90 z-10"
          />
          {show && (
            <div className="fixed inset-0 bg-black z-[5] flex flex-col justify-center items-center gap-6">
              <ul className="flex flex-col items-center gap-6 text-4xl font-semibold">
                {links.map((link) => (
                  <a
                    href={link.href}
                    onClick={() => setShow(false)}
                    key={link.href}
                    className="hover:opacity-100 opacity-30 transition-opacity"
                  >
                    {link.name}
                  </a>
                ))}
              </ul>
            </div>
          )}
          <a className="hidden md:inline md:z-10" href="https://fransbarbearia.ageenda.com.br/" target="_blank">
          <Button >Agendar Agora</Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
