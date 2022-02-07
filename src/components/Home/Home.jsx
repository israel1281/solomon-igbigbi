import React from "react"
import "./home.css"
import Typical from "react-typical"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
}

const Home = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div 
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h1>I'm Solomon</h1>
        <Typical
            loop={Infinity}
            wrapper="p"
           steps={["A Full-stack software engineer", 1200, "Graphic designer", 1200]}
        />
        <Link 
          className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
      </motion.div>

      <motion.div 
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0]}}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src="https://i.ibb.co/bvBbhQj/solomon-github-removebg-preview.png" alt="Developer" />
      </motion.div>
    </section>
  )
}

export default Home
