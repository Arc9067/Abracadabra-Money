import React from "react";

const Token = () => {
  return (
    <section className="py-[50px] w-full tokenomics">
      <div className="container flex flex-col justify-center items-center text-center ">
        <article className="flex justify-center items-center flex-col text-center gap-8">
          <h1 className="text-8xl md:text-8xl font-MangoMed font-bold uppercase md:w-[700px]">
            <span className="text-purple-300 ">tokenomics</span>
          </h1>

          <div className="relative w-full   flex flex-col md:flex-row gap-10 justify-between items-center">
            <article className="h-40 w-40 flex flex-col gap-4 justify-center items-center text-center">
              <h1 className="font-Akira text-6xl">
                0<span className="text-purple-300">%</span>
              </h1>
              <p className="text-5xl">tax</p>
            </article>
            <article className="h-40 w-40 flex flex-col gap-4 justify-center items-center text-center">
              <h1 className="font-Akira text-4xl md:text-6xl">
                1,000,<span className="text-purple-300">000</span>
              </h1>
              <p className="text-5xl">supply</p>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Token;
