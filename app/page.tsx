import Image from "next/image";
import Hero from "./components/hero";
import ServicesList from "./components/servides-list";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-0 m-0 p-0 justify-center align-top overflow-hidden">
      <Hero />
      <ServicesList />
    </main>
  );
}
