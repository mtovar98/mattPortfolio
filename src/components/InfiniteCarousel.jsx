import { motion } from "framer-motion";

const InfiniteCarousel = ({ images }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full bg-primary">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 150, // Cambia la velocidad aquí
          ease: "linear",
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="min-w-[400px]">
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
