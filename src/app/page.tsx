import HeroSection from "./Components/HeroSection";
import MovingLines from "./Components/MovingBgLine/MovingLines";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className=" relative overflow-hidden">
      <MovingLines/>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
