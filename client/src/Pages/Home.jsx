import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Classes from "../components/section/Classes";
import Schedule from "../components/section/Schedule";
import Pricing from "../components/section/Pricing";
import Gallery from "../components/section/Gallery";
import Testimonials from "../components/section/Testimonial";
import Contact from "../components/section/Contact";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-roboto bg-white text-[#2a9451]">
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
