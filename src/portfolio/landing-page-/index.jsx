import { motion } from 'framer-motion';
import headerImg from './images/header.webp';
import doc0Img from './images/doc0.webp';
import doc1Img from './images/doc1.webp';
import doc2Img from './images/doc2.webp';
import consultaImg from './images/TaeAugust07.webp';
import pediatriaImg from './images/8629258.webp';
import examenesImg from './images/Checklist.webp';
import emergenciaImg from './images/emergencia.webp';
//import Exit from '../../components/misc/backToTheMainWeb';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

function Index() {
  return (
    <html lang="es">
      <head>
        <title>Clínica VitalSalud | Salud y Bienestar</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`:root {
  --primary-color: #2B6777;
  --secondary-color: #0056b3;
  --light-color: #f8f9fa;
  --dark-color: #333;
  --transition-speed: 0.3s;
}

/* Reset y estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-image: none;
  background-color: var(--light-color);
  color: var(--dark-color);
  line-height: 1.6;
}

/* Header fijo y responsivo */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-color);
  padding: 15px 30px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

header .logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color var(--transition-speed);
}

nav a:hover {
  color: var(--light-color);
}

/* Sección Hero */
.hero {
  height: 100vh;
  background: url(${headerImg}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
  position: relative;
  margin-top: 50px; /* Espacio para el header fijo */
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero > * {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #fff;
}

.hero p {
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #fff;
}

.btn {
  display: inline-block;
  padding: 12px 25px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 80px;
  transition: all var(--transition-speed);
}

.btn:hover {
  background: var(--secondary-color);
}

/* Secciones generales */
.section {
  padding: 80px 20px;
  text-align: center;
}

.section h2 {
  margin-bottom: 40px;
  font-size: 2.5em;
  color: var(--primary-color);
}

.container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 300px;
  text-align: center;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
  margin: 0 auto;
}

.card img {
  width: 60%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.card h3 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.3em;
}

.card p {
  margin-bottom: 0;
  font-size: 1em;
  line-height: 1.4;
}

/* Equipo */
.team-member img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
}

/* Formulario de Contacto */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.contact-form input, .contact-form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

/* Tabla de Horarios */
.horarios {
  max-width: 800px;
  margin: 0 auto;
  overflow-x: auto;
}

.horarios table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.horarios th, .horarios td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.horarios th {
  background: var(--primary-color);
  color: white;
}

.horarios tr:hover {
  background: #f1f1f1;
}

/* Sección Testimonios */
#testimonios {
  background: #eef2f3;
}

/* Sección Equipo y Contacto */
#equipo, #contacto {
  background: #eef2f3;
}

/* FAQ (Preguntas Frecuentes) */
#faq {
  padding: 80px 20px;
  text-align: center;
}

#faq h2 {
  margin-bottom: 40px;
  font-size: 2.5em;
  color: var(--primary-color);
}

.faq-item {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.faq-question {
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.faq-answer {
  margin-bottom: 5px;
}

/* Mapa de ubicación */
.map-container {
  margin-top: 40px;
  width: 100%;
  max-width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
}

/* Footer */
footer {
  text-align: center;
  padding: 10px;
  background: var(--primary-color);
  color: white;
}

/* Responsividad */
@media (max-width: 450px) {
  header .logo {
    display: none;
  }
  nav ul {
    gap: 20px;
    font-size: 1em;
  }
  nav a {
    font-size: x-small;
  }
}
`}
        </style>
      </head>
      <body>
        
        {/*<Exit />*/}

        {/* Header animado */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="logo">VitalSalud</h2>
          <nav>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#equipo">Equipo</a>
              </li>
              <li>
                <a href="#horarios">Horarios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </motion.header>

        {/* Sección Hero animada */}
        <motion.section
          id="inicio"
          className="hero"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Clínica VitalSalud</h1>
          <p>
            Atención médica de calidad y profesional comprometido con tu bienestar.
          </p>
          <a href="#contacto" className="btn">
            Agenda tu cita
          </a>
        </motion.section>

        {/* Sección de Servicios */}
        <motion.section
          id="servicios"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Nuestros Servicios</h2>
          <div className="container">
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={consultaImg} alt="Consulta General" />
              <h3>Consulta General</h3>
              <p>Diagnóstico y tratamiento con atención personalizada.</p>
            </motion.div>
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={pediatriaImg} alt="Pediatría" style={{ borderRadius: '20px' }} />
              <h3>Pediatría</h3>
              <p>Cuidado especializado para los más pequeños.</p>
            </motion.div>
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={examenesImg} alt="Exámenes Médicos" />
              <h3>Exámenes Médicos</h3>
              <p>Revisión completa con equipos de última tecnología.</p>
            </motion.div>
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={emergenciaImg} alt="Emergencias" />
              <h3>Emergencias</h3>
              <p>Atención inmediata para situaciones críticas.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Sección de Equipo */}
        <motion.section
          id="equipo"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Nuestro Equipo</h2>
          <div className="container">
            <motion.div
              className="card team-member"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={doc0Img} alt="Dr. Juan Pérez" />
              <h3>Dr. Juan Pérez</h3>
              <p>Especialista en medicina general</p>
            </motion.div>
            <motion.div
              className="card team-member"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={doc1Img} alt="Dra. Ana Gómez" />
              <h3>Dra. Ana Gómez</h3>
              <p>Pediatra</p>
            </motion.div>
            <motion.div
              className="card team-member"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={doc2Img} alt="Dr. Carlos Rivera" />
              <h3>Dr. Carlos Rivera</h3>
              <p>Especialista en emergencias</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Sección de Horarios */}
        <motion.section
          id="horarios"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Horarios de Atención</h2>
          <div className="horarios">
            <table>
              <thead>
                <tr>
                  <th>Día</th>
                  <th>Horario de Mañana</th>
                  <th>Horario de Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lunes</td>
                  <td>08:00 - 12:00</td>
                  <td>14:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Martes</td>
                  <td>08:00 - 12:00</td>
                  <td>14:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Miércoles</td>
                  <td>08:00 - 12:00</td>
                  <td>14:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Jueves</td>
                  <td>08:00 - 12:00</td>
                  <td>14:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Viernes</td>
                  <td>08:00 - 12:00</td>
                  <td>14:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>09:00 - 13:00</td>
                  <td>Cerrado</td>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td colSpan="2">Cerrado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Sección de Contacto */}
        <motion.section
          id="contacto"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Contacto</h2>
          <form id="contact-form" className="contact-form">
            <input type="text" name="nombre" placeholder="Tu Nombre" autoComplete="name" required />
            <input type="email" name="email" placeholder="Tu Email" autoComplete="email" required />
            <textarea name="mensaje" placeholder="Tu Mensaje" required></textarea>
            <motion.button
              type="submit"
              className="btn"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Enviar
            </motion.button>
          </form>
        </motion.section>

        {/* Footer animado */}
        <footer
        >
          <div style={{ marginBottom: '10px', fontSize: 'small' }}>
            Síguenos en nuestras redes sociales:
          </div>
          <div style={{ marginBottom: '10px' }}>
            <a href="#facebook" onClick={() => window.open("https://www.facebook.com/profile.php?id=61569565533751")}>
              <FaFacebookSquare size={28} style={{ margin: '0 10px' }} className='facebook-icon' />
            </a>
            <a href="#instagram" onClick={() => window.open('https://www.instagram.com/b.sites.company/')}>
              <FaInstagram size={28} style={{ margin: '0 10px' }} className='instagram-icon' />
            </a>
          </div>
          <div style={{ whiteSpace: 'nowrap' }}>
            <a
              style={{ textDecoration: 'none', fontSize: 'small', margin: '0 10px' }}
              href="http://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Images Designed by Freepik
            </a>
            <br />
            <a
              style={{ whiteSpace: 'nowrap', fontSize: 'small', margin: '0 10px' }}
              href="https://bsitescomp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; Copyright 2025 Web Designed and Developed by B-Sites
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default Index;
