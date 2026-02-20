import React, { useEffect } from "react";
import SinnersPrinci from "../assets/img/sinnersPrinci.png";
import SinnersLogo from "../assets/img/sinnersLogo.png";

const PopupProyecto3 = ({ onClose }) => {
  useEffect(() => {
    const originalOverflowHtml = document.documentElement.style.overflow;
    const originalOverflowBody = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = originalOverflowHtml;
      document.body.style.overflow = originalOverflowBody;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-primary font-robotoMono text-white overflow-y-auto">
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-2 right-4 xl:text-4xl xs:text-2xl text-textPrimary font-bold"
      >
        ✕
      </button>

      <div className="min-h-screen w-full flex flex-col items-center xl:p-20 xs:p-6 sm:p-10">
        {/* Título */}
        <h2 className="xl:text-[30px] text-center xs:text-[14px] ms:text-[20px] sm:text-[20px] mb-8 font-tipoBold">
          PROJECT 03 -{" "}
          <a
            href="https://sinners.beer/"
            className="text-textPrimary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SINNERS
          </a>
        </h2>

        {/* 1) Imagen centrada */}
        <div className="w-full flex justify-center mb-8">
          <img
            src={SinnersPrinci}
            alt="Sinners project preview"
            className="w-full max-w-5xl rounded-xl object-cover"
          />
        </div>

        {/* 2) Bloque inferior */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          {/* Izquierda */}
          <div className="flex flex-col">
            {/* Logo */}
            <img
              src={SinnersLogo}
              alt="Sinners logo"
              className="w-[180px] sm:w-[220px] xl:w-[260px] mb-6 object-contain"
            />

            {/* Mini tabla */}
            <div className="rounded-lg overflow-hidden font-tipoNormal">
              <div className="grid grid-cols-[110px_1fr] border-b border-white/20">
                <div className="px-4 py-3 text-white/70">Project:</div>
                <div className="px-4 py-3">E-commerce Website</div>
              </div>

              <div className="grid grid-cols-[110px_1fr] border-b border-white/20">
                <div className="px-4 py-3 text-white/70">Client:</div>
                <div className="px-4 py-3">Sinners Microcervecería</div>
              </div>

              <div className="grid grid-cols-[110px_1fr]">
                <div className="px-4 py-3 text-white/70">Year:</div>
                <div className="px-4 py-3">2025</div>
              </div>
            </div>
          </div>

          {/* Derecha */}
          <div className="flex items-center">
            <p className="text-justify xl:text-[15px] xs:text-[12px] sm:text-[13px] leading-relaxed font-tipoNormal text-white/90">
              This project is an e-commerce website developed for Sinners
              Microcervecería, built on the Shopify platform. The development
              involved customizing a premium Shopify theme using Liquid,
              advanced CSS configuration, and JavaScript enhancements to align
              the digital experience with the brand’s bold visual identity. The
              site features an optimized online store with AJAX cart
              functionality, asset preloading for performance, custom
              typography integration, and carefully configured UI components.
              The project focused on responsive design, conversion-driven
              layouts, and a seamless shopping experience across desktop and
              mobile devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupProyecto3;
