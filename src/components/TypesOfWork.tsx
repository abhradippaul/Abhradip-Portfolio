import Card from "./Card";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";
import { experiences } from "@/WebsiteInfo";

function TypesOfWork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-slate-100 dark:bg-slate-900"
    >
      <div className="wrapper max-w-7xl m-auto min-h-dvh bg-slate-100 p-4 flex items-center justify-around flex-col dark:bg-slate-900">
        <h1 className="text-4xl text-gray-700 m-8 dark:text-gray-300">
          My <span className="dark:text-white text-blue-700">experiences</span>{" "}
          are
        </h1>
        <div className="flex items-center justify-around flex-wrap">
          {experiences.map((e) => (
            <Card {...e} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default TypesOfWork;
