"use client";

import Image from "next/image";
import astronautHelmet from "@/public/astronaut-helmet.jpg";
import earth from "@/public/earth.jpg";
import { useRef } from "react";
import { useIsVisible } from "../lib/observer";
export default function Hero() {
  const ref = useRef(null);
  const refIsVisible = useIsVisible(ref);

  return (
    <section
      style={{
        backgroundImage: `url(${earth.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      ref={ref}
      className={`bg-blend-overlay bg-slate-950/70 grid grid-cols-1 sm:grid-cols-2 justify-between h-[100vh] w-full`}
    >
      <article
        className={`p-10 col-span-1 max-w-[100%] grid grid-cols-1 gap-4 align-middle my-auto justify-center`}
      >
        <h1
          className={`text-6xl font-bold my-auto transition-transform duration-700 ${
            refIsVisible ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          Going Digital Is Not An Option Anymore
        </h1>
        <h1
          className={`text-4xl font-semibold transition-transform duration-700 delay-300 ${
            refIsVisible ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          {" "}
          We Will Accompany You Throughout The Journey
        </h1>
        <button
          className={`inline-flex items-center justify-center font-medium h-10 w-32 bg-secondary rounded-sm transition-transform duration-1000 delay-500 ${
            refIsVisible ? "translate-x-0" : "translate-x-[-200%]"
          }`}
        >
          Learn More
        </button>
      </article>
    </section>
  );
}
