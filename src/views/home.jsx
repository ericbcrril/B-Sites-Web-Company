//Inicio
import { IoMdDownload } from "react-icons/io";
import { useEffect } from "react";
//Componentes
import Footer from "../components/misc/footer";
import Navbar from "../components/misc/navbar";
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
        let waLink = `https://wa.me/+523318435194?text=${message}`;
        window.open(waLink)
    }
    

    return(<>

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
                    <p>Nosotros te ayudaremos a destacar de entre los demas, diseñando y desarrollando una web
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
            <p className="secN2-p">Obten una aproximacion del costo de desarrollo de tu proyecto</p>
                        <p>Ofrecemos servicios de hosting accesibles y confiables para tu sitio web:</p>
                        <ul>
                            <li><FaCheck color="green" className="check-icon" /> Hosting de 1 mes: <strong>40 MXN</strong></li>
                            <li><FaCheck color="green" className="check-icon" /> Hosting de 1 año: <strong>350 MXN</strong></li>
                            <li><FaCheck color="green" className="check-icon" /> Dominio personalizado (1 año): <strong>300 MXN</strong>, renovación: <strong>400 MXN</strong></li>
                        </ul>
                        <section id="Costos">
                            <div className="paquete">
                                <div>
                                    <h3>Landing Page</h3>
                                    <h4>1500 MXN</h4>
                                </div>
                                <hr />
                                <p><FaCheck color="green" className="check-icon" /> Diseño para Celular, Tablets y Escritorio</p>
                                <p><FaCheck color="green" className="check-icon" /> Hasta 3 secciones de navegación</p>
                                <p><FaCheck color="green" className="check-icon" /> Integración con tus redes sociales</p>
                                <p><FaCheck color="green" className="check-icon" /> Optimización básica para buscadores (SEO)</p>
                                <p><FaCheck color="green" className="check-icon" /> Tiempo de entrega rápido</p>
                                <div>
                                    <button onClick={() => handleSendWaM(0)}>Elegir Plan</button>
                                </div>
                            </div>

                            <div className="paquete">
                                <div>
                                    <h3>Web Corporativa</h3>
                                    <h4>3500 MXN</h4>
                                </div>
                                <hr />
                                <p><FaCheck color="green" className="check-icon" /> Diseño para Celular, Tablets y Escritorio</p>
                                <p><FaCheck color="green" className="check-icon" /> Hasta 5 páginas de navegación</p>
                                <p><FaCheck color="green" className="check-icon" /> Integración con tus redes sociales</p>
                                <p><FaCheck color="green" className="check-icon" /> Formulario de contacto funcional</p>
                                <p><FaCheck color="green" className="check-icon" /> Hosting gratuito por 3 meses</p>
                                <div>
                                    <button onClick={() => handleSendWaM(1)}>Elegir Plan</button>
                                </div>
                            </div>

                            <div className="paquete">
                                <div>
                                    <h3>Tienda en Línea</h3>
                                    <h4>4500 MXN</h4>
                                </div>
                                <hr />
                                <p><FaCheck color="green" className="check-icon" /> Diseño para Celular, Tablets y Escritorio</p>
                                <p><FaCheck color="green" className="check-icon" /> Sistema de productos y carrito de compras</p>
                                <p><FaCheck color="green" className="check-icon" /> Integracion con Google Analytics</p>
                                <p><FaCheck color="green" className="check-icon" /> Mensajería automática a WhatsApp para pedidos</p>
                                <p><FaCheck color="green" className="check-icon" /> Hosting gratuito por 3 meses</p>
                                <div>
                                    <button onClick={() => handleSendWaM(2)}>Elegir Plan</button>
                                </div>
                            </div>
                        </section>

                        {/**
                         <br /><br />
                        <h2 className="sub-title-main" id="Hostinger">Hosting Web</h2>
                        <p className="secN2-p">Afiliados por Hostinger</p>
                        <p className="secN2-p">✔ Obten Un descuento por contratar desde nuestro sitio B-Sites</p>
                        <section>
                            <div className="paqueteH">
                                <div>
                                    <h3>Hosting Premium</h3>
                                    <p>Todo lo que necesitas para crear tu sitio web</p>
                                    <h4>59.99 MX$/mes</h4>
                                </div>
                                <hr />
                                <p><FaCheck color="green" className="check-icon"/> 100 Sitios web</p>
                                <p><FaCheck color="green" className="check-icon"/> ~25,000 Visitas Mensuales</p>
                                <p><FaCheck color="green" className="check-icon"/> 100GB de almacenamiento NVMe</p>
                                <p><FaCheck color="green" className="check-icon"/> 400,000 Archivos y directorios (inodos)</p>
                                <div>
                                    <a className="btn-hostinger" 
                                        rel="noopener noreferrer"
                                        target="_blank" 
                                        href="https://www.hostinger.mx/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=II6BSEABSHKH&referral_id=01944d79-e717-71e8-a0aa-c37f29d86460"
                                        >Elegir Plan</a>
                                </div>                </div>
                            <div className="paqueteH">
                                <div>
                                    <h3>Hosting Empresarial</h3>
                                    <p>Sube de nivel con más potencia y funciones mejoradas</p>
                                    <h4>79.99 MX$/mes</h4>
                                </div>
                                <hr />
                                <p><FaCheck color="green" className="check-icon"/> 100 Sitios web</p>
                                <p><FaCheck color="green" className="check-icon"/> ~100,000 Visitas Mensuales</p>
                                <p><FaCheck color="green" className="check-icon"/> 200GB de almacenamiento NVMe</p>
                                <p><FaCheck color="green" className="check-icon"/> 600,000 Archivos y directorios (inodos)</p>
                                <div>
                                    <a className="btn-hostinger" 
                                        rel="noopener noreferrer"
                                        target="_blank" 
                                        href="https://www.hostinger.mx/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=II6BSEABSHKH&referral_id=01944d7a-a70a-7189-ac7b-d28ff3a61431"
                                        >Elegir Plan</a>
                                </div>                </div>
                            <div className="paqueteH">
                                <div>
                                    <h3>Cloud Startup</h3>
                                    <p>Optimizado para empresas y tiendas online</p>
                                    <h4>166.99 MX$/mes</h4>
                                </div>
                                <hr />
                                <p><FaCheck color="green" className="check-icon"/> 300 Sitios web</p>
                                <p><FaCheck color="green" className="check-icon"/> ~200,000 Visitas Mensuales</p>
                                <p><FaCheck color="green" className="check-icon"/> 200GB de almacenamiento NVMe</p>
                                <p><FaCheck color="green" className="check-icon"/> 2,000,000 Archivos y directorios (inodos)</p>
                                <div>
                                    <a className="btn-hostinger"
                                        rel="noopener noreferrer"
                                        target="_blank" 
                                        href="https://www.hostinger.mx/cart?product=hosting%3Acloud_economy&period=12&referral_type=cart_link&REFERRALCODE=II6BSEABSHKH&referral_id=01944d7a-c36c-7246-9a07-428722e5f30a"
                                        >Elegir Plan</a>
                                </div>
                            </div>
                        </section>
                         */}
        </section>
 
        <section className="secN3" id="Politicas">
            <section id="Politicas">
                <h2 className="sub-title-main">Politicas</h2>
                <p>Para el desarrollo de una web en B-Sites</p>
                <a href="/docs/Terminos y Condiciones.pdf" download="Terminos y Condiciones B-Sites">
                    <IoMdDownload/>Descargar
                </a>
                <p>O</p>
                <a href="https://drive.google.com/file/d/1_gwtJXdj4CbdgrP34UjgXRjRekE_T1BU/view?usp=sharing">Ver en Google Drive</a>
            </section>
        </section>
        
    </main>

    <Footer/>

    </>);
}

export default Home;
