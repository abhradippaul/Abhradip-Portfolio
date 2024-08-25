"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: string;
  icon?: ReactNode;
  className?: string;
  handleClick?: () => void;
  otherClassName?: string;
  position?: "left" | "right";
}
function MagicButton({
  children,
  icon,
  className,
  handleClick,
  otherClassName,
  position = "left",
}: Props) {
  return (
    <button
      className={cn(
        `relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-[10px] p-[1px] focus:outline-none`,
        className && className
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          `inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`,
          otherClassName
        )}
      >
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default MagicButton;
