import { lazy, Suspense } from "react";
import { Header } from "./components/Header";

const Hero = lazy(() => import("./components/Hero").then(module => ({ default: module.Hero })));
const WhatIsBatohi = lazy(() => import("./components/WhatIsBatohi").then(module => ({ default: module.WhatIsBatohi })));
const KeyFeatures = lazy(() => import("./components/KeyFeatures").then(module => ({ default: module.KeyFeatures })));
const WhyBatohi = lazy(() => import("./components/WhyBatohi").then(module => ({ default: module.WhyBatohi })));
const Vision = lazy(() => import("./components/Vision").then(module => ({ default: module.Vision })));
const Conclusion = lazy(() => import("./components/Conclusion").then(module => ({ default: module.Conclusion })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Suspense fallback={<div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>}>
        <Hero />
        <WhatIsBatohi />
        <KeyFeatures />
        <WhyBatohi />
        <Vision />
        <Conclusion />
        <Footer />
      </Suspense>
    </div>
  );
}