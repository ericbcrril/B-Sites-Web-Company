import { useState, useEffect } from "react";
//Componentes
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
//Scripts
import sendMessage from "../../scripts/sendWaMessage";
import sendEmail from "../../scripts/sendEmailMessage";

function Navbar() {
    const [formVisible, setVisible] = useState(false);
    const [WaEm, sendWaEm] = useState(true);
    const [activeSection, setActiveSection] = useState(""); // Estado para la sección activa

    function handleClick(o){
        setVisible(true)
        sendWaEm(o)
    }

    // Detectar sección visible
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id; // Actualiza con el ID de la sección visible
                }
            });

            setActiveSection(currentSection); // Cambia la sección activa en el estado
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function ContactForm() {
        return (
            <form
                onSubmit={WaEm ? sendMessage : sendEmail}
                className="contact-form"
                style={formVisible ? { position: "fixed", display: "flex" } : { display: "none" }}
            >
                <label htmlFor="userName">Nombre:</label>
                <input type="text" name="userName" id="userName" required={true} placeholder="¿Cual es tu Nombre?"/>
                <textarea name="message" id="message" cols="30" rows="10" required={true} placeholder="Cuntanos algo sobre el proyecto que tienes en mente..."></textarea>
                <div>
                    <label htmlFor="wasap" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <input
                            type="radio"
                            name="formOption"
                            id="wasap"
                            value="whatsapp"
                            onClick={() => handleClick(true)}
                        />
                        <FaWhatsapp color="#25D366" size={20} /> WhatsApp
                    </label>
                </div>
                <div>
                    <label htmlFor="email" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <input
                            type="radio"
                            name="formOption"
                            id="email"
                            value="email"
                            onClick={() => handleClick(false)}
                        />
                        <TfiEmail color="#0072C6" size={20} /> Email
                    </label>
                </div>

                <button type="submit">Enviar</button>
            </form>
        );
    }

    return (
        <>
        <button 
                onClick={() =>  window.open(`https://wa.me/+523318435194`)} 
                className="btn-contactanos"
                ><FaWhatsapp/></button>
            <nav>
                <a href="#Bienvenido" className={activeSection === "Bienvenido" ? "active-link" : ""}>
                    <img src="images/logos/BSitesLogo00.webp" alt="Logo00" />
                </a>
                <a href="#Nosotros" className={activeSection === "Nosotros" ? "active-link" : ""}>Bienvenido</a>
                <a href="#NuestroServicio" className={activeSection === "NuestroServicio" ? "active-link" : ""}>Nuestro servicio</a>
                <a href="#Costos" className={activeSection === "Costos" ? "active-link" : ""}>Desarrollo web</a>
                <a href="#Politicas" className={activeSection === "Politicas" ? "active-link" : ""}>Politicas</a>
                <button onClick={() => setVisible(!formVisible)}>Contactanos</button>
            </nav>
            <ContactForm />
        </>
    );
}

export default Navbar;
