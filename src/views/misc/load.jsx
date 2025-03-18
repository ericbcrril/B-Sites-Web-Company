import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//Styles
import '../../styles/views/load.css';

function View() {

    const navigate = useNavigate();

    return (<section className="section-load">
    <img src="images/logos/BSitesLogo00.webp" alt="logo" />
    <h1>Cargando...</h1>
    </section>);
}

export default View;