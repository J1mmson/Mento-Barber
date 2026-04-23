/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Project imports
import Navbar from "../components/Navbar";
import { useIsMobile } from "../Hooks/useIsMobile";

// Assets
import Barber2 from "../components/Barber2";
import Barber3 from "../components/Barber3";
import Barber4 from "../components/Barber4";
import Barber5 from "../components/Barber5";
import Barber6 from "../components/Barber6";
import Barber7 from "../components/Barber7";
import Barber8 from "../components/Barber8";
import Barber9 from "../components/Barber9";

import FacebookLogo from "../assets/facebook_logo.svg";
import InstagramLogo from "../assets/instagram_logo.svg";
import TikTokLogo from "../assets/tiktok_logo.svg";
import Photo2 from "../assets/page2photo.webp";
import Gradient from "../assets/gradient.svg";

// Gallery
import galeria1 from "../assets/gallery/galeria1.webp";
import galeria2 from "../assets/gallery/galeria2.webp";
import galeria3 from "../assets/gallery/galeria3.webp";
import galeria4 from "../assets/gallery/galeria4.webp";
import galeria5 from "../assets/gallery/galeria5.webp";
import galeria6 from "../assets/gallery/galeria6.webp";
import galeria7 from "../assets/gallery/galeria7.webp";
import galeria8 from "../assets/gallery/galeria8.webp";
import galeria9 from "../assets/gallery/galeria9.webp";
import galeria10 from "../assets/gallery/galeria10.webp";
import galeria11 from "../assets/gallery/galeria11.webp";
import galeria12 from "../assets/gallery/galeria12.webp";
import galeria13 from "../assets/gallery/galeria13.webp";

// Barbers
import PhotoJimmy from "../assets/page3jimmy.webp";

// Texture
import Texture from "../assets/texture.webp";

const HomePage = () => {
  const isMobile = useIsMobile();

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: !isMobile ? 5 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    lazyLoad: "ondemand"
  };

  const reverseSettings = {
    ...settings,
    rtl: true,
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 0.05, x: 0, transition: { duration: 1.5 } },
  };

  const Section = ({ children, index }) => {
    const variantsSecond = {
      hidden: { opacity: 0, rotateY: 90, x: -50 },
      visible: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 1 } },
    };

    return (
      <motion.div
        key={index}
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variantsSecond}
      >
        {children}
      </motion.div>
    );
  };

  // Styl dla efektu czystego obrysu bez kresek (Fake Stroke)
  const fakeStrokeStyle = {
    color: "transparent",
    WebkitTextFillColor: "transparent",
    textShadow: `
      -1px -1px 0 #ff6600,
       1px -1px 0 #ff6600,
      -1px  1px 0 #ff6600,
       1px  1px 0 #ff6600,
       0 0 10px #E67543
    `
  };

  return (
   <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      
      {!isMobile ? (
        <Section index={1}>
          <div
            id="about"
            className="relative flex flex-col min-h-screen px-20 snap-start z-10 overflow-hidden"
            style={{
              background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
          >
            <motion.div
              className="flex flex-col items-start mt-[20%] leading-none max-w-screen-sm z-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInFromLeft}
            >
              <h1 className="text-textPrimary uppercase text-titleOne font-bold text-7xl mb-[-20px]">
                mento barber
              </h1>
              <h1
                className="uppercase font-bold ml-[-4px]"
                style={{
                  ...fakeStrokeStyle,
                  fontSize: "7.85rem",
                }}
              >
                bochnia
              </h1>
              <p className="mt-4 max-w-xl text-[15px] text-gray-300 ml-[4px]" style={{ lineHeight: 2 }}>
                MENTO BARBERSHOP Bochnia to znakomite miejsce, gdzie rzemiosło
                spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się
                na perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody
                oraz zadbanym zarostem.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-between items-center w-full mt-auto py-[2rem] z-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInFromBottom}
            >
              <div className="flex space-x-4">
                <div className="border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary">
                  Nad Babicą 2, Bochnia
                </div>
                <a href="tel:+48798144399" className="border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary inline-block hover:border-orange-500 hover:text-orange-500 transition-colors duration-300">
                  +48 798 144 399
                </a>
              </div>
              <div className="flex space-x-4 text-textPrimary items-center">
                <a href="https://www.facebook.com/MentoBarberShop" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookLogo} alt="facebook" style={{ height: "40px", width: "auto" }} />
                </a>
                <a href="https://www.instagram.com/mento.barbershop/" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo} alt="instagram" style={{ height: "38px", width: "auto" }} />
                </a>
                <a href="https://www.tiktok.com/@mento_barbershop" target="_blank" rel="noopener noreferrer">
                  <img src={TikTokLogo} alt="tiktok" style={{ height: "38px", width: "auto" }} />
                </a>
              </div>
            </motion.div>
            <img src="/page1photo.webp" alt="Barber" className="absolute bottom-0 right-0 w-[40%] h-auto pointer-events-none z-10" style={{ bottom: -60 }} />
            <img src={Gradient} alt="" aria-hidden="true" className="absolute top-0 right-0 w-1/1 h-auto pointer-events-none z-0" style={{ top: -700, right: -650 }} />
            <div className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10" style={{ background: "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)" }}></div>
          </div>
        </Section>
      ) : (
        <Section index={1}>
          <div
            id="about"
            className="relative flex flex-col justify-end px-6 pb-5 snap-start z-10 overflow-hidden"
            style={{
              minHeight: "100svh",
              background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="flex flex-col items-center mt-[10%] leading-none z-20">
              <div className="flex space-x-4 items-center gap-[32px] mb-6">
                 <a href="https://www.facebook.com/MentoBarberShop" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} alt="fb" className="h-12" /></a>
                 <a href="https://www.instagram.com/mento.barbershop/" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt="ig" className="h-10" /></a>
                 <a href="https://www.tiktok.com/@mento_barbershop" target="_blank" rel="noopener noreferrer"><img src={TikTokLogo} alt="tt" className="h-10" /></a>
              </div>
              <h1 className="text-textPrimary uppercase font-bold text-center" style={{ fontSize: "2.95rem" }}>
                mento barber
              </h1>
              <h1
                className="uppercase font-bold text-center"
                style={{
                  ...fakeStrokeStyle,
                  fontSize: useWindowSize().height < 700 ? "4.5rem" : "5rem",
                }}
              >
                bochnia
              </h1>
              <p className="text-center text-[14px] text-gray-300 mt-4 mb-8" style={{ lineHeight: 2 }}>
                MENTO BARBERSHOP Bochnia to znakomite miejsce, gdzie rzemiosło
                spotyka się z pasją i profesjonalizmem.
              </p>
              <div className="flex flex-col items-center space-y-[12px] w-full text-[12px]">
                <div className="border-2 border-gray-400 rounded-full w-full py-[12px] px-5 text-textPrimary text-center">Nad Babicą 2, Bochnia</div>
                <a href="tel:+48798144399" className="border-2 border-gray-400 rounded-full w-full py-[12px] px-5 text-textPrimary text-center">+48 798 144 399</a>
              </div>
            </div>
            <img src="/page1photo.webp" alt="Barber" className="absolute inset-0 mx-auto w-[150%] h-auto object-contain pointer-events-none z-10" style={{ top: 80 }} />
            <img src={Gradient} alt="" className="absolute top-0 z-0 w-[800px] max-w-none" style={{ right: "-200px", top: "-200px" }} />
            <div className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10" style={{ background: "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)" }}></div>
          </div>
        </Section>
      )}

      {/* Cennik */}
      <Section index={2}>
        <div
          id="pricing"
          className="relative min-h-screen flex items-center justify-end text-prime snap-start overflow-hidden"
          style={{
            background: `linear-gradient(90deg, #091E23, #090909), url(${Texture})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className={`grid ${isMobile ? "grid-cols-1 px-4 w-full h-[83dvh]" : "grid-cols-2 gap-6 pr-[98px]"} z-10`}>
            {[
              { name: "STRZYŻENIE MĘSKIE", price: "90 PLN", time: "45 min" },
              { name: "STRZYŻENIE BRODY", price: "80 PLN", time: "30 min" },
              { name: "COMBO (WŁOSY + BRODA)", price: "150 PLN", time: "90 min" },
              { name: "STRZYŻENIE DŁUGIE WŁOSY", price: ">120 PLN", time: ">60 min" },
              { name: "BRODA + ODSIWIANIE", price: "160 PLN", time: "60 min" },
              { name: "COMBO + ODSIWIANIE", price: "230 PLN", time: "90 min" },
              { name: "GŁOWA ZERO + BRODA", price: "110 PLN", time: "45 min" },
              { name: "ODSIWIANIE WŁOSÓW", price: "80 PLN", time: "30 min" },
              { name: "PREMIUM BRODA", price: "140 PLN", time: "45 min" },
              { name: "PREMIUM COMBO", price: "230 PLN", time: "90 min" },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-[#171D1F] rounded-md shadow-lg border border-transparent hover:border-prime transition-all cursor-pointer">
                <h2 className="font-bold text-sm lg:text-base">{item.name}</h2>
                <p className="text-gray-300 text-xs lg:text-sm">{item.price} | {item.time}</p>
              </div>
            ))}
          </div>
          {!isMobile && <img src={Photo2} alt="Barber" className="absolute bottom-0 left-0 top-10 w-1/3 h-auto pointer-events-none" />}
        </div>
      </Section>

      {/* Jimmy Section */}
      {!isMobile ? (
        <Section index={3}>
          <div
            id="barbers"
            className="relative h-screen flex items-center justify-start p-10 text-white snap-start overflow-hidden"
            style={{
              background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="text-start p-10 z-20">
              <h2 className="font-bold uppercase" style={{ ...fakeStrokeStyle, fontSize: "7.85rem" }}>JIMMY</h2>
              <p className="mt-4 max-w-[430px] text-[15px] font-light">Profesjonalizm to dla mnie podstawa...</p>
            </div>
            <div className="absolute w-full left-0 right-0 z-1 flex justify-center">
               <h2 className="font-bold uppercase opacity-20" style={{ ...fakeStrokeStyle, fontSize: "30vw" }}>JIMMY</h2>
            </div>
            <img src={PhotoJimmy} alt="Jimmy" className="absolute bottom-0 right-0 w-1/2 h-auto pointer-events-none z-10" style={{ bottom: -240, right: -95 }} />
          </div>
        </Section>
      ) : (
        <Section index={3}>
          <div
            id="barbers"
            className="relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start overflow-hidden"
            style={{ background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`, backgroundSize: "cover" }}
          >
            <div className="flex flex-col items-center mt-[10%] leading-none z-20">
              <h2 className="font-bold uppercase text-center" style={{ ...fakeStrokeStyle, fontSize: "25vw" }}>JIMMY</h2>
              <p className="mt-4 mb-[25%] text-[14px] font-light text-white text-center">Profesjonalizm to dla mnie podstawa...</p>
            </div>
            <img src={PhotoJimmy} alt="Jimmy" className="absolute top-0 w-[700px] max-w-none z-10" style={{ right: "-125px", top: "-200px" }} />
            <div className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10" style={{ background: "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)" }}></div>
          </div>
        </Section>
      )}

      {/* Ekipa */}
      <Barber2 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />
      <Barber3 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />
      <Barber4 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />
      <Barber5 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />
      <Barber6 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />
      <Barber7 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />
      <Barber8 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />
      <Barber9 slideInFromRight={slideInFromRight} fadeInFromLeft={fadeInFromLeft} />

      {/* Galerie */}
      <div id="works" className="relative h-screen flex items-center justify-center snap-start overflow-hidden z-10" style={{ background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`, backgroundSize: "cover" }}>
        <div className={`w-full ${isMobile ? "pt-[60px]" : "pt-[120px]"}`}>
          <Slider {...settings}>
            {[galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8, galeria9, galeria10, galeria11, galeria12, galeria13].map((p, i) => (
              <div key={i} className="p-3">
                <div className="p-2 border-[3px] border-prime rounded-md shadow-neon">
                  <img src={p} alt="work" className="w-full h-full object-cover rounded-md" style={{ height: isMobile ? "31vh" : "35vh" }} />
                </div>
              </div>
            ))}
          </Slider>
          <Slider {...reverseSettings}>
            {[galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8, galeria9, galeria10, galeria11, galeria12, galeria13].map((p, i) => (
              <div key={i} className="p-3">
                <div className="p-2 border-[3px] border-prime rounded-md shadow-neon">
                  <img src={p} alt="work" className="w-full h-full object-cover rounded-md" style={{ height: isMobile ? "31vh" : "35vh" }} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default HomePage;