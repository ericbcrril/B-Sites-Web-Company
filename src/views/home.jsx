//Inicio
import { IoMdDownload } from "react-icons/io";
//Componentes
import Footer from "../components/misc/footer";
import Navbar from "../components/misc/navbar";
import ScreenSizes from "../scripts/getWinScreenSizes";

function Home(){
    const IFW = ["2807211", "7922055", "7913078"];
    const img = IFW[Math.floor(Math.random() * IFW.length)];
   
    return(<>

    <ScreenSizes/>

    <Navbar/>

    <section className="welcome-section" id="welcome">
        <div className="ws0">
            <img src="images/logos/BSitesLogo01-NB.webp" alt="BSites01" />
            <p>¡Estamos listos para transformar tu idea en una solución web de calidad!</p>
        </div>
        <img src={`/images/resource/${img}.webp`} alt="WImage" className="ws1" />
    </section>
    
    <main>
        <section className="secN0" id="0">
            <img src="/images/resource/4893415.webp" alt="" />
                <div>
                    <h2>¿Quienes somos?</h2>
                    <p>Somos una empresa mexicana de tecnología, joven, dinámica y en constante crecimiento que
                        se dedica al desarrollo de aplicaciones y sitios web.</p>
                    <p>Nuestro equipo está compuesto por desarrolladores apasionados por la tecnología 
                        y enfocados en ofrecer soluciones innovadoras y eficientes al mejor precio.</p>
                    <p>Nosotros te ayudaremos a destacar de entre los demas, diseñando y desarrollando una web
                        funcional para tu negocio.</p>
                </div>
            </section>

        <section className="secN1" id="1">
            <h2>Nuestro Servicio</h2>
                <img src="/images/resource/flujoTrabajo.webp" alt="" className="img-ft-desk"/>
                <img src="/images/resource/flujoTrabajoMovil.webp" alt="" className="img-ft-mobile"/>
        </section>

        <section className="secN2" id="2">
            <h2>Nuestros Paquetes</h2>
            <p className="secN2-p">Obten una aproximacion del costo de tu proyecto.</p>
            <section>
                <div className="paquete">
                    <div>
                        <h3>Web Basica</h3>
                        <h4>1500 MXN</h4>
                    </div>
                    <hr />
                    <p>🟢 Diseño para Celular, Tablets y Escritorio.</p>
                    <p>🟢 3 Paginas de navegacion.</p>
                    <p>🟢 Integracion con tus redes sociales.</p>
                    <p>🔴 3 meses Host GRATIS.</p>
                    <p>🔴 5 Paginas de navegacion.</p>
                    <p>🔴 Paginas Ilimitadas.</p>
                    <p>🔴 Mensageria a tu WhatsApp y Email.</p>
                </div>
                <div className="paquete">
                    <div>
                        <h3>Web Estandar</h3>
                        <h4>1500 MXN</h4>
                    </div>
                    <hr />
                    <p>🟢 Diseño para Celular, Tablets y Escritorio.</p>
                    <p>🟢 3 Paginas de navegacion.</p>
                    <p>🟢 Integracion con tus redes sociales.</p>
                    <p>🟢 3 meses Host GRATIS.</p>
                    <p>🟢 5 Paginas de navegacion.</p>
                    <p>🔴 Paginas Ilimitadas.</p>
                    <p>🔴 Mensageria a tu WhatsApp y Email.</p>
                </div>
                <div className="paquete">
                    <div>
                        <h3>Web Avanzada</h3>
                        <h4>1500 MXN</h4>
                    </div>
                    <hr />
                    <p>🟢 Diseño para Celular, Tablets y Escritorio.</p>
                    <p>🟢 3 Paginas de navegacion.</p>
                    <p>🟢 Integracion con tus redes sociales.</p>
                    <p>🟢 3 meses Host GRATIS.</p>
                    <p>🟢 5 Paginas de navegacion.</p>
                    <p>🟢 Paginas Ilimitadas.</p>
                    <p>🟢 Mensageria a tu WhatsApp y Email.</p>
                </div>
            </section>
            <p className="secN2-p">⚠️ IMPORTANTE: Los precios mencionados son guías aproximadas y pueden variar según la complejidad específica de cada proyecto.</p>
        </section>
 
        <section className="secN3" id="3">
            <section>
                <h2>Politicas</h2>
                <a href="/docs/Terminos y Condiciones.pdf" download="Terminos y Condiciones B-Sites">
                    <IoMdDownload/>Descargar
                </a>
                <p>O</p>
                <a href="https://drive.google.com/file/d/1f3_tjQXoW-sFxJhNpKr7UeYAD7pYSOkS/view?usp=sharing">Ver en Google docs</a>
            </section>
        </section>
    </main>

    <Footer/>

    </>);
}

export default Home;