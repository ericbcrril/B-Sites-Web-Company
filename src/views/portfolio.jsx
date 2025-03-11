import '../styles/views/portfolio.css';
import Footer from '../components/misc/footer';
import Exit from '../components/misc/backToTheMainWeb';
import { useNavigate } from 'react-router-dom';

function Portfolio({ isMexico }) {

    const navigate = useNavigate();

    return(<>
    <body>

        <Exit />

        <section class="projects">
            
            <div className='projects-description'>
            <h2>Landing Page - ${isMexico ? "1500 MXN" : "79 USD"}</h2>
                <p>¡Una manera rápida y clara de atraer clientes!</p>
            </div>
            <div class="project-container">
                <div class="card">
                    <img src="images/resource/6463428.jpg" alt="Proyecto 1"/>
                    <div class="card-content">
                        <h3>El Sabor</h3>
                        <p>Sitio para establecimiento de comida Mexicana.</p>
                        <button onClick={ () => navigate('ElSabor') } class="btn">Ver Proyecto</button>
                    </div>
                </div>
                <div class="card">
                    <img src="images/resource/6463428.jpg" alt="Proyecto 2"/>
                    <div class="card-content">
                        <h3>Clínica medica</h3>
                        <p>Sitio para Consultorio medico.</p>
                        <button onClick={ () => navigate('Clinica') } class="btn">Ver Proyecto</button>
                    </div>
                </div>
            </div><br />

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
        </section>

        <Footer />

    </body>

    </>);
}

export default Portfolio;