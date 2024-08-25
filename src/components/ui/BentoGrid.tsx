"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradient";
import { GridGlobe } from "./GridGlobe";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { useRouter } from "next/navigation";

const url = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const navigate = useRouter();
  const handleClick = () => {
    navigator.clipboard.writeText("abhradippaulwork@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div
      className={cn(
        "sm:min-h-[200px] md:min-h-[100px] row-span-1 relative overflow-hidden rounded-3xl border group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {img && id !== 6 && (
        <Image
          src={img}
          alt={img}
          fill
          className={cn(
            "object-cover object-center opacity-50",
            id === 5 && "absolute",
            imgClassName
          )}
        />
      )}
      {spareImg && id === 4 && (
        <Image
          src={spareImg}
          alt={spareImg}
          fill
          className={cn(
            "object-cover object-center",
            id === 4 && "absolute top-10 -right-10 opacity-50",
            imgClassName
          )}
        />
      )}
      {id === 2 && <GridGlobe />}
      {id === 3 && (
        <div className="flex gap-1 lg:gap-3 w-fit absolute right-4 top-1/2 translate-y-[-50%]">
          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="py-4 px-3 rounded-[10px] bg-[#10132e]" />
            {["Node JS", "MongoDB", "SQL"].map((item) => (
              <span
                key={item}
                className="p-2 lg:p-3 text-xs lg:text-base opacity-50 lg:opacity-50 rounded-[5px] lg:rounded-[10px] text-center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 lg:gap-4">
            {["React JS", "Next JS", "TypeScript"].map((item) => (
              <span
                key={item}
                className="p-2 lg:p-3 text-xs lg:text-base opacity-50 lg:opacity-50 rounded-[5px] lg:rounded-[10px] text-center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
            <span className="py-4 px-3 rounded-[10px] bg-[#10132e]" />
          </div>
        </div>
      )}
      {id === 6 && (
        <BackgroundGradientAnimation
          containerClassName="size-full absolute"
          className="relative z-50 flex items-center justify-center text-white-100 font-bold"
        >
          {/* <div className="absolute z-50 flex items-center justify-center text-white-100 font-bold bottom-0"> */}
          <MagicButton
            className="-bottom-[10%]"
            icon={copied ? <TiTick /> : <IoCopyOutline />}
            otherClassName="!bg-[161a31]"
            handleClick={handleClick}
          >
            {copied ? "Email copied" : "Copy my email"}
          </MagicButton>
          {/* </div> */}
        </BackgroundGradientAnimation>
      )}
      {id === 6 && (
        <div className="absolute">
          <Lottie
            options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
      )}
      <div
        className={cn(
          "group-hover/bento:translate-x-2 transition duration-200 px-8 py-4 z-10",
          id !== 2 &&
            id !== 4 &&
            id !== 6 &&
            "flex flex-col justify-center size-full",
          id === 3 && "w-[60%]",
          id === 6 && "size-full absolute -top-[10%]",
          id === 5 && "absolute top-[-5%]"
        )}
      >
        {id !== 5 && (
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
        )}
        {id !== 5 && (
          <div
            className={cn(
              "font-sans text-lg lg:text-3xl max-w-96 font-bold z-10",
              titleClassName
            )}
          >
            {title}
          </div>
        )}
        {id === 5 && (
          <MagicButton
            handleClick={() =>
              navigate.push(
                `${url}/f_auto,q_auto/v1/portfolio/fm0vbye6uhmwqxmax1yf`
              )
            }
          >
            {title as string}
          </MagicButton>
        )}
      </div>
    </div>
  );
};
