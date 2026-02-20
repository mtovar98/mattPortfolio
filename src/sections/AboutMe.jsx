import { motion } from "framer-motion";
import computer from "../assets/img/computer.png";
import angular from "../assets/img/angular.png";
import css from "../assets/img/css.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import html from "../assets/img/html.png";
import java from "../assets/img/java.png";
import javascript from "../assets/img/javascript.png";
import mongo from "../assets/img/mongo.png";
import react from "../assets/img/react.png";
import spring from "../assets/img/spring.png";
import laravel from "../assets/img/laravel.png";
import php from "../assets/img/php.png";
import sql from "../assets/img/sql.png";
import { useState, useEffect, useRef } from "react";

const AboutMeSection = () => {
  // 1. Estado para detectar si es mobile
  const [isMobile, setIsMobile] = useState(false);
  const mobileCarouselRef = useRef(null);
  const middleCardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280); // xl en tu tailwind config es 1280px
    };
    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileCarouselRef.current && middleCardRef.current) {
      const container = mobileCarouselRef.current;
      const card = middleCardRef.current;

      const scrollLeft =
        card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "instant",
      });
    }
  }, []);

  return (
    <section id="about" className=" min-h-screen items-center flex bg-primary">
      {/* Sección Sobre mí centrada */}
      <div className="w-full xl:mt-20 xs:mt-2 items-center justify-center">
        <motion.h2
          className="ms:mb-[5vh] xl:mb-0 font-tipoNormal xl:text-[25px] lg:text-[25px] sm:text-[20px] ms:text-[20px] ms:text-[16px] text-textSecondary text-center w-full xl:px-[27vw] sm:px-2 xs:px-2 xl:pt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          ABOUT ME - I'M <span className="text-textPrimary">MATT</span>, A
          SOFTRWARE DEVELOPER WITH A BACKGROUND IN ANALYSIS AND SOFTWARE
          DEVELOPMENT, SPECIALIZING IN WEB DEVELOPMENT
        </motion.h2>

        <div className="relative flex justify-center items-center xl:w-full xl:h-[90vh] xs:w-[90%] ms:h-[70vh] xs:h-[70vh] mx-auto overflow-hidden">
          {/* Layout: imagen izquierda + texto derecha */}
          <div className="xl:absolute inset-0 flex flex-col xl:flex-row justify-center items-center">
            {/* Contenedor Imagen: Ocupa más de la mitad para que sea "muy grande" */}
            <div className="w-full xl:w-[60%] h-full xl:mt-0 xs:mt-0 ms:mt-40 flex justify-center items-center">
              <motion.img
                /* Usamos w-[100%] o un valor alto de vw para que sea realmente grande */
                className="w-full max-w-[900px] xl:max-w-none xl:w-[55vw] h-auto object-contain z-10"
                src={computer}
                alt="About Me"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: isMobile ? 0 : "8vw" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>

            {/* Contenedor Texto: A la derecha */}
            <div className="w-full xl:w-[40%] xl:mr-20 flex justify-center items-center xl:px-20 xl:pr-[0vw] z-20 xl:mb-[8vw]">
              <motion.p
                className="text-[#c3cad0] font-tipoNormal xl:text-[13px] ms:mt-10 xl:mt-40 ms:mb-40 xs:text-[12px] text-justify leading-relaxed max-w-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: isMobile ? 0 : "-12vh" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Software Analysis and Development Technologist and Environmental
                Engineer, with a strong focus on programming and web
                development. I have 2 years of experience building scalable
                digital solutions, ranging from microservices architectures for
                marketplaces to monolithic administrative management systems.
                <br />
                <br />
                Specialized in Backend development using PHP 8.x and Laravel 12,
                with the ability to integrate modern frontends built with React
                and Angular. I bring a strategic and analytical mindset to
                database management (MySQL, MongoDB), Docker-based deployments,
                and performance optimization.
                <br />
                <br />
                Additionally, I have experience implementing websites using
                WordPress and Shopify, with a strong emphasis on accessibility
                and user experience.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex text-center items-center justify-center w-full sm:py-4 ms:py-5 text-[#c3cad0]">
          <div className="xl:w-[75%] sm:w-[90%] ms:w-[90%] xs:w-[90%] xs:h-[85vh] ms:h-[70vh] xl:h-[60vh] xl:px-0 text-justify">
            {/* 3 Cards */}
            <motion.div
              className="flex w-full flex-col xl:flex-row gap-4 justify-center items-stretch mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              {/* Desktop: igual que antes */}
              <div className="hidden xl:flex flex-row gap-4 justify-center items-stretch w-full">
                {/* Card 1 */}
                <div className="flex-1 bg-cardColor xl:h-[29vw] xl:w-[15vw] p-4 flex flex-col items-center justify-between gap-4">
                  <div className="flex gap-2 flex-wrap justify-center items-center">
                    <img src={html} alt="html" className="xl:w-12" />
                    <img src={css} alt="css" className="xl:w-12" />
                    <img
                      src={javascript}
                      alt="javascript"
                      className="xl:w-12"
                    />
                    <img src={java} alt="java" className="xl:w-8 xl:ml-2" />
                    <img src={php} alt="php" className="xl:w-16" />
                  </div>
                  <h2 className="text-[10px] font-tipoNormal text-primary xl:text-[24px] pb-4 tracking-widest text-start">
                    PROGRAMMING LANGUAGES
                  </h2>
                </div>

                {/* Card 2 */}
                <div className="flex-1 bg-cardColor p-4 flex flex-col items-center justify-between gap-4">
                  <div className="flex gap-3 flex-wrap justify-center items-center">
                    <img src={angular} alt="angular" className="xl:w-12" />
                    <img src={react} alt="react" className="xl:w-12" />
                    <img src={spring} alt="spring" className="xl:w-20" />
                    <img src={laravel} alt="laravel" className="xl:w-20" />
                  </div>
                  <h2 className="text-[10px] font-tipoNormal text-primary xl:text-[24px] pb-4 tracking-widest text-start">
                    FRAMEWORKS & LIBRARIES
                  </h2>
                </div>

                {/* Card 3 */}
                <div className="flex-1 bg-cardColor p-4 flex flex-col items-center justify-between gap-4">
                  <div className="flex gap-3 flex-wrap justify-center items-center">
                    <img src={sql} alt="sql" className="xl:w-12" />
                    <img src={mongo} alt="mongo" className="xl:w-6" />
                    <img src={git} alt="git" className="xl:w-12" />
                    <img src={github} alt="github" className="xl:w-12" />
                  </div>
                  <h2 className="text-[10px] font-tipoNormal text-primary xl:text-[24px] pb-4 tracking-widest text-start">
                    DATABASES & DEV TOOLS
                  </h2>
                </div>
              </div>

              {/* Mobile: carrusel con scroll horizontal */}
              <div
                ref={mobileCarouselRef}
                className="xl:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-10 pt-6 scrollbar-hide"
              >
                {/* Card 1 */}
                <div className="snap-center shrink-0 xs:w-[75vw]  bg-cardColor p-4 flex flex-col items-center justify-between gap-4 min-h-[100vw]">
                  <div className="flex gap-3 flex-wrap justify-center items-center pt-2">
                    <img src={html} alt="html" className="w-10" />
                    <img src={css} alt="css" className="w-10" />
                    <img src={javascript} alt="javascript" className="w-10" />
                    <img src={java} alt="java" className="w-6" />
                    <img src={php} alt="php" className="w-12" />
                  </div>
                  <h2 className="text-[20px] font-tipoNormal text-primary tracking-widest text-center pb-2">
                    PROGRAMMING LANGUAGES
                  </h2>
                </div>

                {/* Card 2 */}
                <div
                  ref={middleCardRef}
                  className="snap-center shrink-0 w-[75vw] bg-cardColor p-4 flex flex-col items-center justify-between gap-4 min-h-[40vw]"
                >
                  <div className="flex gap-3 flex-wrap justify-center items-center pt-2">
                    <img src={angular} alt="angular" className="w-10" />
                    <img src={react} alt="react" className="w-10" />
                    <img src={spring} alt="spring" className="w-16" />
                    <img src={laravel} alt="laravel" className="w-16" />
                  </div>
                  <h2 className="text-[20px] font-tipoNormal text-primary tracking-widest text-center pb-2">
                    FRAMEWORKS & LIBRARIES
                  </h2>
                </div>

                {/* Card 3 */}
                <div className="snap-center shrink-0 w-[75vw] bg-cardColor p-4 flex flex-col items-center justify-between gap-4 min-h-[40vw]">
                  <div className="flex gap-3 flex-wrap justify-center items-center pt-2">
                    <img src={sql} alt="sql" className="w-10" />
                    <img src={mongo} alt="mongo" className="w-6" />
                    <img src={git} alt="git" className="w-10" />
                    <img src={github} alt="github" className="w-10" />
                  </div>
                  <h2 className="text-[20px] font-tipoNormal text-primary tracking-widest text-center pb-2">
                    DATABASES & DEV TOOLS
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Párrafo final */}
            <motion.p
              className="text-justify text-align-last-center xs:text-[12px] font-tipoNormal xl:text-[13px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              My profile combines strong technical skills with a strategic
              mindset for developing innovative technological solutions, always
              focused on meeting user needs and enhancing the overall digital
              experience. In my portfolio, you will find projects that showcase
              my focus on developing well-structured and dynamic applications.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
