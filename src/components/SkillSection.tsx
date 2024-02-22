import SkillCard from "./SkillCard";
import { skillList } from "@/WebsiteInfo";

function SkillSection() {
  
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
