import { motion } from "framer-motion";
import resume from "/public/resume.pdf"
function MyInfo() {
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
      className="min-h-[50dvh] flex flex-col items-center justify-evenly max-w-7xl m-auto p-12 mt-[8dvh]"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.p variants={item}>
        Abhradip Paul, a 22-year-old professional with expertise in both
        frontend and backend development, as well as Amazon Web Services (AWS).
        With a strong foundation in React.js, TypeScript, Node.js, and MongoDB,
        Abhradip has successfully delivered various projects showcasing his
        proficiency in these technologies. He is well-versed in utilizing AWS
        services to optimize application performance and scalability. Proficient
        in version control using Git and GitHub, Abhradip ensures seamless
        collaboration and code management. Additionally, he possesses knowledge
        in Linux, Nginx, and Docker, further enhancing his ability to deploy and
        maintain robust web applications.
      </motion.p>
      <motion.button
        className="bg-blue-600 rounded-md text-white text-xl px-4 py-2 hover:bg-blue-700"
        variants={item}
      >
        <a href={resume} target="_blank">Download Resume</a>
      </motion.button>
    </motion.div>
  );
}

export default MyInfo;
