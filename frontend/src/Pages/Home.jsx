import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/custom/Hero";
import About from "../components/custom/About";
import Classes from "../components/custom/Classes";
import Schedule from "../components/custom/Schedule";
import Pricing from "../components/custom/Pricing";
import Gallery from "../components/custom/Gallery";
import Testimonials from "../components/custom/Testimonial";
import Contact from "../components/custom/Contact";

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
        {/* <Schedule /> */}
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
