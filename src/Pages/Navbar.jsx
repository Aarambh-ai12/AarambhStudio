import React from "react";
import { logo } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("#logo", {
      rotateY: 360,
    });
  });

  return (
    <div className="w bg-transparent flex items-center justify-between  p-2 text-white">
      <div>
        <img id="logo" src={logo} alt="" width={100} />
      </div>
      {/* <div className="gap-5 hidden md:flex ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Classes</a>
        <a href="">Instructor</a>
        <a href="">Contact</a>
      </div> */}
      <div>
        <a className="p-2 hover:bg-white hover:text-black rounded-md delay-75"
          href="#contact"
        >
         Register Here
        </a>
      </div>
    </div>
  );
};

export default Navbar;
