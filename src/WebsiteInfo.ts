import todolist from "/todolist.png"
import randomPassword from "/randompassword.png"
import fitness from "/fitness.png"
import html from "/html.png";
import css from "/css.png";
import javascript from "/javascript.png";
import react from "/react.png";
import typescript from "/typescript.png";
import aws from "/aws.png";
import docker from "/docker.png";
import nginx from "/nginx.png";
import git from "/git.png";
import reactImg from "/frontend.jpg";
import backend from "/backend.png";
import awsService from "/aws.png";
import addtional from "/additional.png";

export const myProject = [
    {
        name: "Fitness Website",
        category: "react js",
        description: "The website is built using React and Tailwind CSS, and is fully responsive. I have implemented API handling and local storage to display data to users.",
        image: fitness,
        githubLink: "https://github.com/abhradippaul/FitnessWebsite-React-API",
        websiteLink: "https://fitnesswebsite.abhradippaul.blog/"
    },
    {
        name: "Random Password Generator",
        category: "others",
        description: "User can now generate a password of desired length with the option to include characters and numbers.",
        image: randomPassword,
        githubLink: "https://github.com/abhradippaul/React-Password-Generator-React",
        websiteLink: "https://react-password-generator-react.vercel.app/"
    },
    {
        name: "TodoList Localstorage",
        category: "others",
        description: "User can add, modify, delete, and mark tasks as done.",
        image: todolist,
        githubLink: "https://react-todo-list-local-storage.vercel.app/",
        websiteLink: "https://github.com/abhradippaul/React-TodoList-LocalStorage"
    },

]

export const categoryProject = ["react js", "others", "all"]

export const skillList = [
    {
      name: "Html",
      image: html,
    },
    {
      name: "CSS",
      image : css
    },
    {
      name : "Javascript",
      image : javascript
    },
    {
      name : "React JS",
      image : react
    },
    {
      name : "Typescript",
      image : typescript
    },
    {
      name : "AWS",
      image : aws
    },
    {
      name : "Docker",
      image : docker
    },
    {
      name : "Nginx",
      image : nginx
    },
    {
      name : "Git/GitHub",
      image: git
    }
  ];

export const experiences = [
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
      image: awsService,
      des: "I have utilized AWS services such as EC2 instances, S3 buckets, and Lambda functions for all of my projects.",
    },
    {
      name: "Additional",
      image: addtional,
      des: "I use Git and GitHub for version control. Additionally, I have experience with Docker, Nginx, and Linux.",
    },
  ];