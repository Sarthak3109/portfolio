import Linegradient from "./Linegradient";
import { motion } from "framer-motion";
import food from "../assets/food.png"
import WeatherApp from "../assets/weather.png";
import imdb from "../assets/imdb.jpg"
import sudoku from "../assets/sudoku.png"
import ecommerce from  "../assets/e-commerce.jpg"
import project from "../assets/project.jpg"
const Projects = () => {
  const projects = [
    {
      id:1,
      src: ecommerce ,
      title: "Shop Karo",
      demo: "https://proud-plum-ladybug.cyclic.app/",

    },
    {
       id: 4,
       src: food,
       title: "Fast Eat",
       demo: "https://soft-buttercream-236618.netlify.app/",
     },
    
    {
      id: 2,
      src: project ,
      title: "Project Vault", 
      demo: "https://project-vault-umber.vercel.app/",

    },
    {
      id: 3,
      src: WeatherApp,
      title: "Weather App",
      demo: "https://weather-app-snowy-chi-93.vercel.app/",
    },
    {
      id: 5,
      src: imdb,
      title: "IMDB CLONE",
      demo: "https://movies-for-all.onrender.com/",
    },
    {
      id: 6,
      src: sudoku ,
      title: "Sudoku Solver",
      demo: "https://sarthak3109.github.io/Sudoku-Solver/",

    },
  ];
  return (
    <section id="projects" className="pt-20 pb-20">

      <motion.div
        className="md:w-2/5 mx-auto text-center pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-navy-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <Linegradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            style = {{cursor : "pointer"}}
            onClick={()=>{window.location.href = project.demo}}
          >
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="flex items-center justify-center text-2xl pt-5 font-playfair font-semibold">{project.title}</p>
            </div>
          </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Projects;