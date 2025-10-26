import React from "react";
import { GALLERY } from "../../constant/data";

const Gallery = () => (
  <section
    id="gallery"
    className="py-20 px-5 text-center bg-gray-50"
    data-aos="fade-up"
  >
    <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-[#1d794c] mb-6 tracking-tight">
      Our Studio Gallery
    </h2>
    <div className="w-20 h-1 bg-[#2a9451] mx-auto mb-12 rounded-full"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {GALLERY.map((img, index) => (
        <div
          key={index}
          className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
        >
          <img
            src={img.image}
            alt={img.alt}
            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay with optional text */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl flex items-center justify-center">
            <p className="text-white text-lg font-semibold">{img.alt}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
