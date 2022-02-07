import React from "react"
import { motion } from "framer-motion"
import { animateScroll as scroll } from "react-scroll"
import MenuIcon from "./Menu/MenuIcon/MenuIcon"
import "./nav.css"


const Nav = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={"nav-wrapper " + (menuOpen && "menuActive")}>
      <motion.div
        id="navbar"
        className={"nav-container"}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <span
          className={"logo " + (menuOpen && "menuActive")}
          onClick={() => scroll.scrollToTop()}
        >
           Igbigbi .
        </span>

        <MenuIcon handleClick={handleClick} menuOpen={menuOpen} />
      </motion.div>
    </div>
  );
};

export default Nav;
