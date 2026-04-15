import PropTypes from "prop-types";

import Gradient from "../assets/gradient.svg";
import Barber from "../assets/barber7.webp";
import Texture from "../assets/texture.webp";
import { motion } from "framer-motion";

import { useIsMobile } from "../Hooks/useIsMobile";

const Barber7 = ({ slideInFromRight, fadeInFromLeft }) => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <div
          className="relative h-screen flex items-center justify-start p-10 text-white snap-start overflow-hidden"
          style={{
            background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        >
          <motion.div
            className="text-start p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInFromLeft}
          >
            <h1
              className="text-9xl font-bold text-orange-500"
              style={{
                fontSize: "7.85rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "transparent",
                WebkitTextStroke: "2px #ff6600",
                textShadow:
                  "0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
              }}
            >
              GABI
            </h1>
            <p className="mt-4 max-w-[430px] text-[15px] font-light">
              Lubię pracować nad fryzurami modernistycznymi, z teksturą, tak by
              finalny efekt wyglądał świeżo i ciekawie. Tak by fryzura mogła
              wyglądać dobrze z układaniem jak i bez. Bardzo dobrze czuję się
              przy fryzurach typu french crop, ale klasykę w postaci side part
              również często i chętnie ścinam.
            </p>
          </motion.div>
          <motion.div
            className="absolute w-full left-0 right-0 z-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight}
          >
            <h1
              className="font-bold uppercase text-center"
              style={{
                fontSize: "30vw",
                fontWeight: "bold",
                color: "transparent",
                WebkitTextStroke: "4px #ff6600",
                width: "100%",
                whiteSpace: "nowrap",
              }}
            >
              GABI
            </h1>
          </motion.div>
          <img
            src={Gradient}
            alt="Gradient"
            className="absolute top-0 right-0 w-1/2 h-auto pointer-events-none z-0"
            style={{ top: -350, right: -350 }}
          />
          <img
            src={Barber}
            alt="Background"
            className="absolute bottom-0 right-0 w-1/2 h-auto pointer-events-none"
            style={{ bottom: -200, right: -90, zIndex: 1 }}
          />
        </div>
      ) : (
        <div
          className="relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start z-10 overflow-hidden"
          style={{
            background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="flex flex-col items-center  mt-[10%] leading-none z-20 ">
            <h1
              className="font-bold uppercase text-center"
              style={{
                fontSize: "25vw", // Zmieniono na jednostkę vw, aby dopasować do szerokości ekranu
                fontWeight: "bold",
                color: "transparent",
                WebkitTextStroke: "2px #ff6600",
                width: "100%",
                whiteSpace: "nowrap",
              }}
            >
              GABI
            </h1>
            <p className="mt-4 mb-[25%] max-w-[430px] text-[14px] font-light text-white text-center">
              Lubię pracować nad fryzurami modernistycznymi, z teksturą, tak by
              finalny efekt wyglądał świeżo i ciekawie. Tak by fryzura mogła
              wyglądać dobrze z układaniem jak i bez. Bardzo dobrze czuję się
              przy fryzurach typu french crop, ale klasykę w postaci side part
              również często i chętnie ścinam.
            </p>
          </div>
          <img
            src={Barber}
            alt="Background"
            className="absolute top-0 w-[700px] max-w-none z-10" // Added maxWidth constraint
            style={{ right: "-125px", top: "-225px" }}
          />
          <img
            src={Gradient}
            alt="Gradient"
            className="absolute top-0 z-0 w-[800px] max-w-none"
            style={{ right: "-200px", top: "-200px" }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Barber7;

Barber7.propTypes = {
  slideInFromRight: PropTypes.object,
  fadeInFromLeft: PropTypes.object,
};
