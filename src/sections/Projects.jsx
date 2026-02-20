import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PopupProyecto1 from "../components/PopupColo";
import PopupProyecto2 from "../components/PopupGermania";
import PopupProyecto3 from "../components/PopupSinners";
import PopupProyecto4 from "../components/PopupSoderia";
import imgColo from "../assets/img/colo.png";
import imgGermania from "../assets/img/germania.png";
import imgSoderia from "../assets/img/laSoderia.png";
import imgSinners from "../assets/img/Sinners.png";

// function Projects() {
//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//   const [modal1Visible, setModal1Visible] = useState(false);
//   const [modal2Visible, setModal2Visible] = useState(false);

//   const baseProjects = useMemo(
//     () => [
//       { id: 1, image: imgColo, link: "proyecto1" },
//       { id: 2, image: imgGermania, link: "proyecto2" },
//       { id: 3, image: imgSoderia, link: "proyecto3" },
//       { id: 4, image: imgSinners, link: "proyecto4" },
//     ],
//     [],
//   );

//   // duplicamos para "infinito"
//   const loopProjects = useMemo(
//     () => [...baseProjects, ...baseProjects, ...baseProjects],
//     [baseProjects],
//   );

//   // refs y animación
//   const viewportRef = useRef(null);
//   const trackRef = useRef(null);
//   const rafRef = useRef(null);
//   const lastTsRef = useRef(0);
//   const baseWidthRef = useRef(0); // Guardamos el ancho en una ref

//   // velocidad (px/seg). Ajusta si lo quieres más lento/rápido.
//   const SPEED = isMobile ? 18 : 26;

//   useEffect(() => {
//     const viewport = viewportRef.current;
//     const track = trackRef.current;
//     if (!viewport || !track) return;

//     // 1. Función de actualización con "seguro"
//     const updateWidth = () => {
//       if (!track) return;
//       const totalWidth = track.scrollWidth;
//       const newBaseWidth = totalWidth / 3;

//       if (newBaseWidth > 0) {
//         baseWidthRef.current = newBaseWidth;
//         // Si el scroll se desfasó por el cambio de pantalla, reubicar al bloque medio
//         if (
//           viewport.scrollLeft >= newBaseWidth * 2 ||
//           viewport.scrollLeft <= 5
//         ) {
//           viewport.scrollLeft = newBaseWidth;
//         }
//       }
//     };

//     // 2. Ejecutar al inicio y tras un breve delay por si las imágenes cargan lento
//     updateWidth();
//     const timeoutId = setTimeout(updateWidth, 500);

//     // 3. Observer para cambios en el track
//     const resizeObserver = new ResizeObserver(() => {
//       updateWidth();
//     });
//     resizeObserver.observe(track);

//     // 4. Listener para el cambio de ventana (el culpable del bug en 2da pantalla)
//     window.addEventListener("resize", updateWidth);

//     const tick = (ts) => {
//       if (!lastTsRef.current) lastTsRef.current = ts;
//       const dt = (ts - lastTsRef.current) / 1000;
//       lastTsRef.current = ts;

//       // Solo movemos si tenemos un ancho válido
//       if (baseWidthRef.current > 0) {
//         viewport.scrollLeft += SPEED * dt;

//         // Reset infinito
//         if (viewport.scrollLeft >= baseWidthRef.current * 2) {
//           viewport.scrollLeft -= baseWidthRef.current;
//         }
//       }

//       rafRef.current = requestAnimationFrame(tick);
//     };

//     rafRef.current = requestAnimationFrame(tick);

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       resizeObserver.disconnect();
//       window.removeEventListener("resize", updateWidth);
//       clearTimeout(timeoutId);
//       lastTsRef.current = 0;
//     };
//   }, [SPEED, isMobile]);

//   // useEffect(() => {
//   //   const viewport = viewportRef.current;
//   //   const track = trackRef.current;
//   //   if (!viewport || !track) return;

//   //   // arrancamos en el “bloque del medio”
//   //   const baseWidth = track.scrollWidth / 3;
//   //   viewport.scrollLeft = baseWidth;

//   //   const tick = (ts) => {
//   //     if (!lastTsRef.current) lastTsRef.current = ts;
//   //     const dt = (ts - lastTsRef.current) / 1000; // seconds
//   //     lastTsRef.current = ts;

//   //     viewport.scrollLeft += SPEED * dt;

//   //     // cuando se sale del bloque medio, lo regresamos (sin salto visible)
//   //     if (viewport.scrollLeft >= baseWidth * 2) {
//   //       viewport.scrollLeft -= baseWidth;
//   //     } else if (viewport.scrollLeft <= 0) {
//   //       viewport.scrollLeft += baseWidth;
//   //     }

//   //     rafRef.current = requestAnimationFrame(tick);
//   //   };

//   //   rafRef.current = requestAnimationFrame(tick);

//   //   return () => {
//   //     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//   //     rafRef.current = null;
//   //     lastTsRef.current = 0;
//   //   };
//   // }, [SPEED]);

//   // bloquear scroll cuando hay popup
//   useEffect(() => {
//     const html = document.documentElement;
//     const body = document.body;

//     const shouldBlockScroll = modal1Visible || modal2Visible;

//     if (shouldBlockScroll) {
//       html.style.overflow = "hidden";
//       body.style.overflow = "hidden";
//     } else {
//       html.style.overflow = "auto";
//       body.style.overflow = "auto";
//     }

//     return () => {
//       html.style.overflow = "auto";
//       body.style.overflow = "auto";
//     };
//   }, [modal1Visible, modal2Visible]);

//   const handleProjectClick = (projectId) => {
//     if (projectId === 1) setModal1Visible(true);
//     if (projectId === 2) setModal2Visible(true);
//   };

//   return (
//     <section
//       id="projects"
//       className="xl:min-h-screen xs:h-[78vh] xl:mt-[10vh] w-full flex flex-col items-center bg-primary font-tipoNormal overflow-hidden sm:py-4"
//     >
//       <div className="w-full">
//         <h2 className="xl:text-[25px] sm:text-[20px] xs:text-[18px] xs:mt-10 text-textSecondary text-center w-full tracking-widest">
//           PROJECTS
//         </h2>
//       </div>

//       {/* VIEWPORT del carrusel (desktop y mobile) */}
//       <div
//         ref={viewportRef}
//         className={
//           !isMobile
//             ? "relative xl:mt-[6vh] w-full xl:h-[550px] lg:h-[400px] overflow-hidden flex items-center"
//             : "relative flex mt-8 h-[95vh] xs:mt-0 sm:h-[70vh] ms:h-[80vh] py-14 xs:py-0 sm:py-16 ms:py-0 overflow-hidden"
//           // ? "relative xl:mt-[6vh] w-full xl:scale-100 xl:h-[550px] lg:h-[400px] overflow-hidden flex items-center"
//           // : "relative flex mt-8 h-[95vh] xs:mt-0 sm:h-[70vh] ms:h-[80vh] py-14 xs:py-0 sm:py-16 ms:py-0 overflow-hidden"
//         }
//       >
//         {/* TRACK infinito */}
//         <div
//           ref={trackRef}
//           className={
//             !isMobile
//               ? "flex items-center gap-4 will-change-transform" // Quitamos absolute inset-0 para que el ancho sea real
//               : "flex items-center gap-4 px-16 sm:px-20 ms:px-20 will-change-transform"
//             // ? "absolute inset-0 flex items-center gap-4 will-change-transform"
//             // : "flex items-center gap-4 px-16 sm:px-20 ms:px-20 will-change-transform"
//           }
//           // en desktop, el click es sobre la imagen igualmente
//         >
//           {loopProjects.map((project, idx) => (
//             <button
//               key={`${project.id}-${idx}`}
//               type="button"
//               onClick={() => handleProjectClick(project.id)}
//               className="shrink-0 cursor-pointer bg-transparent border-0 p-0"
//               aria-label={`Open project ${project.id}`}
//             >
//               {!isMobile ? (
//                 <img
//                   src={project.image}
//                   alt={`Proyecto ${project.id}`}
//                   className="w-[45vh] h-[70vh] object-cover shadow-lg rounded-xl "
//                   draggable={false}
//                 />
//               ) : (
//                 <img
//                   src={project.image}
//                   alt={`Proyecto ${project.id}`}
//                   className="xs:w-[290px] sm:w-[280px] ms:w-[300px]
//                              h-[440px] sm:h-[500px] ms:h-[490px]
//                              object-cover rounded-xl"
//                   draggable={false}
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Popups individuales */}
//       {modal1Visible && (
//         <PopupProyecto1 onClose={() => setModal1Visible(false)} />
//       )}
//       {modal2Visible && (
//         <PopupProyecto2 onClose={() => setModal2Visible(false)} />
//       )}
//     </section>
//   );
// }

function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);

  const baseProjects = useMemo(
    () => [
      { id: 1, image: imgColo, link: "proyecto1" },
      { id: 2, image: imgGermania, link: "proyecto2" },
      { id: 3, image: imgSinners, link: "proyecto3" },
      { id: 4, image: imgSoderia, link: "proyecto4" },
    ],
    [],
  );

  const loopProjects = useMemo(
    () => [...baseProjects, ...baseProjects, ...baseProjects],
    [baseProjects],
  );

  const trackRef = useRef(null);
  const xRef = useRef(0); // Usaremos una referencia para la posición X
  const rafRef = useRef(null);

  const SPEED = isMobile ? 0.5 : 0.5; // Velocidad ajustada para transform

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      // Calculamos el ancho de UN bloque (baseProjects)
      // Lo hacemos dentro del frame para que sea sensible al cambio de pantalla
      const totalWidth = track.scrollWidth;
      const blockWidth = totalWidth / 3;

      if (blockWidth > 0) {
        xRef.current -= SPEED;

        // Si ya recorrimos un bloque entero, reseteamos a 0 sin que se note
        if (Math.abs(xRef.current) >= blockWidth) {
          xRef.current = 0;
        }

        track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [SPEED, isMobile]);

  const handleProjectClick = (projectId) => {
    if (projectId === 1) setModal1Visible(true);
    if (projectId === 2) setModal2Visible(true);
    if (projectId === 3) setModal3Visible(true);
    if (projectId === 4) setModal4Visible(true);
  };

  return (
    <section
      id="projects"
      className="xl:min-h-screen xs:h-[68vh] ms:h-[75vh] sm:h-[65vh] xl:mt-[10vh] w-full flex flex-col items-center bg-primary overflow-hidden"
    >
      <div className="w-full">
        <h2 className="xl:text-[25px] sm:text-[20px] xs:text-[18px] xs:mt-16 sm:mt-8 ms:mt-10 xl:mt-8 text-textSecondary text-center w-full tracking-widest uppercase">
          Projects
        </h2>
      </div>

      <div className="relative mt-8 xl:mt-[6vh] w-full xl:h-[550px] overflow-hidden flex items-center">
        {/* Usamos translate3d para aceleración por hardware */}
        <div
          ref={trackRef}
          className="flex items-center gap-4 will-change-transform"
          style={{ display: "flex" }}
        >
          {loopProjects.map((project, idx) => (
            <button
              key={`${project.id}-${idx}`}
              type="button"
              onClick={() => handleProjectClick(project.id)}
              className="shrink-0 cursor-pointer bg-transparent border-0 p-0"
            >
              <img
                src={project.image}
                alt={`Proyecto ${project.id}`}
                className={
                  !isMobile
                    ? "w-[45vh] h-[70vh] object-cover shadow-lg rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                    : "w-[290px] h-[480px] object-cover rounded-xl shadow-lg"
                }
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Popups... */}
      {modal1Visible && (
        <PopupProyecto1 onClose={() => setModal1Visible(false)} />
      )}
      {modal2Visible && (
        <PopupProyecto2 onClose={() => setModal2Visible(false)} />
      )}
      {modal3Visible && (
        <PopupProyecto3 onClose={() => setModal3Visible(false)} />
      )}
      {modal4Visible && (
        <PopupProyecto4 onClose={() => setModal4Visible(false)} />
      )}
    </section>
  );
}

export default Projects;
