import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import reactImage from "../assets/react.png";
import mongo from "../assets/mongo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bs.png";
import cpp from "../assets/cpp.png";
import express from "../assets/express.png";
import sql from "../assets/sql.png";

import python from "../assets/python.png"
import node from "../assets/node.jpg"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: express,
      title: "Express JS",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: cpp,
      title: "C++",
      style: "shadow-blue-300",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
      style: "shadow-purple-400",
    },
    {
      id: 9,
      src: mongo,
      title: "MongoDB",
      style: "shadow-blue-400",
    },
  ];
  return (
    <section id="skills" className="pt-10 pb-24 md:justify-between md:items-center md:h-full py-20">
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <h1 className="font-playfair font-semibold text-6xl text-start text-navy-blue pt-10">
            Tech <span className="text-white">Stack</span>
          </h1>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
      </motion.div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
export default Skills;