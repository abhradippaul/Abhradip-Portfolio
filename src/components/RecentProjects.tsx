"use client";

import dynamic from "next/dynamic";
const HeroParallax = dynamic(() => import("./ui/HeroParallax"));

function RecentProjects() {
  return (
    <div className="py-20">
      <h1>
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <HeroParallax />
    </div>
  );
}

export default RecentProjects;
