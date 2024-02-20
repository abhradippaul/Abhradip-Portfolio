import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TypesOfWork from "./components/TypesOfWork";
import PortfolioSection from "./components/PortfolioSection";
import SkillSection from "./components/SkillSection";
// import {ThemeContextProvider} from "./context/ThemeContext.js"

function App() {
  // const [theme,setTheme] = useState<theme | true>()
  // setTheme(theme)
  useEffect(()=> {
    document.querySelector("html")?.classList.add("dark")
  },[])
  return (
    // <ThemeContextProvider value={{theme,setTheme}}>
      <div className=" bg-slate-200 dark:bg-slate-800">
        <div className="bg-slate-100 fixed left-0 right-0 top-0 z-50 shadow-sm dark:shadow-white dark:bg-slate-950">
        <Navbar />
        </div>
        <HeroSection/>
        <TypesOfWork />
        <PortfolioSection />
        <SkillSection />
      </div>
    // </ThemeContextProvider> 
  );
}

export default App;
