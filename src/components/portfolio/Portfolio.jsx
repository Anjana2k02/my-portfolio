import React, { useRef } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "DeBonsai",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "We developed a full-stack website for DeBonsai, enabling customers to check the availability of plants online. The project utilized Mongoose, Express, React, and Node.js to create a seamless and efficient user experience."},
  {
    id: 2,
    title: "Food Order ",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Next.js, React tabanlı açık kaynaklı bir JavaScript framework'üdür ve özellikle web uygulamaları oluşturmak için tasarlanmıştır. Next.js, React uygulamalarını geliştirmek için bir dizi özellik ve iyileştirmeler ekler."
  },
  {
    id: 3,
    title: "Sha+ LMS ",
    img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "SLIIT Year 2 Semester 2 Project: MERN Stack Implementation. For our Year 2 Semester 2 project at SLIIT, our group completed a comprehensive website development project using the MERN stack. The website is designed to facilitate access for students, teachers, and staff at SHA+ Institute in Batuwatta, Gampaha."
  },
  {
    id: 4,
    title: "Php",
    img: "https://images.pexels.com/photos/3862367/pexels-photo-3862367.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "PHP (Hypertext Preprocessor), genellikle sunucu taraflı web geliştirmek için kullanılan popüler bir programlama dilidir. İlk olarak 1994 yılında Rasmus Lerdorf tarafından geliştirilen PHP, özellikle dinamik web siteleri oluşturmak için yaygın bir şekilde kullanılmaktadır."
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>

            
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
         
          <p>{item.desc}</p>

          <div className="bton">
         <button type="button" class="btn btn-outline-light">Visit</button>
         <button type="button" class="btn btn-outline-light">GitHub</button>
         </div>
         
          
        </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Öne Çıkan Bilgiler</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
