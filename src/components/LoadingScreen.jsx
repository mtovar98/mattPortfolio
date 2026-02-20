import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 900);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="font-robotoMono fixed top-0 left-0 w-full h-full flex items-center justify-center bg-cover bg-center">
      <video
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover opacity-20"
        src="/videos/codigo-binario.mov"
        autoPlay
        loop
        muted
      ></video>

      {/* Contenedor del texto */}
      <div className="absolute flex flex-col items-center justify-center z-10 text-center px-4 py-4">
        <div className="text-textPrimary text-[40px] md:text-[50px] lg:text-[60px]">
          <span>{progress}%</span>
        </div>
        <p className="text-textSecondary text-[18px] md:text-[20px] lg:text-[22px]">
          Loading <span className="text-textPrimary">MattDev</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
