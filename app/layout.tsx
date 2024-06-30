import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Metadata } from "next";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Frans's Barbearia",
  description: "Frans's Barbearia",
icons: {
  icon: "/icon.jpg"
}
}
 
export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={cn(fontHeading.variable, fontBody.variable)}>
      <link rel="icon" href="/icon.jpg" sizes="any" />
        <main>
          <Navbar />
          {children}
          <footer className="text-black border-t border-black/10 flex flex-col text-center text-xs font-semibold gap-1.5 py-4">
<span>2024</span>
<span>Todos os direitos reservados</span>
<span>
  <span>Feito por </span>
  <a href="https://www.instagram.com/evandroviegas.dev/" className="underline">Evandro Viegas®</a>
</span>
          </footer>
        </main>
      </body>
    </html>
  );
}
