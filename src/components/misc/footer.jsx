//Pie de pagina 

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

function Footer(){
    return(
        <footer>
            <div className="footer-div0">

                <section >
                    <h2>Información</h2>
                    <a href="#Nosotros" >Nosotros</a>
                    <a href="#NuestroServicio" >Servicio</a>
                    <a href="#Costos" >Costos</a>
                    <a href="#Politicas" >Políticas</a>
                </section>
                
                <section >
                    <h2>Contacto</h2>
                    <a href='https://wa.me/+523841177360'>+523841177360</a>
                    <a href='mailto:bsitesmanagement@gmail.com'>bsitesmanagement@gmail.com</a>
                </section>

                <section id="redes">
                    <h2>Sigue Nuestras Redes</h2>
                    <div style={{display: 'flex'}}>
                        <a href='#facebook' onClick={() => window.open("https://www.facebook.com/profile.php?id=61569565533751")}>
                        <FaFacebookSquare size={28} className='facebook-icon'/>                        
                        </a>
                        <a href='#instagram' onClick={() => window.open('https://www.instagram.com/b.sites.company/')}>
                            <FaInstagram size={28} className='instagram-icon'/>                        
                        </a>
                    </div>
                </section>

            </div>
            <hr />
            <div className="footer-div1">
                <p>©Copyright 2024 Web Designed and Develop by B-Sites</p>
                <a style={{color: 'white', textDecoration: 'none'}} href="http://www.freepik.com">Images Designed by Freepik</a>
            </div>
        </footer>
    );
}

export default Footer;