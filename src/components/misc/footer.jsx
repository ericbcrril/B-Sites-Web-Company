//Pie de pagina 

import { FaFacebookSquare } from 'react-icons/fa';

function Footer(){
    return(
        <footer>
            <div className="footer-div0">

                <section >
                    <h2>Informacion</h2>
                    <a href="#1" >Nosotros</a>
                    <a href="#2" >Nuestro Servicio</a>
                    <a href="#3" >Sección</a>
                </section>
                
                <section >
                    <h2>Contactanos</h2>
                    <a href='https://wa.me/+523318435194'>3318435194</a>
                    <a href='mailto:bsitesmanagement@gmail.com'>bsitesmanagement@gmail.com</a>
                </section>

                <section id="redes">
                    <h2>Sigue Nuestras Redes</h2>
                    <a href="https://www.facebook.com/profile.php?id=61569565533751">
                        <FaFacebookSquare size={28} className='facebook-icon'/>                        
                    </a>
                </section>

            </div>
            <hr />
            <div className="footer-div1">
                <p>©Copyright 2024 Designed and Develop by B-Sites</p>
                <a style={{color: 'white', textDecoration: 'none'}} href="http://www.freepik.com">Images Designed by Freepik</a>
            </div>
        </footer>
    );
}

export default Footer;