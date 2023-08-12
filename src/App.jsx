import { useState,useEffect } from "react"
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Skills from "./components/Skills" 
import About from "./components/About";
import Projects from "./components/Projects";
import Linegradient from "./components/Linegradient";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [selectedPage,setSelectedPage]=useState('home');
  const [isTopOfPage,setIsTopOfPage]=useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="app max-w-full" >
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <div className={"w-5/6 mx-auto "}>
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        <div className={"w-5/6 mx-auto md:h-full"}>
          <About />
        </div>
        <Linegradient />
        <div className={"w-5/6 mx-auto"}>
          <Skills />
        </div>
        <Linegradient />
        <div className={"w-5/6 mx-auto"}>
          <Projects />
        </div>
        <Linegradient />
        <Contact />
        <Footer />
      </div>
  )
}
export default App