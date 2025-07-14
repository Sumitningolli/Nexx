import { motion } from "framer-motion";

const Slider = ({ images }) => {
  const imagesArr = [...images, ...images]; 

  return (
    <div className="h-[200px] relative overflow-hidden mx-auto max-w-screen-xl">
        <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full
        before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0
        after:bg-gradient-to-l after:h-full after:w-1/4 after:from-white after:to-transparent "></div>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {imagesArr.map((image, index) => (
          <div 
            key={index} 
            className="h-full flex shrink-0 w-1/4" 
          >
            <div className="flex items-center justify-center h-[300px] w-full">
              <img
                src={image.logo}
                alt={image.name}
                className="h-full max-w-full object-contain opacity-75"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
