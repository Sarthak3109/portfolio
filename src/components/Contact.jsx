import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 py-20 "
      style = {{marginTop : "3rem"}}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <motion.div
        className="pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="pb-8 flex justify-center items-center flex-col ">
          <p className="font-playfair font-semibold text-6xl text-start inline text-navy-blue">
            Contact
          </p>
          <p className="py-6 text-lg">Feel free to reach out to me anytime! 👇</p>
        </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className=" flex justify-center items-center mb-5">
          <form
            action="https://getform.io/f/8b770122-6433-428e-981f-cace78f226df"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send a message
            </button>
          </form>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;