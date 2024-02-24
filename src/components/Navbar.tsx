import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ setTheme, theme }: any) {
  // const {setTheme} = useThemeContext()
  const [sidebar, setSidebar] = useState(false);
  const hamburgerMenu = () => {
    const data = document.querySelector("#sideMenu");
    if (data) {
      // console.log(data.classList.contains("hidden"));
      let check = data.classList.contains("hidden");
      if (check) {
        data.classList.remove("hidden");
        setSidebar(true);
      } else {
        data.classList.add("hidden");
        setSidebar(false);
      }
    }
  };
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full h-[8dvh] m-auto max-w-7xl p-4 flex items-center justify-between bg-slate-100 dark:bg-slate-900"
    >
      {/* apply whileinview animation */}
      <motion.div
        variants={item}
        className="text-xl font-semibold tracking-wide z-10"
      >
        <i
          onClick={hamburgerMenu}
          className={`text-2xl mr-4 fa-solid ${
            sidebar ? "fa-x" : "fa-bars"
          }  sm:hidden`}
        ></i>
        Abhradip
      </motion.div>
      <motion.div
        variants={item}
        id="sideMenu"
        className="backdrop-blur-sm bg-black bg-opacity-50  hidden fixed top-0 bottom-0 right-0 left-0 sm:block font-semibold text-xl text-gray-600 sm:static sm:w-1/2 sm:px-0 sm:bg-slate-100 dark:bg-slate-900 dark:text-gray-200 dark:bg-opacity-50"
      >
        <div className="h-full w-full flex items-center justify-center sm:justify-between">
          <ul className="h-1/2 w-full flex flex-col items-center justify-around sm:flex-row sm:justify-between">
            <motion.li
              className={`cursor-pointer ${
                sidebar ? "text-white" : ""
              } md:text-gray-700 tracking-wider dark:text-slate-300 hover:text-black dark:hover:text-white`}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                onClick={() => {
                  hamburgerMenu();
                }}
              >
                HOME
              </Link>
            </motion.li>
            <motion.li
              className={`cursor-pointer ${
                sidebar ? "text-white" : ""
              } md:text-gray-700 tracking-wider dark:text-slate-300 hover:text-black dark:hover:text-white`}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/projects"
                onClick={() => {
                  hamburgerMenu();
                }}
              >
                PROJECTS
              </Link>
            </motion.li>
            <motion.li
              className={`cursor-pointer ${
                sidebar ? "text-white" : ""
              } md:text-gray-700 tracking-wider dark:text-slate-300 hover:text-black dark:hover:text-white`}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/aboutme"
                onClick={() => {
                  hamburgerMenu();
                }}
              >
                ABOUT ME
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="w-[30%] flex items-center justify-between text-3xl sm:w-[15%]"
      >
        <i
          onClick={() => {
            setTheme((prev: boolean) => !prev);
          }}
          className={`fa-solid ${theme ? "fa-sun" : "fa-moon"} cursor-pointer`}
        ></i>
        <a href="https://github.com/abhradippaul" target="_blank">
          <i className="fa-brands fa-github cursor-pointer"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhradip-paul/" target="_blank">
          <i className="fa-brands fa-linkedin cursor-pointer"></i>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
