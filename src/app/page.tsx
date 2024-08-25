import Hero from "@/components/Hero";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const Clients = dynamic(() => import("@/components/Clients"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Grid = dynamic(() => import("@/components/Grid"));

export default function Home() {
  return (
    <header className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </header>
  );
}
