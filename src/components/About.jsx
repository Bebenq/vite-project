import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-blue-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[2-x] font-bold text-center ">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Saya seorang developer web, web apapun. Mau itu web E-commerce dan lain-lain. Saya memilki keahlian di bidang pemrograman komputer dan sofware. Saya bisa membuat website dengan banyak frameworks contohnya, React, Node.js, dan
        Three.js. Saya juga banyak memahami bahasa pemrograman seperti, Tailwindcss, Html, js, Pemrograman MERN, css, dan sedikit memahami python. Juga saya adalah orang yang pekerja keras dan mau belajar serta suka dengan tantangan.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
