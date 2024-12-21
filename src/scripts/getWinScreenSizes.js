import React, { useState, useEffect } from "react";

function ScreenSizes() {
    // Estado para la visibilidad y las dimensiones
    const [sizesVisible, setSizesVisible] = useState(false);
    const [screenSizes, setScreenSizes] = useState({
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    });

    // Listener para la tecla "S"
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "S") {
                setSizesVisible((prev) => !prev); // Alterna la visibilidad
            }
        };

        const handleResize = () => {
            setScreenSizes({
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
        };

        // Agregar listeners
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        // Limpieza al desmontar
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <p
            style={{
                display: sizesVisible ? "flex" : "none",
                position: "fixed",
                zIndex: 5,
                fontSize: "1.5vw",
                fontWeight: "bold",
                backgroundColor: "white",
                bottom: 0,
                padding: "10px",
                border: "1px solid black",
                width: "40vw",
            }}
        >
            Pantalla: {screenSizes.screenWidth}x{screenSizes.screenHeight}px
            &nbsp; Ventana: {screenSizes.windowWidth}x{screenSizes.windowHeight}px
        </p>
    );
}

export default ScreenSizes;
