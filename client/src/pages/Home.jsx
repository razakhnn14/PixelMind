import React from "react";
import AOS  from "aos";
import 'aos/dist/aos.css';
import CTA from "../components/CTA";
import Process from "../components/Process";
import Hero from "../components/Hero";
import { useEffect } from "react";
import Features from "../components/Features";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    // src/App.jsx
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Features />
      {/* Process Section */}
      <Process />
      {/* Call to Action */}
      <CTA />
    </div>
  );
}

export default Home;
