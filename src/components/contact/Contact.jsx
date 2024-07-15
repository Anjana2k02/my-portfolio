import "./contact.scss"
import {motion} from "framer-motion"

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
        <motion.h1>Contact <br/>Me</motion.h1>
        <motion.div  variants={variants}>
            <h2>Mail</h2>
            <span>anjanawickramasinghe7@gmail.com</span>
        </motion.div>
        <motion.div  variants={variants}>
            <h2>Addres</h2>
            <span>Malabe, Colombo, Sri Lanka</span>
        </motion.div>
        <motion.div  variants={variants}>
            <h2>Mobile</h2>
            <span>+94 71 2412 634</span>
        </motion.div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder="Text" />
                <input type="email" required placeholder="Email" />
                <textarea rows={8} placeholder="Message"/>
                <button>Send</button>
            </form>
        </div>
    </motion.div>
  );
};

export default Contact