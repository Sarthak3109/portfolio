import { motion } from "framer-motion";
const About = () => {
    return (
        <section id="about" className="md:flex md:justify-between md:items-center md:h-full ">
            <div className="z-30 basis-3/5 mt-12 md:mt-32" style={{ margin : "auto"}}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1 className="text-6xl text-navy-blue font-playfair z-10 text-center">About Me</h1>

                    <p className="mt-10 mb-7 text-lg md:text-start text-justify tracking-tighter">
                        Hello! I'm <span className="text-blue-300">Sarthak</span>, a final year B.Tech student at NSUT and a self-taught full stack web developer with proficiency in MERN, which includes MongoDb, ExpressJS, ReactJS and NodeJS. I love the process of learning and experimenting with new technologies, and I am always eager to expand my skill set.
                        <br />
                        In addition to my developement skills, I have a strong interest in competetive programming . I am rated Specialist on Codeforces and Knight in Leetcode and solved over 800 problems over platforms like GFG, Codeforces, Interview Bit, LeetCode, etc
                        <br />
                        <br />
                       Currently I am working at <span className="font-bold underline"><a href= "https://mentorpal.ai/">Mentorpal.Ai</a> </span>as a front-end engineer.  Our mission is to empower individuals to achieve their personal and professional goals by providing them with the guidance, support, and expertise they need to succeed.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
export default About;