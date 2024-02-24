import { useState } from "react";
import ProjectCard from "./ProjectCard";
import PortfolioCategoryBtn from "./PortfolioCategoryBtn";
import { myProject } from "../WebsiteInfo.ts";
import { categoryProject } from "../WebsiteInfo.ts";
import { motion } from "framer-motion";

function PortfolioSection() {
  const [category, setCategory] = useState("all");
  // const container = {
  //   hidden: { opacity: 1, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className=" bg-slate-200 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl m-auto min-h-dvh flex items-center flex-col justify-around  dark:bg-slate-950"
      >
        <motion.h1
          variants={item}
          className="text-4xl text-gray-700 m-8 dark:text-gray-300 text-center"
        >
          My <span className="text-blue-700 dark:text-white">Portfolio</span>{" "}
          Section
        </motion.h1>
        <motion.div
          variants={item}
          className="flex items-center justify-around m-4"
        >
          {categoryProject.map((e) => (
            <PortfolioCategoryBtn key={e} category={e} setCategory={setCategory} />
          ))}
        </motion.div>
        <motion.div
          variants={item}
          className="flex items-center justify-around flex-wrap"
        >
          {myProject.map((e) => {
            if (e.category === category || category === "all") {
              return <ProjectCard {...e} key={e.name} />;
            }
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PortfolioSection;
