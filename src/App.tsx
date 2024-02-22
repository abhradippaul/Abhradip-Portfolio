import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Projects from "./Page/Projects";
import Aboutme from "./Page/Aboutme";
// import {ThemeContextProvider} from "./context/ThemeContext.js"

function App() {
  // const [theme,setTheme] = useState<theme | true>()
  // setTheme(theme)
  useEffect(() => {
    // document.querySelector("html")?.classList.add("dark");
  }, []);
  return (
    // <ThemeContextProvider value={{theme,setTheme}}>
    <div className="">
      <div className="bg-slate-100 fixed left-0 right-0 top-0 z-50 shadow-sm dark:shadow-white dark:bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
    // </ThemeContextProvider>
  );
}

export default App;
