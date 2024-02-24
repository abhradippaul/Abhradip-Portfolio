import SkillCard from "./SkillCard";
import { skillList } from "@/WebsiteInfo";
import { motion } from "framer-motion";
function SkillSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-100 dark:bg-slate-900"
    >
      <div className="h-full bg-slate-100 w-[90%] max-w-7xl m-auto min-h-dvh  dark:bg-slate-900 flex items-center justify-around flex-col">
        <h1 className=" text-4xl text-gray-700 dark:text-gray-300">
          My <span className="text-blue-700 dark:text-white">Skills</span>{" "}
          Section
        </h1>
        <div className="w-[90%] flex items-center justify-center flex-wrap">
          {skillList.map((e) => (
            <SkillCard {...e} key={e.name} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SkillSection;
