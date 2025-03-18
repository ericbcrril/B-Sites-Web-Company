import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Vistas
import View404 from "./views/misc/404";
import LoadView from "./views/misc/load";
import Home from "./views/home";
import QuickView from "./views/quickView";

// Portafolio
const ElSabor = lazy(() => import("./portfolio/landing-page-restaurant"));
const Index = lazy(() => import("./portfolio/landing-page-/index"));
const Portfolio = lazy(() => import("./views/portfolio"));

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
};

function AnimatedRoutes({ isMexico }) {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadView />} >
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="*"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <View404 />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home isMexico={isMexico} />
            </motion.div>
          }
        />
        <Route
          path="/Inicio"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <QuickView />
            </motion.div>
          }
        />
        <Route
          path="/Portafolio"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Portfolio isMexico={isMexico} />
            </motion.div>
          }
        />

        {/*#region Portafolio*/}

        <Route
          path="/Portafolio/ElSabor"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ElSabor />
            </motion.div>
          }
          />
          
        <Route
          path="/Portafolio/Clinica"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Index />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
    </Suspense>
    
  );
}

function App() {
  const [isMexico, setIsMexico] = useState(true);

  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((response) => response.json())
      .then((data) => {
        setIsMexico(data.country_code === "MX");
      })
      .catch((error) => {
        console.error("Error detectando la ubicación:", error);
      });
  }, []);

  return (
    <Router>
      <AnimatedRoutes isMexico={isMexico} />
    </Router>
  );
}

export default App;
