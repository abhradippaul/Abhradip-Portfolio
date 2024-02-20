import Card from "./Card";
import reactImg from "../../public/frontend.jpg";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function TypesOfWork() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="wrapper min-h-dvh bg-slate-100 p-4 flex items-center justify-around flex-col dark:bg-slate-900" >
      <h1 className="text-4xl text-gray-700 m-8 dark:text-gray-300">
        I have an <span className="dark:text-white">experince</span> on
      </h1>
      <div
        className="flex items-center justify-around flex-wrap">
        <Card image={reactImg} />
        <Card image={reactImg} />
        <Card image={reactImg} />
        <Card image={reactImg} />
      </div>
    </div>
  );
}

export default TypesOfWork;
