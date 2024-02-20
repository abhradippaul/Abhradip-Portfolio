import html from "../assets/html.png";
import SkillCard from "./SkillCard";

function SkillSection() {
  const skillList = [
    {
      name: "Html5",
      image: html,
    },
  ];
  return (
    <div className="bg-slate-100 min-h-dvh flex items-center justify-around flex-col">
      <h1 className="text-4xl text-gray-700">
        My <span className="text-blue-700">Skills</span> Section
      </h1>
      <div className="w-[90%] border border-red-400 flex items-center justify-center flex-wrap">
        <SkillCard {...skillList[0]} />
        <SkillCard {...skillList[0]} />
        <SkillCard {...skillList[0]} />
        <SkillCard {...skillList[0]} />
        <SkillCard {...skillList[0]} />
      </div>
    </div>
  );
}

export default SkillSection;
