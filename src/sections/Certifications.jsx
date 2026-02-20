import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const Certifications = () => {
  const estudios = [
    {
      logo: "/images/logoSena.png",
      titulo: "Technologist in Software Analysis and Development",
    },
    {
      logo: "/images/logoUN.png",
      titulo: "Diploma in Programming Fundamentals",
    },
    {
      logo: "/images/logoDistri3.png",
      titulo: "Diploma in Full Stack Development",
    },
    {
      logo: "/images/logoDistri3.png",
      titulo: "Diploma in JavaScript Programming Language",
    },
    {
      logo: "/images/logo_libre.png",
      titulo: "Degree in Environmental Engineering",
    },
  ];

  return (
    <section
      id="certifications"
      className="font-robotoMono xl:min-h-screen xs:h-[100vh] ms:h-[90vh] ms:pb-[14vh] items-center flex bg-primary"
    >
      {/* Sección Sobre mí centrada */}
      <div className="w-full xl:mt-[20vh] xs:mt-[18vh] items-center justify-center">
        <div className="w-full px-10 ">
          <motion.h2
            className="xl:text-[25px] sm:text-[20px] xs:text-[18px] text-[#c3cad0] text-center w-full xl:px-20 sm:px-10 xs:px-10 xl:py-8 ms:y0 xs:y-4 mb-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            UNIVERSITY DEGREES <span className="text-textPrimary">AND</span>{" "}
            CERTIFICATIONS
          </motion.h2>
        </div>

        <motion.div
          className="flex flex-col items-center text-[#c3cad0] mx-0 xs:mx-4 w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {estudios.map((estudio, index) => (
            <div
              key={index}
              className="xl:w-3/4 flex flex-col items-center xl:py-3 xs:py-4 sm:w-[90%] xs:w-[90%]"
            >
              <div className="grid xl:w-2/3 xl:grid-cols-[14rem_auto] sm:grid-cols-[10.5rem_auto] ms:grid-cols-[9.5rem_auto] xs:grid-cols-[8.5rem_auto] items-center xl:gap-16 sm:gap-8 xs:gap-6">
                <div className="flex justify-center items-center h-14">
                  <img
                    src={estudio.logo}
                    alt="Logo"
                    className="h-full xl:max-w-[28vh] xs:max-w-[18vh] sm:max-w-[18vh] object-contain"
                  />
                </div>
                <div className="h-16 flex items-center">
                  <span className="xl:text-[13px] sm:text-[10px] xs:text-[10px] text-left">
                    {estudio.titulo}
                  </span>
                </div>
              </div>

              {index < estudios.length && (
                <div className="xl:w-2/3 sm:w-[90%] xs:w-[90%] xl:mr-10 xs:mr-8 mt-3">
                  <hr className="border-t-2 border-white opacity-60" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <div className="overflow-hidden bg-primary xl:py-20 xl:mt-6 sm:pt-16 sm:py-0 xs:py-12 w-full">
          <motion.div
            className="flex whitespace-nowrap text-textPrimary text-[20px]"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <div className="flex items-center gap-6">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span>PORTFOLIO</span>
                  <Globe className="w-5 h-5 text-textPrimary"></Globe>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
