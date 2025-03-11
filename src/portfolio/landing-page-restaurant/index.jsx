import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";
//import Exit from '../../components/misc/backToTheMainWeb';

// Imágenes
import headerImg from './images/sombrero-mexican-food.webp';
import img0 from './images/mexican-style.webp';
import img1 from './images/clipboard-mexican-dishes.webp';
import menuImg from './images/Menu.webp';

function Index() {
    const menu = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    function showMenu() {
        setIsOpen(true);
        menu.current.showModal();
    }

    function closeMenu() {
        setIsOpen(false);
        setTimeout(() => menu.current.close(), 400); // Espera a la animación antes de cerrar
    }

    return (
        <html lang="en" className='html-landing-page-restaurant'>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>El Sabor</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet"/>
            <style>
                {`
                /* Estilos generales */

                    .html-landing-page-restaurant {
                        scrollbar-color: #e4007c #fff1e6; /* Color de la barra de desplazamiento */
                        scrollbar-width: thin;
                    }
                    
                    .body-landing-page-restaurant {
                        margin: 0;
                        font-family: 'Quicksand', sans-serif; /* Fuente principal */
                        background-color: #fff1e6;
                        background-image: none;
                        color: #333;
                        line-height: 1.6;
                    }
                    
                    /* Enlaces sin subrayado y con color heredado */
                    .body-landing-page-restaurant a {
                        text-decoration: none;
                        color: inherit;
                    }
                    
                    /* --- Encabezado con imagen de fondo --- */
                    .header-section {
                        background: url(${headerImg}) no-repeat center center/cover;
                        background-size: cover;
                        width: 100dvw;
                        max-width: none;
                        min-height: 300px; /* Asegura altura en pantallas pequeñas */
                        padding: 100px 20px;
                        text-align: center;
                        color: #fff;
                        position: relative;
                    }
                    
                    /* Overlay oscuro para mejorar la legibilidad del texto */
                    .header-section::after {
                        content: "";
                        background: rgba(0,0,0,0.5);
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                    }
                    
                    /* Título principal */
                    .header-section h1 {
                        font-family: 'Merriweather', serif; /* Fuente para títulos */
                        position: relative;
                        z-index: 1;
                        margin: 0;
                        font-size: 3em;
                        letter-spacing: 2px; /* Separación de letras para un estilo más elegante */
                    }
                    
                    /* Navegación */
                    nav {
                        position: relative;
                        z-index: 1;
                        margin-top: 20px;
                    }
                    
                    nav a {
                        margin: 0 15px;
                        font-weight: 600;
                        color: #fff;
                        transition: color 0.3s ease;
                    }
                    
                    nav a:hover {
                        color: #fff1e6;
                    }
                    
                    /* --- Secciones de contenido --- */
                    section {
                        padding: 60px 20px;
                        max-width: 800px;
                        margin: auto;
                        text-align: center;
                    }
                    
                    /* Títulos de sección */
                    section h2 {
                        font-family: 'Merriweather', serif;
                        color: #660033;
                        margin-bottom: 20px;
                        font-size: x-large;
                    }
                    
                    /* Párrafos de sección */
                    section p {
                        font-family: 'Quicksand', sans-serif;
                        margin-bottom: 20px;
                    }
                    
                    /* Separador sutil entre secciones (opcional) */
                    section:not(:last-child) {
                        border-bottom: 1px solid #e2e2e2;
                    }
                    
                    /* Imágenes en las secciones */
                    .section-img {
                        height: 250px;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    /* Efecto hover en las imágenes para dar un toque moderno */
                    .section-img img {
                        width: 100%;
                        height: auto;
                        margin: 20px 0;
                        border-radius: 8px;
                        transition: transform 0.3s ease;
                    }
                    
                    .section-img img:hover {
                        transform: scale(1.05);
                    }
                    
                    /* --- Botón con gradiente y hover --- */
                    .btn {
                    display: inline-block;
                    padding: 12px 24px;
                    background: linear-gradient(90deg, #e4007c, #be046a);
                    color: white;
                    border-radius: 8px;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    }

                    .btn:hover {
                    background: linear-gradient(90deg, #be046a, #e4007c);
                    transform: translateY(-3px);
                    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
                    }
                    
                    /* --- Sección de mapas --- */
                    .map-container {
                        width: 100%;
                        height: 400px;
                        border: 3px dashed #e4007c;
                        border-radius: 8px;
                        box-shadow: 0 0 10px 1px black;
                    }

                    /* --- Pie de página con gradiente --- */
                    footer {
                        background: linear-gradient(180deg, #e4007c, #be046a);
                        color: #fff;
                        text-align: center;
                        padding: 20px;
                        border-top: 1px solid #e2e2e2;
                    }
                    
                    /* --- Dialog (Menú emergente) --- */
                    .dialog-menu {
                        border: none;
                        border-radius: 8px;
                        padding: 20px;
                        text-align: center;
                        background: transparent;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    
                    /* Fondo oscuro al abrir el dialog */
                    .dialog-menu::backdrop {
                        background: rgba(0, 0, 0, 0.5);
                    }
                    
                    /* Botón/cerrar dentro del diálogo */
                    .dialog-menu .close-img {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        font-size: 24px;
                        cursor: pointer;
                        color: #660033;
                    }
                    
                    /* Contenedor de imagen dentro del diálogo */
                    .dialog-menu .image-container {
                        padding: 10px;
                        width: 450px;
                    }
                    
                    .dialog-menu .image-container img {
                        width: 100%;
                        border-radius: 8px;
                    }
                    
                    /* --- Responsividad --- */
                    @media (min-width: 451px) and (max-width: 1024px) and (min-height: 720px) {
                        .header-section {
                        min-height: 250px;
                        padding: 50px 10px;
                        }
                        .header-section h1 {
                        font-size: 1.8em;
                        }
                        section {
                        padding: 50px 20px;
                        }
                        .map-container {
                        height: 350px;
                        }
                        .dialog-menu .image-container {
                        width: 80vw;
                        }
                    }
                    
                    @media (max-width: 450px) {
                        header {
                        padding: 60px 10px;
                        }
                        header h1 {
                        font-size: 2em;
                        }
                        nav a {
                        margin: 0 10px;
                        font-size: 0.9em;
                        }
                        section {
                        padding: 40px 10px;
                        }
                        .map-container {
                        height: 300px;
                        }
                        .dialog-menu .image-container {
                        width: 80vw;
                        }
                    }
                    
                    @media (max-height: 450px) and (orientation: landscape) {
                        header {
                        padding: 40px 10px;
                        }
                        header h1 {
                        font-size: 1.8em;
                        }
                        section {
                        padding: 30px 10px;
                        }
                        .map-container {
                        height: 250px;
                        }
                    }
                `}
            </style>
        </head>
        <body className='body-landing-page-restaurant'>
            
            {/*<Exit />*/}
            
            {/* Sección 1: Encabezado */}
            <motion.section 
                className='header-section'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1>El Sabor</h1>
                <nav>
                    <a href="#acerca">Acerca de</a>
                    <a href="#menu">Menú</a>
                    <a href="#ubicacion">Ubicación</a>
                    <a href="#contacto">Contacto</a>
                </nav>
            </motion.section>

            {/* Sección 2: Acerca de Nosotros */}
            <motion.section 
                id="acerca"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Acerca de Nosotros</h2>
                <div className="section-img">
                    <motion.img 
                        src={img0} 
                        alt="Imagen del restaurante" 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <p>
                    Bienvenido a Restaurante El Sabor, donde combinamos tradición y modernidad para ofrecerte una experiencia gastronómica única.
                    Nuestros platos están elaborados con ingredientes frescos y de calidad, garantizando un sabor inigualable.
                </p>
            </motion.section>

            {/* Sección 3: Menú */}
            <motion.section 
                id="menu"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Menú</h2>
                <div className="section-img">
                    <motion.img 
                        src={img1} 
                        alt="Imagen del restaurante" 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <p>
                    Descubre nuestras especialidades culinarias, desde platos tradicionales hasta creaciones innovadoras.
                    Cada plato es una obra de arte culinaria diseñada para deleitar tu paladar.
                </p>
                <motion.button 
                    className="btn"
                    onClick={showMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Ver Menú Completo
                </motion.button>
            </motion.section>

            {/* Sección 4: Ubicación */}
            <motion.section 
                id="ubicacion"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2>Ubicados en...</h2>
                <p>Visítenos en nuestra ubicación y disfruta de una experiencia gastronómica única.</p>
                <iframe title='Ubicación de ejemplo'
                    className="map-container" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.918406152475!2d-122.08424968519368!3d37.42206597982568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24cd51a8d53%3A0xd203ea1ed1cbb81b!2sGoogleplex!5e0!3m2!1ses!2sus!4v1587043690995!5m2!1ses!2sus" 
                    allowFullScreen="" 
                    loading="lazy"
                />
            </motion.section>

            {/* Sección 5: Contacto */}
            <motion.section 
                id="contacto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Contacto</h2>
                <p>Reserva tu mesa o realiza tus consultas.</p>
                <p>¡Estamos aquí para atenderte!</p>
                <p>Email: info@elsabor.com | Tel: +34 123 456 789</p><br />
                <motion.button 
                    className='btn' 
                    onClick={() => window.open(`https://wa.me/+523841177360`)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaWhatsapp /> Reservar ahora
                </motion.button>
            </motion.section>

            {/* Pie de página */}
            <footer>
                <div style={{ marginBottom: '10px', fontSize: 'small' }}>
                    Síguenos en nuestras redes sociales:
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <a href='#facebook' onClick={() => window.open("https://www.facebook.com/profile.php?id=61569565533751")}>
                        <FaFacebookSquare size={28} style={{ margin: '0 10px' }} className='facebook-icon'/>                        
                        </a>
                        <a href='#instagram' onClick={() => window.open('https://www.instagram.com/b.sites.company/')}>
                            <FaInstagram size={28} style={{ margin: '0 10px' }} className='instagram-icon'/>                        
                        </a>
                </div>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <a style={{ textDecoration: 'none', fontSize: 'small', margin: '0 10px' }} href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">
                        Images Designed by Freepik
                    </a><br />
                    <a style={{ whiteSpace: 'nowrap', fontSize: 'small', margin: '0 10px' }} href="https://b-sites-company.netlify.app" target="_blank" rel="noopener noreferrer">
                        &copy; Copyright 2025 Web Designed and Developed by B-Sites
                    </a>
                </div>
            </footer>

            <dialog className='dialog-menu' ref={menu}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="menu-content"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <div className='image-container'>
                                <img src={menuImg} alt="Menu" />
                            </div>
                            <button className='btn' onClick={closeMenu}>Ok</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </dialog>
        </body>
        </html>
    );
}

export default Index;
