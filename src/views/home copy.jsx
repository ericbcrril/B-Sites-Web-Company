//Inicio
import { IoMdDownload } from "react-icons/io";
import { useEffect } from "react";
//Componentes
import Footer from "../components/misc/footer";
import Navbar from "../components/misc/navbar";
//import ScreenSizes from "../scripts/getWinScreenSizes";
import { FaCheck } from "react-icons/fa6";

function Home(){
    const IFW = ["2807211", "7922055", "7913078"];
    const img = IFW[Math.floor(Math.random() * IFW.length)];
   
    useEffect(() => {
        const images = document.querySelectorAll(".img-secN0");
        const images0 = document.querySelectorAll(".img-ft-desk");
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("appear");
                }
            });
        });
    
        images.forEach(image => observer.observe(image));
        images0.forEach(image => observer.observe(image));
    
        return () => observer.disconnect(); // Limpia el observer al desmontar
    }, []);

    function handleSendWaM(e){
        let message;
        switch(e){
            case 0:
                message = 'Hola me interesa desarrollar una Landing Page'
            break;
            case 1:
                message = 'Hola me interesa desarrollar una Web Corporativa'
            break;
            case 2:
                message = 'Hola me interesa desarrollar una Tienda en Linea'
            break;
            default:
             message = 'Hola me interesa desarrollar una Landing Page'
        }
        let waLink = `https://wa.me/+523841177360?text=${message}`;
        window.open(waLink)
    }
    

    return(<>

    {/*<ScreenSizes/>*/}

    <Navbar/>

    <section className="welcome-section" id="Bienvenido">
        <div className="ws0">
            <img src="images/logos/BSitesLogo01-NB.webp" alt="BSites01" />
            <p>¡Estamos listos para transformar tu idea en una solución web de calidad!</p>
        </div>
        <img src={`/images/resource/${img}.webp`} alt="WImage" className="ws1" />
    </section>
    
    <main>
        <section className="secN0" id="Nosotros">
            <img className="img-secN0" src="/images/resource/4893415.webp" alt="" />
                <div>
                    <h2 className="sub-title-main">¿Quienes somos?</h2>
                    <p>Somos una empresa mexicana de tecnología, joven, dinámica y en constante crecimiento que
                        se dedica al desarrollo de aplicaciones y sitios web.</p>
                    <p>Nuestro equipo está compuesto por desarrolladores apasionados por la tecnología 
                        y enfocados en ofrecer soluciones innovadoras y eficientes al mejor precio.</p>
                    <p>Nosotros te ayudaremos a destacar de entre los demás, diseñando y desarrollando una web
                        funcional para tu negocio.</p>
                </div>
            </section>

        <section className="secN1" id="NuestroServicio">
            <h2 className="sub-title-main">Nuestro Servicio</h2>
                <img src="/images/resource/flujoTrabajo.webp" alt="" className="img-ft-desk"/>
                <img src="/images/resource/flujoTrabajoMovil.webp" alt="" className="img-ft-mobile"/>
        </section>

        <section className="secN2" id="Costos">
            <h2 className="sub-title-main">Costos</h2>
            <p className="secN2-p">Obtén una aproximación del costo de desarrollo de tu proyecto</p>
            <p className="info-text">Cuéntanos sobre tu proyecto. <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfAerTYvmkiMBUiyUaWIyQHhcvI61pTrB8ht7dSQOuDB-DdPA/viewform?usp=sharing">Haz clic aquí.</a></p>
            <p className="info-text">Ofrecemos servicios de hosting accesibles y confiables para tu sitio web:</p>

            <ul className="hosting-list">
                <li><FaCheck className="check-icon" /> Hosting de 1 mes: <strong>40 MXN</strong></li>
                <li><FaCheck className="check-icon" /> Hosting de 1 año: <strong>350 MXN</strong></li>
                <li><FaCheck className="check-icon" /> Dominio personalizado (1 año): <strong>300 MXN</strong></li>
            </ul>

            <div className="paquetes-container">
                {[
                    {
                        title: "Landing Page",
                        price: "1500 MXN",
                        features: [
                            "Diseño para Celular, Tablets y Escritorio",
                            "Hasta 3 secciones de navegación",
                            "Integración con redes sociales",
                            "Optimización básica para buscadores (SEO)",
                            "Tiempo de entrega rápido"
                        ]
                    },
                    {
                        title: "Web Corporativa",
                        price: "3500 MXN",
                        features: [
                            "Diseño para Celular, Tablets y Escritorio",
                            "Hasta 5 páginas de navegación",
                            "Integración con redes sociales",
                            "Formulario de contacto funcional",
                            "Hosting gratuito por 3 meses"
                        ]
                    },
                    {
                        title: "Tienda en Línea",
                        price: "4500 MXN",
                        features: [
                            "Diseño para Celular, Tablets y Escritorio",
                            "Sistema de productos y carrito de compras",
                            "Integración con Google Analytics",
                            "Mensajería automática a WhatsApp para pedidos",
                            "Hosting gratuito por 3 meses"
                        ]
                    }
                ].map((plan, index) => (
                    <div className="paquete" key={index}>
                        <div className="paquete-header">
                            <h3>{plan.title}</h3>
                            <h4>{plan.price}</h4>
                        </div>
                        <hr />
                        <div className="paquete-features">
                            {plan.features.map((feature, i) => (
                                <p key={i}><FaCheck className="check-icon" /> {feature}</p>
                            ))}
                        </div>
                        <button onClick={() => handleSendWaM(index)}>Elegir Plan</button>
                        {/*<a href="http://">Mostrar ejemplo</a>*/}
                    </div>
                ))}
            </div>
        </section>
 
        <section className="secN3" id="Politicas">
            <div className="politicas-container">
                <h2 className="sub-title-main">Políticas</h2>
                <p className="politicas-text">Para el desarrollo de una web en B-Sites</p>

                <div className="politicas-links">
                    <a 
                        href="/docs/Terminos y Condiciones.pdf" 
                        download="Terminos y Condiciones B-Sites"
                        className="download-button"
                    >
                        <IoMdDownload className="download-icon"/> Descargar Términos y Condiciones
                    </a>

                    <span className="or-text">O</span>

                    <a 
                        href="https://drive.google.com/file/d/1_gwtJXdj4CbdgrP34UjgXRjRekE_T1BU/view?usp=sharing"
                        className="view-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Ver en Google Drive
                    </a>
                </div>
            </div>
        </section>
    
        
    </main>

    <Footer/>

    </>);
}

export default Home;
