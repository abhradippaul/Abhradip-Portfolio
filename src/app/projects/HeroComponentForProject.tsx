"use client";

import CategoryButton from "@/components/ui/CategoryButton";
import { PinContainer } from "@/components/ui/3dPin";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { projectCategory, projects } from "@/data/data";
import { useState } from "react";
import { useRouter } from "next/navigation";

const imageUrl = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

function HeroComponentForProject() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const navigate = useRouter();

  return (
    <div className="py-12">
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="relative mb-10">
        <TextGenerateEffect
          className="text-xl text-center md:text-2xl lg:text-3xl"
          words="Welcome to my project section"
        />
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap my-4">
        {projectCategory.map(
          (category) =>
            (projects.reverse().find((e) => category === e.category) ||
              category === "All") && (
              <CategoryButton
                title={category}
                className={
                  selectedCategory === category ? "bg-transparent" : ""
                }
                key={category}
                handleClick={() => setSelectedCategory(category)}
              />
            )
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 z-50 relative">
        {projects
          .filter(
            ({ category }) =>
              category === selectedCategory || selectedCategory === "All"
          )
          .reverse()
          .map(({ title, iconLists, id, image, link }) => (
            <div
              className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={id}
              onClick={() => navigate.push(`/projects/${link}`)}
            >
              <PinContainer title={title} href={link}>
                <div className="flex flex-col items-center justify-around sm:w-[570px] min-h-[400px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden size-full gap-y-2">
                  <img
                    src={`${imageUrl}/w_500/q_auto/f_auto/v1/portfolio/projects${image}`}
                    alt={title}
                    className="z-10 object-cover top-0 w-full overflow-hidden lg:rounded-[10px]"
                  />
                  <h1 className="font-bold lg:text-2xl md:text-xl text-balance line-clamp-1 self-start my-4">
                    {title}
                  </h1>
                  <div className="justify-between flex items-center self-start gap-x-1">
                    {iconLists.map((icon) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:size-10 flex justify-center items-center size-8"
                      >
                        <img
                          alt={icon}
                          src={`${imageUrl}/w_50/q_auto/f_auto/v1/portfolio/icons${icon}`}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HeroComponentForProject;
