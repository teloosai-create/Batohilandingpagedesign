import { Hero } from "./components/Hero";
import { WhatIsBatohi } from "./components/WhatIsBatohi";
import { KeyFeatures } from "./components/KeyFeatures";
import { WhyBatohi } from "./components/WhyBatohi";
import { Vision } from "./components/Vision";
import { Conclusion } from "./components/Conclusion";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImageCarousel } from "./components/ImageCarousel";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <WhatIsBatohi />
      <ImageCarousel />
      <KeyFeatures />
      <WhyBatohi />
      <Vision />
      <Conclusion />
      <Footer />
      <ScrollToTop />
    </div>
  );
}