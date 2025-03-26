import '../styles/views/portfolio.css';
//import Footer from '../components/misc/footer';
import Exit from '../components/misc/backToTheMainWeb';
import { useNavigate } from 'react-router-dom';

function Portfolio({ isMexico }) {

    const navigate = useNavigate();

    return(<>
    <body>

        <Exit />

        <section class="projects">
            
            <div className='projects-description' id='portafolio'>
            <h2>Landing Page - ${isMexico ? "1500 MXN" : "79 USD"}</h2>
                <p>¡Una manera rápida y clara de atraer clientes!</p>
                <p style={{margin: 0, fontSize: 'x-small', marginTop: -5}}>(Proyectos demo)</p>
            </div>
            <div class="project-container">
                <div class="card">
                    <img src="images/logos/BSitesLogo00.webp" alt="Proyecto 1"/>
                    <div class="card-content">
                        <h3>El Sabor</h3>
                        <p>Sitio para establecimiento de comida Mexicana.</p>
                        <button onClick={ () => navigate('ElSabor') } class="btn">Ver Proyecto</button>
                    </div>
                </div>
                <div class="card">
                    <img src="images/logos/BSitesLogo00.webp" alt="Proyecto 2"/>
                    <div class="card-content">
                        <h3>Clínica medica</h3>
                        <p>Sitio para Consultorio medico.</p>
                        <button onClick={ () => navigate('Clinica') } class="btn">Ver Proyecto</button>
                    </div>
                </div>
            </div><br />

            {/*
            <div className='projects-description'>
            <h2>Web Corporativa - ${isMexico ? "3499 MXN" : "179 USD"}</h2>
                <p>Eleva la presencia de tu empresa o negocio.</p>
            </div>
            <div class="project-container">
                <div class="card">
                    <img src="images/resource/6463428.jpg" alt="Proyecto 3"/>
                    <div class="card-content">
                        <h3>Web Corporativa 1</h3>
                        <p>Descripción breve del proyecto.</p>
                        <button href="#" class="btn">Ver Proyecto</button>
                    </div>
                </div>
                <div class="card">
                    <img src="images/resource/6463428.jpg" alt="Proyecto 4"/>
                    <div class="card-content">
                        <h3>Web Corporativa 2</h3>
                        <p>Descripción breve del proyecto.</p>
                        <button href="#" class="btn">Ver Proyecto</button>
                    </div>
                </div>
            </div><br />

            <div className='projects-description'>
            <h2>Tienda Online - ${isMexico ? "4499 MXN" : "249 USD"}</h2>
                <p>Vende tus productos en línea con esta Web.</p>
            </div>
            <div class="project-container">
                <div class="card">
                    <img src="images/resource/6463428.jpg" alt="Proyecto 5"/>
                    <div class="card-content">
                        <h3>Tienda Online 1</h3>
                        <p>Descripción breve del proyecto.</p>
                        <button href="#" class="btn">Ver Proyecto</button>
                    </div>
                </div>
                <div class="card">
                    <img src="images/resource/6463428.jpg" alt="Proyecto 6"/>
                    <div class="card-content">
                        <h3>Tienda Online 2</h3>
                        <p>Descripción breve del proyecto.</p>
                        <button href="#" class="btn">Ver Proyecto</button>
                    </div>
                </div>
            </div><br />
            */}

            <div className='projects-description' >
            <h2>Confían en nosotros</h2>
                <p>Clientes que avalan nuestro compromiso y calidad. Descubre cómo hemos transformado sus ideas en proyectos exitosos.</p>
            </div>
            <div class="project-container">
                <div class="card">
                    <img src="https://turisticosbecerros.com/logo512.png" alt="Proyecto 5"/>
                    <div class="card-content">
                        <h3>Turísticos Becerros</h3>
                        <p>Renta de autobuses para turismo a toda la república, 📍Guadalajara, Jalisco.</p>
                        <button onClick={ () => window.open('https://turisticosbecerros.com') } class="btn">Visitar</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://elitespecialsolutions.com/logo512.png" alt="Proyecto 6"/>
                    <div class="card-content">
                        <h3>Elite Special Solutions</h3>
                        <p>Conectando empresas con talento de primer nivel, Nicaragua y América Latina.</p>
                        <button onClick={ () => window.open('https://elitespecialsolutions.com') } class="btn">Visitar</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://intext-estudio.netlify.app/logo512.png" alt="Proyecto 6"/>
                    <div class="card-content">
                        <h3>Intext Estudio</h3>
                        <p>Remodelamos Tu Hogar. Para re-valorar tu patrimonio. Actual, único y a bajo costo.</p>
                        <button onClick={ () => window.open('https://intext-estudio.netlify.app') } class="btn">Visitar</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://brujoleodantor.com/logo512.png" alt="Proyecto 6"/>
                    <div class="card-content">
                        <h3>Ougan Brujo Leo</h3>
                        <p>Trabajos espirituales, respaldados por resultados comprobados.</p>
                        <button onClick={ () => window.open('https://brujoleodantor.com') } class="btn">Visitar</button>
                    </div>
                </div>
            </div><br />
        </section>


    </body>

    </>);
}

export default Portfolio;