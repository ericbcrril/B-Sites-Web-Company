import { useState, useEffect } from "react";
//Componentes
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
//Scripts
import sendMessage from "../../scripts/sendWaMessage";
import sendEmail from "../../scripts/sendEmailMessage";

function Navbar() {
    const [formVisible, setVisible] = useState(false);
    const [WaEm, setWaEm] = useState("whatsapp");
    const [selectedIcon, setSelectedIcon] = useState(<FaWhatsapp color="#25D366" />); // Icono inicial
    const [activeSection, setActiveSection] = useState("");

    function handleSelectChange(event) {
        const selectedValue = event.target.value;
        setWaEm(selectedValue);
        setSelectedIcon(selectedValue === "whatsapp" ? <FaWhatsapp color="#25D366" /> : <TfiEmail color="#0072C6" />);
    }

    // Detectar sección visible
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function ContactForm() {
        const handleSubmit = (event) => {
            event.preventDefault();
            WaEm === "whatsapp" ? sendMessage() : sendEmail();
        };

        return (
            <form
                onSubmit={handleSubmit}
                className="contact-form"
                style={formVisible ? { position: "fixed", display: "flex" } : { display: "none" }}
            >
                <label htmlFor="userName">Nombre:</label>
                <input type="text" name="userName" id="userName" required placeholder="¿Cuál es tu Nombre?" />
                
                <textarea name="message" id="message" cols="30" rows="10" required placeholder="Cuéntanos algo sobre el proyecto que tienes en mente..."></textarea>
                <br />
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {selectedIcon} {/* Aquí se muestra el icono seleccionado */}
                    <select id="contactMethod" name="contactMethod" value={WaEm} onChange={handleSelectChange}>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="email">Email</option>
                    </select>
                </div><br />

                <button type="submit">Enviar</button>
            </form>
        );
    }

    return (
        <>
            <button 
                onClick={() => window.open(`https://wa.me/+523841177360`)} 
                className="btn-contactanos"
            >
                <FaWhatsapp/>
            </button>

            <nav>
                <a href="#Bienvenido" className={activeSection === "Bienvenido" ? "active-link" : ""}>
                    <img src="images/logos/BSitesLogo00.webp" alt="Logo00" />
                </a>
                <a href="#Nosotros" className={activeSection === "Nosotros" ? "active-link" : ""}>Bienvenido</a>
                <a href="#NuestroServicio" className={activeSection === "NuestroServicio" ? "active-link" : ""}>Nuestro servicio</a>
                <a href="#Costos" className={activeSection === "Costos" ? "active-link" : ""}>Desarrollo web</a>
                <a href="#Politicas" className={activeSection === "Politicas" ? "active-link" : ""}>Políticas</a>
                <button onClick={() => setVisible(!formVisible)}>Contacto</button>
            </nav>
            
            <ContactForm />
        </>
    );
}

export default Navbar;
