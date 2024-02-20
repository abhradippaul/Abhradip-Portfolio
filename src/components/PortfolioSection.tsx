import { useState } from "react"
import ProjectCard from "./ProjectCard"
import todolist from "../../public/todolist.png"
import PortfolioCategoryBtn from "./PortfolioCategoryBtn"

function PortfolioSection() {
  const [category,setCategory] = useState("all")
  const myProject = [
    {
      name : "Fitness Website",
      category : "react js",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ratione eaque placeat maiores laborum dignissimos recusandae perferendis natus ducimus quo atque dolorem alias quod hic assumenda consequatur enim debitis vel itaque veniam! Mollitia, sed beatae possimus vel facere reiciendis quis ex commodi adipisci incidunt iusto, quaerat sapiente. Voluptatibus eaque fuga ipsam neque modi libero ullam esse nostrum at. Tenetur obcaecati quisquam neque impedit consequuntur cum, harum minima nulla expedita rem nobis id, repellat doloremque reprehenderit distinctio autem. Similique deleniti quod aspernatur porro, odio quo assumenda officia delectus dolorum praesentium magni voluptatibus quidem at consectetur doloribus libero cumque expedita ratione repudiandae.",
      image : todolist,
      githubLink: "",
      websiteLink: ""
    },
    {
      name : "Blogging Website",
      category : "react js",
      description : "lorem100",
      image : "",
      githubLink: "",
      websiteLink: ""
    },
    {
      name : "Random Password Generator",
      category : "others",
      description : "lorem100",
      image : "",
      githubLink: "",
      websiteLink: ""
    },
    {
      name : "TodoList Localstorage",
      category : "others",
      description : "lorem100",
      image : "",
      githubLink: "",
      websiteLink: ""
    },

  ]

  
  return (
    <div className='min-h-dvh flex items-center flex-col justify-around dark:bg-slate-950'>
        <h1 className='text-4xl text-gray-700 m-8 dark:text-gray-300 text-center' >My <span className='text-blue-700'>Portfolio</span> Section</h1>
        <div className='flex items-center justify-around m-4'>
          {
            myProject.map((e) => <PortfolioCategoryBtn category={e.category} setCategory={setCategory} />)
          }
          
        </div>
        <div className="flex items-center justify-around flex-wrap">
          {
            // myProject.map((e) => {
            //     if(e.category === category) {
            //       return <div></div>
            //     }
            // })
          }
          <ProjectCard {...myProject[0]} />
          <ProjectCard {...myProject[0]} />
          <ProjectCard {...myProject[0]} />
          <ProjectCard {...myProject[0]} />
        </div>
    </div>
  )
}

export default PortfolioSection