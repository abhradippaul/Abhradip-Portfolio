import Card from "./Card";
import reactImg from "../../public/frontend.jpg";
import backend from "../../public/backend.png";
import aws from "../../public/aws.png";
import addtional from "../../public/additional.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function TypesOfWork() {
  const experiences = [
    {
      name: "Frontend Developer",
      image: reactImg,
      des: "I have experience in HTML, CSS, JavaScript, ReactJS, TypeScript, Api handeling, and Tailwind.",
    },
    {
      name: "Backend Developer",
      image: backend,
      des: "I have experience creating REST APIs, including advanced APIs, using Node.js for the backend and MongoDB for the database.",
    },
    {
      name: "AWS Services",
      image: aws,
      des: "I have utilized AWS services such as EC2 instances, S3 buckets, and Lambda functions for all of my projects.",
    },
    {
      name: "Additional",
      image: addtional,
      des: "I use Git and GitHub for version control. Additionally, I have experience with Docker, Nginx, and Linux.",
    },
  ];
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
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
    </div>
  );
}

export default TypesOfWork;
