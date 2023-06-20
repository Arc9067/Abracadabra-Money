import React, { useLayoutEffect, useRef } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const headerLogo = self.selector(".logo");
      const header_link = self.selector(".header-link");
      const heroHeader = new SplitType(".hero-header", { types: "chars" });
      const aboutHeader = new SplitType(".about-header", { types: "chars" });
      const heroPara = new SplitType(".hero-para", { types: "lines" });

      gsap.defaults({ ease: "none" });

      ScrollTrigger.create({
        trigger: "#hero",
        toggleActions: "play reverse restart reverse",
        animation: gsap
          .timeline()
          .from(headerLogo, {
            opacity: 0,
            ease: "none",
            xPercent: -100,
            duration: 2,
            scale: 0,
          })
          .from(
            self.selector(heroHeader.chars),
            {
              opacity: 0,
              stagger: 0.2,
              x: 20,
              y: 10,
            },
            1
          )
          .from(heroPara.lines, {
            opacity: 0,
            stagger: 0.5,
            y: 20,
            duration: 0.3,
          })
          .from(".hero-btn1", {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left",
          })
          .from(".hero-btn2", {
            opacity: 0,
            scaleX: 0,
            scaleY: 0,
            transformOrigin: "right",
          })
          .from(".hero-logo", {
            opacity: 0,
          }),
      });

      // ScrollTrigger.create({
      //   trigger: "#about",
      //   pin: true,
      //   scrub: 1,
      //   pinSpacing: false,
      //   animation: gsap
      //     .timeline()
      //     .from(headerLogo, {
      //       opacity: 0,
      //       ease: "none",
      //       xPercent: -100,
      //       duration: 2,
      //       scale: 0,
      //     })
      //     .from(
      //       self.selector(aboutHeader.chars),
      //       {
      //         opacity: 0,
      //         stagger: 0.2,
      //         x: 20,
      //         y: 10,
      //       },
      //       1
      //     )
      //     .from(heroPara.lines, {
      //       opacity: 0,
      //       stagger: 0.5,
      //       y: 20,
      //       duration: 0.3,
      //     })
      //     .from(".hero-btn1", {
      //       opacity: 0,
      //       scaleX: 0,
      //       transformOrigin: "left",
      //     })
      //     .from(".hero-btn2", {
      //       opacity: 0,
      //       scaleX: 0,
      //       scaleY: 0,
      //       transformOrigin: "right",
      //     })
      //     .from(".hero-logo", {
      //       opacity: 0,
      //     }),
      // });
      header_link.forEach((ele) => {
        gsap.from(ele, {
          opacity: 0,
          stagger: 0.5,
          duration: 1,
        });
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div
      className="min-h-screen selection:bg-black slection:text-purple-200 w-full bg-blaclb text-white font-sans relative"
      ref={main}
    >
      <Header />
      <Hero />
      <About />
      <Token />
    </div>
  );
};

export default App;
