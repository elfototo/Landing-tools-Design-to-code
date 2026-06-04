import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import BenefitsSection from "./sections/BenefitsSection";
import ProblemSection from "./sections/ProblemSection";
import SolutionSection from "./sections/SolutionSection";
import FeaturesSection from "./sections/FeaturesSection";
import StepsWorksSection from "./sections/StepsWorksSection";
import ComparisonSection from "./sections/ComparisonSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <main className="flex flex-col gap-30 mx-3">
      <div className="pt-10">
        <Navbar />
      </div>
      {/* Hero */}
      <HeroSection />
      {/* Benefits */}
      <BenefitsSection />
      {/* PROBLEM */}
      <ProblemSection />
      {/* SOLUTION */}
      <SolutionSection />
      {/* FEATURES */}
      <FeaturesSection />
      {/* HOW IT WORKS */}
      <StepsWorksSection />
      {/* COMPARISON */}
      <ComparisonSection />
      {/* SUPPORTED TECHNOLOGIES */}
      <TechnologiesSection />
      {/* FAQ */}
      <FAQSection />
      {/* FINAL CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
