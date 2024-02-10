"use client";

import { useRef } from "react";
import { useIsVisible } from "../lib/observer";

export default function ServicesList() {
  const ref = useRef(null);
  const sectionIsVisible = useIsVisible(ref);
  return (
    <section className="grid grid-cols-3 gap-8 h-[80vh] justify-around align-top p-8 overflow-hidden">
      <article
        ref={ref}
        className={`col-span-1 flex flex-col w-full bg-foreground h-full rounded-lg p-4 transition-all duration-1000 ${sectionIsVisible ? "translate-y-0 opacity-100" : "translate-y-[50%] opacity-0"}`}
      >
        <h3 className={`text-center font-semibold text-slate-800 p-4`}>
          Service 1
        </h3>
      </article>
      <article
        className={`col-span-1 flex flex-col w-full bg-foreground h-full rounded-lg p-4 transition-all duration-1000 delay-200 ${sectionIsVisible ? "translate-y-0 opacity-100" : "translate-y-[50%] opacity-0"}`}
      >
        <h3 className="text-center font-semibold text-slate-800 p-4">
          Service 2
        </h3>
      </article>
      <article
        className={`col-span-1 flex flex-col w-full bg-foreground h-full rounded-lg p-4 transition-all duration-1000 delay-300 ${sectionIsVisible ? "translate-y-0 opacity-100" : "translate-y-[50%] opacity-0"}`}
      >
        <h3 className="text-center font-semibold text-slate-800 p-4">
          Service 3
        </h3>
      </article>
    </section>
  );
}
