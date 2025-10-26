import React from "react";
import Images from "../../assets/images";

const Header = () => (
  <header className="bg-white text-[#1d794c] text-center py-5">
    <img
      src={Images.Logo}
      alt="Aarambh Fit & Flow Logo"
      className="h-24 mx-auto"
    />
    <h1 className="text-3xl font-poppins">Aarambh Fit & Flow</h1>
    <p className="text-lg">Where Movement Begins – Dance | Yoga | Zumba</p>
  </header>
);

export default Header;
