import Schedules from "@/components/schedules";
import About from "@/components/sections/about";
import Cast from "@/components/sections/cast";
import Gallery from "@/components/sections/gallery";
import Header from "@/components/sections/header";
import Prices from "@/components/sections/prices";
import Reviews from "@/components/sections/reviews";
export default function Home() {
  return (
    <>
    <Header />
    <About />
    <Gallery />
    <Cast />
    <Reviews />
    <Prices />
    <Schedules />
    </>
  );
}
