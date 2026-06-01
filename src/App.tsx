import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import BenefitsSection from "./sections/BenefitsSection";
import ProblemSection from "./sections/ProblemSection";
import SolutionSection from "./sections/SolutionSection";

import "./index.css";

function App() {
  return (
    <main className="flex flex-col gap-30">
      <div className="pt-10">
        <Navbar />
      </div>
      {/* Hero */}
      <HeroSection />
      {/* Benefits */}
      <BenefitsSection />
      {/* PROBLEM */}
      <ProblemSection/>
      {/* SOLUTION */}
      <SolutionSection/>
    </main>
  );
}

export default App;
