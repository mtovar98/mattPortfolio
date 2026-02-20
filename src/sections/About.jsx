import { motion, } from "framer-motion";
import { Globe } from "lucide-react";


const AboutSection = () => {
  // const { scrollY } = useScroll();

  // Ajustamos el rango para que el efecto dure más
  // const leftImageY = useTransform(scrollY, [0, 1500], [-99, 80]);
  // const rightImageY = useTransform(scrollY, [0, 2000], [45, -70]);

  // // Aumentamos el efecto de escala para cubrir más área sin bordes vacíos
  // const scale = useTransform(scrollY, [0, 1500], [1.2, 1.5]);

  // const word = ("DEVELOPER - ")
  // const repeatCount = 20;
  // const words = new Array(repeatCount).fill(word).join(" ");

  const estudios = [
    { logo: "/images/logoSena.png", titulo: "Technologist in Software Analysis and Development"},
    { logo: "/images/logoUN.png", titulo: "Diploma in Programming Fundamentals"},
    { logo: "/images/logoDistri3.png", titulo: "Diploma in Full Stack Development"},
    { logo: "/images/logoDistri3.png", titulo: "Diploma in JavaScript Programming Language"},
    { logo: "/images/logo_libre.png", titulo: "Degree in Environmental Engineering"},
    
  ];

  return (
    <section id="about" className="font-robotoMono min-h-screen items-center flex bg-[#101010]">
      {/* Sección Sobre mí centrada */}
      <div className="w-full xl:mt-20 xs:mt-2 items-center justify-center">
        <motion.h2 
          className="xl:text-[25px] lg:text-[25px] sm:text-[20px] xs:text-[16px] text-[#c3cad0] text-center w-full xl:px-60 sm:px-20 xs:px-10 py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
            ABOUT ME - I'M <span className="text-[#b4f532]">MATT</span>, A SOFTRWARE DEVELOPER WITH A BACKGROUND IN ANALYSIS AND SOFTWARE DEVELOPMENT, SPECIALIZING IN WEB DEVELOPMENT 
        </motion.h2>

        <div className="relative flex justify-center items-center xl:w-[120vh] xl:h-[60vh] xs:w-[90%] xs:h-[25vh] mx-auto overflow-hidden">
            {/* Contenedor del video */}
            <div className="absolute inset-0 flex justify-center items-center ">
              <motion.video
                className="max-h-full w-full object-cover"
                src="/videos/animacion.mp4"
                autoPlay
                loop
                muted
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              />
            </div>

            {/* Degradados en los bordes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#101010] to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-[#101010] to-transparent"></div>
              <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-[#101010] to-transparent"></div>
              <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#101010] to-transparent"></div>
            </div>
          </div>

        <div className="flex text-center items-center justify-center w-full xl:py-8 xs:py-4 sm:py-4 text-[#c3cad0]">
            <div className="xl:w-[50%] sm:w-[80%] xs:w-[70%] xs:text-[10px] xl:text-[15px] xs:px-30 xl:px-0 text-justify ">
              <motion.p 
                className="text-justify text-align-last-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
              I am a Software Development Technologist and Environmental Engineer with a strong focus on programming and web development.
              I’ve worked on various web projects including landing pages, portfolios, and custom websites, implementing solutions with technologies such as WordPress and Shopify.
              </motion.p>
              <motion.div 
                className=" py-10 text-justify text-align-last-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <h2 className="mb-2">PROGRAMMING LANGUAGES</h2>
                <div className="display-flex flex gap-[10px] text-center items-center justify-center mb-3"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="xl:w-8 xs:w-6"/> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="xl:w-8  xs:w-6"/> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="xl:w-8 xs:w-6"/> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="xl:w-8 xs:w-6"/>
                </div>
                <div className="w-full flex justify-center mb-4">
                  <hr className="w-2/3 border-t border-white opacity-60" />
                </div>

                <h2 className="mb-2">FRAMEWORKS AND LIBRARIES</h2>
                <div className="display-flex flex gap-[10px] text-center items-center justify-center mb-3"> 
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="xl:w-8 xs:w-6"/> 
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="xl:w-8 xs:w-6"/> 
                </div>
                 <div className="w-full flex justify-center mb-4">
                  <hr className="w-2/3 border-t border-white opacity-60" />
                </div>
                
                <h2 className="mb-2">DATABASES AND DEVELOPMENT TOOLS</h2>
                <div className="display-flex flex gap-[10px] text-center items-center justify-center mb-3"> 
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="xl:w-8 xs:w-6" /> 
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="xl:w-8 xs:w-6" />
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="xl:w-8 xs:w-6" /> 
                   <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/White/Github_white.svg" alt="GitHub" className="xl:w-8 xs:w-6" />
                </div>
                 <div className="w-full flex justify-center mb-4">
                  <hr className="w-2/3 border-t border-white opacity-60" />
                </div>
              
              </motion.div>
              <motion.p 
                className="text-justify text-align-last-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >         
                  My profile combines strong technical skills with a strategic mindset for developing innovative technological solutions, always focused on meeting user needs and enhancing the overall digital experience.
                  In my portfolio, you will find projects that showcase my focus on developing 
                  well-structured and dynamic applications.
              </motion.p>
            </div>
        </div>


        <div className=" relative flex flex-wrap justify-center items-center gap-4 py-6">

          <div className="absolute xl:w-[980px] xl:h-[400px] border-1 opacity-60 border-transparent pointer-events-none sm:w-[80%] xs:h-[90%] xs:w-[80%]">
            {/* Esquinas del marco */}
            <div className="absolute top-0 left-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-b-2 border-r-2 border-[#c3cad0]"></div>
            <div className="absolute top-0 right-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-b-2 border-l-2 border-[#c3cad0]"></div>
            <div className="absolute bottom-0 left-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-t-2 border-r-2 border-[#c3cad0]"></div>
            <div className="absolute bottom-0 right-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-t-2 border-l-2 border-[#c3cad0]"></div>
          </div>

          {/* Imágenes dentro del marco */}
            <div className="flex flex-wrap xl:gap-4 sm:gap-2 xs:gap-2 p-8 relative justify-center">
              
              <motion.img 
                src="/images/imgDr.jpeg" 
                alt="Imagen izquierda" 
                className="xl:w-[450px] sm:-[300px] xs:w-[250px] h-auto" 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              />
              
              <motion.img 
                src="/images/imgDere.jpg" 
                alt="Imagen derecha" 
                className="xl:w-[450px] sm:-[300px] xs:w-[250px]  h-auto" 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              />
            </div> 
        </div>



        <div className="w-full px-10 ">
        <motion.h2 
          className="xl:text-[25px] sm:text-[20px] xs:text-[18px] text-[#c3cad0] text-center w-full xl:px-20 sm:px-10 xs:px-10 xl:py-8 sm:y-4 xs:y-4 mb-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          UNIVERSITY DEGREES <span className="text-[#b4f532]">AND</span> CERTIFICATIONS 
        </motion.h2>
        </div>

        <motion.div className="flex flex-col items-center text-[#c3cad0] mx-0 xs:mx-4 w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
            {estudios.map((estudio, index) => (
              <div key={index} className="xl:w-3/4 flex flex-col items-center xl:py-3 xs:py-4 sm:w-[90%] xs:w-[95%]">
                <div className="grid xl:w-2/3 xl:grid-cols-[14rem_auto] sm:grid-cols-[10.5rem_auto] ms:grid-cols-[9.5rem_auto] xs:grid-cols-[8.5rem_auto] items-center xl:gap-16 sm:gap-8 xs:gap-6">
                  <div className="flex justify-center items-center h-14">
                    <img src={estudio.logo} alt="Logo" className="h-full xl:max-w-[28vh] xs:max-w-[20vh] sm:max-w-[18vh] object-contain" />
                  </div>
                  <div className="h-16 flex items-center">
                    <span className="xl:text-[13px] sm:text-[10px] xs:text-[11px] text-left">{estudio.titulo}</span>
                  </div>
                </div>

                {index < estudios.length  && (
                  <div className="xl:w-2/3 sm:w-[90%] xs:w-[90%] xl:mr-10 xs:mr-8 mt-3">
                    <hr className="border-t-2 border-white opacity-60" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>


              <div className="overflow-hidden bg-[#101010] xl:py-20 sm:py-14 xs:py-12 w-full">
                <motion.div
                    className="flex whitespace-nowrap text-[#b4f532] text-[20px]"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  >
                    <div className="flex items-center gap-6">
                      {[...Array(100)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6">
                          <span>PORTFOLIO</span>
                          <Globe className="w-5 h-5 text-[#b4f532]"></Globe>
                        </div>
                      ))}
                    </div>
                </motion.div>
              </div>
      </div>
     
    </section>
  );
};

export default AboutSection;
