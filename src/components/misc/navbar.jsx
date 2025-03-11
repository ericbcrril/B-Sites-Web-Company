import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true); // Oculta la navbar si el usuario baja
      } else {
        setHidden(false); // Muestra la navbar si el usuario sube
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.header
      className="navbar"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }} // Se mueve hacia arriba para ocultarse
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="navbar-content">
        <img src="images/logos/BSitesLogo00.webp" alt="Logo00" />
        <nav className="nav-links">
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Quiénes somos</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#pricing">Planes</a></li>
            {/*<li><a href="Portafolio">Portafolio</a></li>*/}
          </ul>
        </nav>
      </div>
    </motion.header>
    <button 
    onClick={() =>  window.open(`https://wa.me/+523841177360`)} 
    className="btn-contactanos"
    ><FaWhatsapp/></button>
    </>
  );
}

export default Navbar;
