//Pie de pagina 

import { motion } from 'framer-motion';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';

function Footer(){
    return(
        <motion.footer initial={{ y: 150 }} whileInView={{ y: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
            <div className="footer-div0" >

                <section >
                    <h2>Información</h2>
                    <a href="#about" >Nosotros</a>
                    <a href="#services" >Servicio</a>
                    <a href="#pricing" >Costos</a>
                    <a href="#hero" >Inicio</a>
                </section>
                
                <section >
                    <h2>Contacto</h2>
                    <a href='https://wa.me/+523841177360'>+523841177360</a>
                    <a href='mailto:contacto@bsitescomp.com'>contacto@bsitescomp.com</a>
                </section>

                <section id="redes">
                    <h2>Visítenos</h2>
                    <div style={{display: 'flex'}}>
                        <a href='#facebook' onClick={() => window.open("https://www.facebook.com/profile.php?id=61569565533751")}>
                        <FaFacebookSquare size={28} className='facebook-icon'/>                        
                        </a>
                        <a href='#googleBusiness' onClick={() => window.open('https://g.co/kgs/C3smwod')}>
                            <FaShop size={28} className='google-icon'/>                        
                        </a>
                        <a href='#instagram' onClick={() => window.open('https://www.instagram.com/b.sites.company/')}>
                            <FaInstagram size={28} className='instagram-icon'/>                        
                        </a>
                    </div>
                </section>

            </div>
            <hr />
            <div className="footer-div1">
                <p>©Copyright 2025 Web Designed and Develop by B-Sites</p>
                <a style={{color: 'white', textDecoration: 'none'}} href="http://www.freepik.com">Images Designed by Freepik</a>
            </div>
        </motion.footer>
    );
}

export default Footer;