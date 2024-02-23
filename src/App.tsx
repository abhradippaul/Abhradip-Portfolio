import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Projects from "./Page/Projects";
import Aboutme from "./Page/Aboutme";

function App() {
  const [theme,setTheme] = useState(false)
  useEffect(() => {
    if(theme) {
      document.querySelector("html")?.classList.add("dark");
    } else{
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="">
      <div className="bg-slate-100 fixed left-0 right-0 top-0 z-50 shadow-sm dark:shadow-white dark:bg-slate-900">
        <Navbar setTheme={setTheme} theme={theme} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
