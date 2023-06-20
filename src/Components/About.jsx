import React from "react";
import banner1 from "../assets/banner1.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-blaclb" id="about">
      <div className="container flex flex-col justify-center items-center text-center ">
        <article className="flex justify-center items-center flex-col text-center gap-8">
          <h1 className="text-8xl md:text-8xl font-MangoMed font-bold uppercase md:w-[700px] about-header">
            about Abracadabra <span className="text-purple-300 ">Money</span>
          </h1>

          <div className="relative w-full  flex flex-col gap-10">
            <p className="text-xl max-w-[900px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus adipisci maxime eligendi veritatis veniam
              perspiciatis ea cumque est aspernatur in fuga, itaque cupiditate
              autem dolore doloribus reiciendis minus ullam sed?
            </p>
            <p className="text-xl max-w-[900px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus adipisci maxime eligendi veritatis veniam
              perspiciatis ea cumque est aspernatur in fuga, itaque cupiditate
              autem dolore doloribus reiciendis minus ullam sed?
            </p>
            {/* <img src={banner1} alt="" className="" loading="lazy" /> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
