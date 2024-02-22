import myimage2 from "/myimage2.jpg"
import { motion } from "framer-motion";

function HeroSection() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="dark:bg-slate-950 z-0 bg-slate-200 mt-[8dvh]">
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="min-h-dvh mx-auto max-w-7xl p-4 flex items-center justify-around flex-wrap filter-none"
      >
        <motion.img
          variants={item}
          src={myimage2}
          loading="lazy"
          className="h-80 w-80 sm:h-96 sm:w-96 object-cover rounded-full overflow-hidden m-4"
          alt="Image"
        />
        <motion.div
          variants={item}
          className="w-[80%] h-96 max-w-96 flex flex-col justify-around rounded-md p-6 m-4"
        >
          <div>
            <h1 className="text-xl text-gray-700 font-semibold dark:text-gray-300 sm:text-2xl">Hello, I'm</h1>
            <h1 className="text-xl font-semibold sm:text-2xl">Abhradip Paul</h1>
          </div>
          <h1 className="text-gray-700 text-3xl font-bold dark:text-gray-300 sm:text-4xl">
            Full Stack Web Developer
          </h1>
          <div className="flex items-center flex-wrap justify-between h-[25%] py-4 border-red-400">
            <button className="h-full font-semibold w-[80%] max-w-40 bg-blue-800 hover:bg-blue-900 text-slate-200 rounded-md text-xl my-2 cursor-pointer dark:hover:bg-blue-700">
              Contact Me
            </button>
            <button className="h-full font-semibold w-[80%] bg-white hover:bg-slate-100 my-2  rounded-md text-xl px-2 cursor-pointer max-w-40 dark:bg-slate-900 dark:hover:bg-slate-800">
              Send Feedback
            </button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default HeroSection;
