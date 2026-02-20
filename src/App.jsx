import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import AboutMeSection from "./sections/AboutMe";
// import About from "./sections/About";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Foot from "./sections/Foot";
import { Toaster } from "react-hot-toast";
import Cursor from "./components/Cursor";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AnimatePresence>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <motion.div
          className="font-robotoMono bg-primary text-textPrimary overflow-x-hidden w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Cursor />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
              style: {
                background: "#101010",
                color: "#c2cad0",
                border: "1px solid #b4f532",
                padding: "12px 20px",
                fontSize: "14px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(180, 245, 50, 0.4)",
              },
              success: {
                iconTheme: {
                  primary: "#b4f532",
                  secondary: "#101010",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ff4d4f",
                  secondary: "#101010",
                },
              },
            }}
          />

          {/* ESTRUCTURA PRINCIPAL */}
          <Header />
          <Hero />
          <AboutMeSection />
          {/* <About /> */}
          <Projects />
          <Certifications />
          <Contact />
          <Foot />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
