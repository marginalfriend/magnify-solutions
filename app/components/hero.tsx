"use client";

import Image from "next/image";
import astronautHelmet from "@/public/images/astronaut-helmet.jpg";
import { useRef } from "react";
import { useIsVisible } from "../lib/observer";
import Button from "@/global_compnents/button";

export default function Hero() {
  const ref = useRef(null);
  const refIsVisible = useIsVisible(ref);

  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 justify-between h-[100vh] w-full`}
    >
      <article
        className={`pl-10 col-span-1 grid grid-cols-1 gap-4 align-middle my-auto justify-center`}
      >
        <h1
          className={`text-6xl font-semi-bold my-auto transition-transform duration-700 ${
            refIsVisible ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          Going Digital Is Not An Option Anymore
        </h1>
        <h1
          className={`text-2xl transition-transform duration-700 delay-300 ${
            refIsVisible ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          {" "}
          We Will Accompany You Throughout The Journey
        </h1>
        <Button>Learn more</Button>
      </article>
      <article className="col-span-1 grid grid-cols-1 align-middle">
        <Image
          sizes="100vh"
          style={{ width: "100%", maxHeight: "100vh", objectFit: "cover" }}
          src={astronautHelmet}
          alt="Astronaut Helmet Image"
        />
      </article>
    </section>
  );
}
