import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/sections/Hero";
import TrustedBy from "@/src/components/sections/TrustedBy";
import Features from "@/src/components/sections/Features";
import JobPreview from "@/src/components/sections/JobPreview";
import HowItWorks from "@/src/components/sections/HowItWorks";
import CtaBanner from "@/src/components/sections/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <JobPreview />
        <HowItWorks />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
