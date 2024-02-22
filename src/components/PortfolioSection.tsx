import { useState } from "react"
import ProjectCard from "./ProjectCard"
import PortfolioCategoryBtn from "./PortfolioCategoryBtn"
import todolist from "../../public/todolist.png"
import randomPassword from "../../public/randompassword.png"
import fitness from "../../public/fitness.png"

function PortfolioSection() {
  const [category,setCategory] = useState("all")
  const myProject = [
    {
      name : "Fitness Website",
      category : "react js",
      description : "The website is built using React and Tailwind CSS, and is fully responsive. I have implemented API handling and local storage to display data to users.",
      image : fitness,
      githubLink: "https://github.com/abhradippaul/FitnessWebsite-React-API",
      websiteLink: "https://fitnesswebsite.abhradippaul.blog/"
    },
    {
      name : "Random Password Generator",
      category : "others",
      description : "User can now generate a password of desired length with the option to include characters and numbers.",
      image : randomPassword,
      githubLink: "https://github.com/abhradippaul/React-Password-Generator-React",
      websiteLink: "https://react-password-generator-react.vercel.app/"
    },
    {
      name : "TodoList Localstorage",
      category : "others",
      description : "User can add, modify, delete, and mark tasks as done.",
      image : todolist,
      githubLink: "https://react-todo-list-local-storage.vercel.app/",
      websiteLink: "https://github.com/abhradippaul/React-TodoList-LocalStorage"
    },

  ]
  const categoryProject = ["react js", "others", "all"]

  
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