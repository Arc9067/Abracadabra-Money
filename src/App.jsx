import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";

const App = () => {
  return (
    <div className="min-h-screen selection:bg-black slection:text-purple-200 w-full bg-blaclb text-white font-sans relative">
      <Header />
      <Hero />
      <About />
      <Token />
    </div>
  );
};

export default App;
