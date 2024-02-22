import SkillCard from "./SkillCard";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import aws from "../assets/aws.png";
import docker from "../assets/docker.png";
import nginx from "../assets/nginx.png";
import git from "../assets/git.png";

function SkillSection() {
  const skillList = [
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
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <div className="h-full bg-slate-100 w-[90%] max-w-7xl m-auto min-h-dvh  dark:bg-slate-900 flex items-center justify-around flex-col">
        <h1 className=" text-4xl text-gray-700 dark:text-gray-300">
          My <span className="text-blue-700 dark:text-white">Skills</span>{" "}
          Section
        </h1>
        <div className="w-[90%] flex items-center justify-center flex-wrap">
          {/* <SkillCard {...skillList[0]} />
          <SkillCard {...skillList[0]} />
          <SkillCard {...skillList[0]} />
          <SkillCard {...skillList[0]} />
          <SkillCard {...skillList[0]} /> */}
          {
            skillList.map((e) => <SkillCard {...e} />)
          }
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
