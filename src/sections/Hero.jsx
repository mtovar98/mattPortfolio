import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { projects as baseProjects } from "../data/projectsData";

const GAP = 16;

const getCardSize = () => {
  const mobile = window.innerWidth < 1280;
  return {
    w: mobile ? window.innerWidth * 0.78 : 650,
    h: mobile ? window.innerHeight * 0.6 : 650,
  };
};

const mod = (n, m) => ((n % m) + m) % m;

function Hero() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const trackViewportRef = useRef(null);

  const [cardSize, setCardSize] = useState(getCardSize);
  const CARD_W = cardSize.w;
  const CARD_H = cardSize.h;

  const items = useMemo(() => {
    return [...baseProjects, ...baseProjects, ...baseProjects];
  }, []);

  const originalLen = baseProjects.length;

  const [centerIndex, setCenterIndex] = useState(originalLen);
  const [x, setX] = useState(0);
  const xRef = useRef(0);
  const animRef = useRef(null);

  const getCenteredX = (index) => {
    const viewport = trackViewportRef.current;
    if (!viewport) return 0;
    const vw = viewport.clientWidth;
    const centerOfCard = index * (CARD_W + GAP) + CARD_W / 2;
    return vw / 2 - centerOfCard;
  };

  const snapToIndex = (index, immediate = false) => {
    const normalized = index;
    const targetX = getCenteredX(normalized);

    if (animRef.current) animRef.current.stop();

    if (immediate) {
      xRef.current = targetX;
      setX(targetX);
      setCenterIndex(normalized);
      return;
    }

    animRef.current = animate(xRef.current, targetX, {
      type: "spring",
      stiffness: 220,
      damping: 28,
      onUpdate: (latest) => {
        xRef.current = latest;
        setX(latest);
      },
      onComplete: () => {
        xRef.current = targetX;
        setX(targetX);
        setCenterIndex(normalized);
      },
    });
  };

  useEffect(() => {
    snapToIndex(originalLen, true);

    const onResize = () => {
      const newSize = getCardSize();
      setCardSize(newSize);
      // pequeño delay para que el state de cardSize se aplique antes de recalcular X
      setTimeout(() => snapToIndex(centerIndex, true), 50);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const section = viewportRef.current;
    if (!section) return;

    const lock = () => {
      document.body.style.overflow = "hidden";
    };
    const unlock = () => {
      document.body.style.overflow = "auto";
    };

    section.addEventListener("mouseenter", lock);
    section.addEventListener("mouseleave", unlock);

    return () => {
      section.removeEventListener("mouseenter", lock);
      section.removeEventListener("mouseleave", unlock);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();

    const dir = e.deltaY > 0 ? 1 : -1;
    let next = centerIndex + dir;

    const minMid = originalLen;
    const maxMid = originalLen + originalLen - 1;

    if (next < minMid) {
      next = maxMid;
    } else if (next > maxMid) {
      next = minMid;
    }

    snapToIndex(next);
  };

  // Swipe touch para mobile
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 30) return; // umbral mínimo

    const dir = diff > 0 ? 1 : -1;
    let next = centerIndex + dir;

    const minMid = originalLen;
    const maxMid = originalLen + originalLen - 1;

    if (next < minMid) next = maxMid;
    else if (next > maxMid) next = minMid;

    snapToIndex(next);
    touchStartX.current = null;
  };

  const visibleRealIndex = mod(centerIndex, originalLen);

  return (
    <section
      id="home"
      ref={viewportRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen    bg-primary flex items-center"
    >
      <div className="w-full">
        <div
          ref={trackViewportRef}
          className="xl:overflow-hidden lg:overflow-hidden"
        >
          <motion.div ref={trackRef} className="flex" style={{ x }}>
            {items.map((project, index) => {
              const isCenter = index === centerIndex;

              return (
                <motion.a
                  key={`${project.id}-${index}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-cardColor text-primary overflow-hidden mt-[5vh] mb-[2vh]"
                  style={{
                    width: CARD_W,
                    height: CARD_H,
                    marginRight: GAP,
                  }}
                  animate={{
                    y: isCenter ? -20 : 40,
                    scale: 1,
                    opacity: isCenter ? 1 : 1,
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  {/* ─── DESKTOP ─── */}
                  <motion.div
                    className="hidden xl:flex h-full w-full flex-col justify-between p-8"
                    animate={{ y: isCenter ? -20 : -20 }}
                    transition={{ duration: 0.01, ease: "easeOut" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="uppercase font-tipoBold tracking-wider xl:text-[4vh] mt-6">
                        {project.title}
                      </h3>
                      <div className="flex items-start">
                        <p
                          className="text-[8px] leading-tight h-[35vh] w-24 uppercase font-tipoNormal pt-[1vh] mt-6"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                            maxWidth: "3vh",
                            maxHeight: "24vh",
                            display: "block",
                          }}
                        >
                          {project.description}
                        </p>
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-[25vh] h-[25vh] object-cover rounded-md mt-4"
                        />
                      </div>
                    </div>
                    <div className="h-[65%] flex items-start justify-start mt-6">
                      <h2 className="text-left uppercase font-tipoBold leading-none lg:text-8xl xl:text-[12vh] xl:max-w-[500px]">
                        {project.subtitle} <br /> {project.subtitle2}
                      </h2>
                    </div>
                    <div className="h-[65%] flex items-start justify-start">
                      <h3 className="text-left uppercase font-tipoBold leading-none lg:text-8xl xl:text-[4vh] xl:max-w-[500px]">
                        {project.subtitle3}
                      </h3>
                    </div>
                    <div className="w-full mt-4">
                      <div className="flex justify-between items-end font-tipoBold xl:text-[14vh] leading-none">
                        <span>{project.yearStart}</span>
                        <span>{project.yearEnd}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* ─── MOBILE ─── */}
                  <motion.div
                    className="flex xl:hidden w-full flex-col justify-between pr-6 pl-6"
                    animate={{ y: isCenter ? -20 : -20 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {/* Título + imagen */}
                    <div className="flex flex-col items-center justify-between ">
                      <h3 className="uppercase font-tipoBold tracking-wider text-[7vw] mt-12 text-center mb-4 leading-tight">
                        {project.title}
                      </h3>
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-[38vw] h-[38vw] object-cover rounded-md mt-4 shrink-0"
                      />
                    </div>

                    {/* Subtítulos */}
                    <div className="flex flex-col justify-start xs:mt-10">
                      <h2 className="uppercase font-tipoBold leading-none text-[11vw]">
                        {project.subtitle} <br /> {project.subtitle2}
                      </h2>
                      <h3 className="uppercase font-tipoBold leading-none text-[5vw] mt-2">
                        {project.subtitle3}
                      </h3>
                    </div>

                    {/* Años */}
                    <div className="w-full xs:mt-4">
                      <div className="flex justify-between items-end font-tipoBold text-[13vw] leading-none">
                        <span>{project.yearStart}</span>
                        <span>{project.yearEnd}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 xl:mt-[-15px] mt-2 z-10">
          {baseProjects.map((_, i) => {
            const active = i === visibleRealIndex;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Ir al proyecto ${i + 1}`}
                onClick={() => snapToIndex(originalLen + i)}
                className={`h-2.5 rounded-full transition-all ${
                  active ? "w-8 bg-[#e0ff59]" : "w-2.5 bg-[#c3cad0]/35"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
