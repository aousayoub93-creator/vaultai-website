import Hero from "./components/Hero";
import WhyVaultAI from "./components/WhyVaultAI";
import PrivacyNews from "./components/PrivacyNews";
import Comparison from "./components/Comparison";
import SystemOverview from "./components/SystemOverview";
import Capabilities from "./components/Capabilities";
import Security from "./components/Security";
import Deployment from "./components/Deployment";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Hero />
      <WhyVaultAI />
      <PrivacyNews />
      <Comparison />
      <SystemOverview />
      <Capabilities />
      <Security />
      <Deployment />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
