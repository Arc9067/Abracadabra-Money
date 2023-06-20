import React from "react";
import logo from "../assets/logo.png";
import Pattern from "../assets/pattern.png";
import Banner1 from "../assets/banner1.png";

const Hero = () => {
  return (
    <section className="py-[120px] relative md:py-[150px]" id="hero">
      <img
        src={Pattern}
        alt=""
        className="w-[5rem] top-10 right-0 animate-bounce object-cover absolute"
        loading="lazy"
      />
      <div className="container grid gap-10 justify-between items-center lg:grid-cols-2">
        <article className="flex flex-col gap-6">
          {/* <h1 className="text-8xl md:text-8xl hero-header font-MangoMed font-bold uppercase">
            <span className="text-purple-300 ">Abracadabra</span> Money
          </h1> */}
          <img src={Banner1} alt="" className="banner1" loading="lazy"/>
          <p className="text-xl hero-para">
            American dollar is loosing its value. Crypto Era is becoming
            mainstream and there’s very chance that world adopts Ethereum as the
            global leading
          </p>
          <div className="flex gap-5 flex-wrap items-center">
            <a
              href=""
              className="px-7 py-3 hero-btn1 bg-purple-300 font-Akira border-4 border-white text-black hover:text-purple-300 hover:bg-transparent"
            >
              buy now
            </a>
            <a
              href=""
              className="px-7 py-3 hero-btn2 bg-purple-300 font-Akira text-purple-300  hover:text-black ring-2 ring-purple-400 hover:bg-purple-400 bg-transparent"
            >
              join telegram
            </a>
          </div>
        </article>
        <img src={logo} alt="" className="hero-logo" loading="lazy " />
      </div>
    </section>
  );
};

export default Hero;
