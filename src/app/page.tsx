import HeroSection from "./Components/HeroSection";
import MovingLines from "./Components/MovingBgLine/MovingLines";
import { Navbar } from "./Components/Navbar";


export default function Home() {
  return (
    <main >
      <MovingLines/>
      <HeroSection />
    </main>
  );
}