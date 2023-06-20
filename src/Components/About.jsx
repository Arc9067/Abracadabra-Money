import React from "react";
import banner2 from "../assets/banner2.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-blaclb" id="about">
      <div className="container flex flex-col justify-center items-center text-center ">
        <article className="flex justify-center items-center flex-col text-center gap-8">
          <h1 className="text-7xl md:text-8xl font-MangoMed font-bold uppercase md:w-[700px] about-header">
            "FROM <span className="text-purple-300 ">THIN</span> AIR."
          </h1>

          <div className="relative w-full  flex flex-col gap-10">
            <p className="text-xl max-w-[900px] about-para">
              $SPELL is a mysterious token created from thin air. The secret to
              this riddle is closing your eyes while saying "Abracadabra" three
              times in the mirror while holding a gold bar and 1 BTC to make our
              mystical $SPELL work.
            </p>

            <img src={banner2} alt="" className="" loading="lazy" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
