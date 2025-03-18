import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//Styles
import '../../styles/views/404.css';

function View() {

    const navigate = useNavigate();

    return (<section className="section-404">
    <img src="images/logos/BSitesLogo00.webp" alt="logo" />
    <h1>404 No encontrado</h1>
    <button onClick={() => navigate('/')}>
        <FaArrowLeft />
        Inicio
    </button>
    </section>);
}

export default View;