import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaGlobe,
  FaRedditAlien,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
import { CONTACT_INFO, SOCIAL_MEDIA } from "../../constant/data";
import ContactForm from "../contact/ContactForm";
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-linear-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold bg-linear-to-r from-[#1d794c] to-[#2a9451] text-transparent bg-clip-text drop-shadow-lg">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-[#2a9451] mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            We’d love to hear from you! Reach out or register below to start
            your dance journey with us.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section - Contact Info */}
          <div
            className="space-y-6 text-gray-700 text-base flex flex-col justify-center bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-lg"
            data-aos="fade-right"
          >
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-[#1d794c] text-xl mr-3 mt-1" />
              <span className="leading-relaxed">{CONTACT_INFO.location}</span>
            </div>
            <div className="flex items-start">
              <FaPhoneAlt className="text-[#1d794c] text-xl mr-3 mt-1" />
              <span className="leading-relaxed">{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-[#1d794c] text-xl mr-3 mt-1" />
              <span className="leading-relaxed">{CONTACT_INFO.email}</span>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#1d794c] mb-3 tracking-tight">
                🪭 Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(SOCIAL_MEDIA).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1d794c] hover:bg-[#166c41] text-white p-3 rounded-full text-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

// Helper to map platform name to icon
function getSocialIcon(platform) {
  const icons = {
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedinIn />,
    youtube: <FaYoutube />,
    whatsapp: <FaWhatsapp />,
    website: <FaGlobe />,
    tiktok: <FaTiktok />,
    pinterest: <FaPinterestP />,
    reddit: <FaRedditAlien />,
  };
  return icons[platform] || <FaGlobe />;
}

export default Contact;
