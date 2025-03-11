import './styles.css';
import doc0Img from './images/doc0.webp';
import doc1Img from './images/doc1.webp';
import doc2Img from './images/doc2.webp';
import consultaImg from './images/TaeAugust07.webp';
import pediatriaImg from './images/8629258.webp';
import examenesImg from './images/Checklist.webp';
import emergenciaImg from './images/emergencia.webp';
import Exit from '../../components/misc/backToTheMainWeb';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

function Index() {

  return(
  <html lang="es">
    <head>
      <title>Clínica VitalSalud | Salud y Bienestar</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <style>
      
      </style>
    </head>
    <body>

      <Exit />

      <header>
        <h2 className="logo">VitalSalud</h2>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#equipo">Equipo</a></li>
            <li><a href="#horarios">Horarios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section id="inicio" class="hero" >
        <h1>Clínica VitalSalud</h1>
        <p>Atención médica de calidad y profesional comprometido con tu bienestar.</p>
        <a href="#contacto" class="btn">Agenda tu cita</a>
      </section>

      <section id="servicios" class="section">
        <h2>Nuestros Servicios</h2>
        <div class="container">
          <div class="card">
            <img src={consultaImg} alt="Img" />
            <h3>Consulta General</h3>
            <p>Diagnóstico y tratamiento con atención personalizada.</p>
          </div>
          <div class="card">
            <img src={pediatriaImg} alt="Img" style={{borderRadius: '20px'}}/>
            <h3>Pediatría</h3>
            <p>Cuidado especializado para los más pequeños.</p>
          </div>
          <div class="card">
            <img src={examenesImg} alt="Img" />
            <h3>Exámenes Médicos</h3>
            <p>Revisión completa con equipos de última tecnología.</p>
          </div>
          <div class="card">
            <img src={emergenciaImg} alt="Img" />
            <h3>Emergencias</h3>
            <p>Atención inmediata para situaciones críticas.</p>
          </div>
        </div>
      </section>

      <section id="equipo" class="section">
        <h2>Nuestro Equipo</h2>
        <div class="container">
          <div class="card team-member">
            <img src={doc0Img} alt="Dr. Juan Pérez"/>
            <h3>Dr. Juan Pérez</h3>
            <p>Especialista en medicina general</p>
          </div>
          <div class="card team-member">
            <img src={doc1Img} alt="Dra. Ana Gómez"/>
            <h3>Dra. Ana Gómez</h3>
            <p>Pediatra</p>
          </div>
          <div class="card team-member">
            <img src={doc2Img} alt="Dr. Carlos Rivera"/>
            <h3>Dr. Carlos Rivera</h3>
            <p>Especialista en emergencias</p>
          </div>
        </div>
      </section>

      <section id="horarios" class="section">
        <h2>Horarios de Atención</h2>
        <div class="horarios">
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
                <td colspan="2">Cerrado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contacto" class="section">
        <h2>Contacto</h2>
        <form id="contact-form" class="contact-form">
          <input type="text" name="nombre" placeholder="Tu Nombre" autoComplete='name' required/>
          <input type="email" name="email" placeholder="Tu Email" autoComplete='email' required/>
          <textarea name="mensaje" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class='btn'>Enviar</button>
        </form>
      </section>

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

      

    </body>
  </html>
  );
}

export default Index;
