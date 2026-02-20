import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (!menuOpen) {
        const currentScrollY = window.scrollY;

        // --- NUEVA LÓGICA ---
        // Si el scroll es menor a 100px (estamos en el Hero), forzamos visible
        if (currentScrollY < 700) {
          setIsVisible(true);
        } else {
          // Si estamos más abajo, aplicamos la lógica de ocultar al bajar y mostrar al subir
          setIsVisible(currentScrollY < lastScrollY.current);
        }

        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);
  // useEffect(() => {
  //   lastScrollY.current = window.scrollY;

  //   const handleScroll = () => {
  //     if (!menuOpen) {
  //       const currentScrollY = window.scrollY;
  //       setIsVisible(currentScrollY < lastScrollY.current);
  //       lastScrollY.current = currentScrollY;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Bloquea el scroll cuando el menú está abierto
    } else {
      document.body.style.overflow = "auto"; // Restaura el scroll cuando el menú se cierra
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed xs:w-full text-textPrimary xl:py-2 lg:py-2 md:py-0 sm:py-0 sx:py-2 z-50  transition-transform duration-300  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${menuOpen ? "bg-primary" : "bg-transparent lg:bg-transparent"}`}
    >
      <motion.div
        id="navbar"
        className="container mx-auto xs:mt-2 xs:w-[53vh] ms:w-[44vh] sm:w-[44vh] xl:w-full lg:w-full flex justify-between items-center xs:px-0 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        {/* Logo + Info en pantallas grandes */}
        <div className="flex items-center xl:space-x-14 xl:ml-6 xl:mt-4 xs:space-x-2 xs:ml-2 xs:mt-1">
          {/* Logo */}
          <img
            onClick={() => {
              const section = document.getElementById("home");
              section?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            alt="Logo"
            src={logo}
            className="xl:w-28 xl:h-12 xs:w-18 xs:h-8 cursor-pointer xl:mb-[30px]"
          />
        </div>

        {/* Bloque derecho en pantallas grandes */}
        <div className="hidden lg:flex flex-col items-start mr-6">
          <p className="font-robotoMono text-[18px] text-textPrimary">
            Hello, I'm MATT
          </p>

          <div className="underline font-robotoMono text-textSecondary text-[10px]">
            <p>AVAILABLE FOR PROJECTS</p>
            <p>MATTDEV9898@GMAIL.COM</p>
            <p>+57 312 5687025</p>
          </div>
        </div>

        {/* Botón menú hamburguesa (abre y cierra) en pantallas pequeñas */}
        <div className="lg:hidden p-2 z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX size={20} className="text-textPrimary" />
            ) : (
              <FiMenu size={30} className="text-textPrimary" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Menú hamburguesa en pantallas pequeñas */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary xs:min-h-screen w-full bg-opacity-90 flex flex-col items-start px-6 py-8   overflow-hidden">
          {/* Botón de cierre (el mismo botón de menú ahora convertido en "X") */}

          {/* Contenido del Menú */}
          <div className="mt-6 text-textPrimary text-[14px]">
            <p>Hello, I'm MATT</p>
          </div>

          <div className="mt-4 text-textSecondary text-[10px]">
            <p>AVAILABLE FOR FREELANCE</p>
            <p>MATTDEV9898@GMAIL.COM</p>
            <p>+57 312 5687025</p>
          </div>

          {/* Links del Menú */}
          <nav className="mt-4 w-full">
            <ul className="space-y-2 underline text-textPrimary text-[10px]">
              <li
                onClick={() => {
                  const section = document.getElementById("home");
                  section?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  const section = document.getElementById("about");
                  section?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                About Me
              </li>
              <li
                onClick={() => {
                  const section = document.getElementById("projects");
                  section?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  const section = document.getElementById("certifications");
                  section?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                Certifications
              </li>
              <li
                onClick={() => {
                  const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                Contact
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
