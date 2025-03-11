import { motion } from "framer-motion";
import Footer from "../components/misc/footer";
import Navbar from "../components/misc/navbar";
import { FaCheck } from "react-icons/fa6";
import '../styles/views/home.css';
//import { useNavigate } from "react-router-dom";

function Home({ isMexico }) {
  //const navigate = useNavigate();
  const IFW = ["2807211", "7922055", "7913078"];
  const img = IFW[Math.floor(Math.random() * IFW.length)];

  function handleSendWaM(e) {
    const messages = [
      "Hola me interesa desarrollar una Landing Page",
      "Hola me interesa desarrollar una Web Corporativa",
      "Hola me interesa desarrollar una Tienda en Línea",
    ];
    let waLink = `https://wa.me/+523841177360?text=${messages[e] || messages[0]}`;
    window.open(waLink);
  }

  // Definición de los planes con precio en MXN
  const plans = [
    {
      title: "Landing Page",
      priceMXN: 1499,
      priceGlobal: 79,
      time: 0.2,
      features: [
        "Diseño para Celular, Tablets y Escritorio",
        "Hasta 3 secciones de navegación",
        "Integración con redes sociales",
        "Optimización básica para buscadores (SEO)",
        "Tiempo de entrega rápido",
      ],
    },
    {
      title: "Web Corporativa",
      priceMXN: 3499,
      priceGlobal: 179,
      time: 0.6,
      features: [
        "Diseño para Celular, Tablets y Escritorio",
        "Hasta 5 páginas de navegación",
        "Integración con redes sociales",
        "Formulario de contacto funcional",
        "Hosting gratuito por 3 meses",
      ],
    },
    {
      title: "Tienda en Línea",
      priceMXN: 4499,
      priceGlobal: 249,
      time: 1,
      features: [
        "Diseño para Celular, Tablets y Escritorio",
        "Sistema de productos y carrito de compras",
        "Integración con Google Analytics",
        "Mensajería automática a WhatsApp para pedidos",
        "Hosting gratuito por 3 meses",
      ],
    },
  ];

  return (
    <>

      <Navbar />

      <motion.section
        id="hero"
        className="hero"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-text">
          <h1>
            <strong>B-</strong>Sites
          </h1>
          <p>
            ¡Estamos listos para transformar tu idea en una solución web de
            calidad!
          </p>
          <a href="#about">
            <motion.button whileHover={{ scale: 1.1 }} className="btn-hero">
              Conoce más
            </motion.button>
          </a>
        </div>
        <div className="hero-image">
          <img src={`/images/resource/${img}.webp`} alt="Hero" />
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="about container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">¿Quiénes somos?</h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="about-image">
            <img src="/images/resource/6463428.jpg" alt="Nuestro Equipo" />
          </div>
          <div className="about-text">
            <p>
              Somos una organización de tecnología, joven, dinámica y en
              constante crecimiento que se dedica al desarrollo de
              aplicaciones y sitios web.
            </p>
            <p>
              Nuestro equipo está compuesto por desarrolladores apasionados por
              la tecnología y enfocados en ofrecer soluciones innovadoras y
              eficientes al mejor precio.
            </p>
            <p>
              Nosotros te ayudaremos a destacar de entre los demás, diseñando y
              desarrollando una web funcional para tu negocio.
            </p>
            {/*<button onClick={ () => navigate('/Portafolio') }>Proyectos</button>*/}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="services"
        className="services container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Nuestros Servicios</h2>
        <motion.div
          className="services-cards"
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3>Desarrollo Web</h3>
            <p>
              Creación de sitios web a medida, adaptados a tus necesidades con
              tecnologías modernas para garantizar una experiencia rápida y
              funcional.
            </p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3>Hosting</h3>
            <p>
              Ofrecemos alojamiento web seguro y confiable con tiempos de carga
              optimizados y soporte técnico para garantizar la estabilidad de tu
              página.
            </p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3>Registro de dominios</h3>
            <p>
              Te ayudamos a obtener el nombre de dominio ideal para tu marca,
              asegurando una identidad digital profesional y fácil de recordar.
            </p>
          </motion.div>
        </motion.div>
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1_gwtJXdj4CbdgrP34UjgXRjRekE_T1BU/view?usp=sharing"
            )
          }
        >
          Políticas
        </button>
      </motion.section>

      <motion.section id="pricing" className="pricing container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="section-title">Planes</h2>
        <div className="paquetes-container">
          {plans.map((plan, index) => (
            <motion.div className="paquete" key={index} initial={{ scale: 0.1 }} whileInView={{ scale: 1 }} transition={{ duration: plan.time }}>
              <div className="paquete-header">
                <h3>{plan.title}</h3>
                <h4>{isMexico ? `$${plan.priceMXN} MXN` : `$${plan.priceGlobal} USD`}</h4>
              </div>
              <hr />
              <div className="paquete-features">
                {plan.features.map((feature, i) => (
                  <p key={i}><FaCheck className="check-icon" /> {feature}</p>
                ))}
              </div>
              <button onClick={() => handleSendWaM(index)}>Elegir Plan</button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="faq"
        className="faq container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <p style={{ textAlign: "center" }}>
          🔍 Click para descubrir la respuesta 🔎
        </p>
        <div className="faq-items">
          <motion.details
            className="faq-item"
            initial={{ x: "-50%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <summary>¿Cuánto tiempo tardan en entregar un proyecto?</summary>
            <p>
              El tiempo varía según el alcance, pero en promedio el desarrollo
              dura entre 1 y 2 semanas.
            </p>
          </motion.details>
          <motion.details
            className="faq-item"
            initial={{ x: "50%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <summary>¿Ofrecen soporte post-proyecto?</summary>
            <p>Sí, brindamos soporte técnico durante los primeros 30 días.</p>
          </motion.details>
          <motion.details
            className="faq-item"
            initial={{ x: "-50%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <summary>¿Qué métodos de pago aceptan?</summary>
            <p>Aceptamos transferencias bancarias y depósito.</p>
          </motion.details>
          <motion.details
            className="faq-item"
            initial={{ x: "50%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.6 }}
          >
            <summary>¿Puedo solicitar modificaciones al diseño?</summary>
            <p>
              Claro, trabajamos de forma colaborativa y estamos abiertos a
              sugerencias para ajustar el diseño a tus necesidades.
            </p>
          </motion.details>
          <motion.details
            className="faq-item"
            initial={{ x: "-50%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.8 }}
          >
            <summary>
              ¿Qué información o materiales debo proporcionar para iniciar el
              proyecto?
            </summary>
            <p>
              Para comenzar, necesitaremos detalles sobre el alcance del
              proyecto, contenido, imágenes, logotipos y cualquier referencia que
              consideres importante.
            </p>
          </motion.details>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Home;
