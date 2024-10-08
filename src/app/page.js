import React from "react";
import About from "@/app/components/About/About";
import Hero from "@/app/components/Hero/Hero";
import Reviews from "@/app/components/Reviews/Reviews";
import Slider from "@/app/components/Slider/Slider";
import Whatyouwant from "@/app/components/Whatyouwant/Whatyouwant";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Whatyouwant />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <Slider />
      </section>
    </div>
  );
}
