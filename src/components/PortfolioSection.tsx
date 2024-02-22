import { useState } from "react"
import ProjectCard from "./ProjectCard"
import PortfolioCategoryBtn from "./PortfolioCategoryBtn"
import {myProject} from "../WebsiteInfo.ts"
import { categoryProject } from "../WebsiteInfo.ts"

function PortfolioSection() {
  const [category,setCategory] = useState("all")
  return (
    <div className=" bg-slate-200">
      <div className='max-w-7xl m-auto min-h-dvh flex items-center flex-col justify-around  dark:bg-slate-950'>
        <h1 className='text-4xl text-gray-700 m-8 dark:text-gray-300 text-center'>My <span className='text-blue-700 dark:text-white'>Portfolio</span> Section</h1>
        <div className='flex items-center justify-around m-4'>
          {
            categoryProject.map((e) => <PortfolioCategoryBtn category={e} setCategory={setCategory} />)
          }
          
        </div>
        <div className="flex items-center justify-around flex-wrap">
          {
            myProject.map((e) => {
                if(e.category === category || category === "all") {
                  return <ProjectCard {...e} />
                }
            })
          }
        </div>
    </div>
    </div>
  )
}

export default PortfolioSection