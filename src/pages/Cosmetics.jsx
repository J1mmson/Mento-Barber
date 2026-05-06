import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";

import olejekAquatic from "../assets/cosmetics/olejek-do-brody-aquatic.webp";
import olejekAstrum from "../assets/cosmetics/olejek-do-brody-astrum.webp";
import olejekFloral from "../assets/cosmetics/olejek-do-brody-floral.webp";
import olejekFlaming from "../assets/cosmetics/olejek-do-brody-flaming.webp";
import olejekWoody from "../assets/cosmetics/olejek-do-brody-woody.webp";

const Cosmetics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // TUTAJ JEST BRAKUJĄCA LOGIKA:
  const [activeTab, setActiveTab] = useState("wszystko");

  const products = [
    {
      id: 1,
      name: "ByElementum Aquatic",
      category: "Olejek do brody",
      type: "broda",
      description: "Intensywnie nawilżający olejek, który wnika głęboko w strukturę włosa, zmiękczając twardy zarost. Doskonale radzi sobie z podrażnieniami i swędzeniem skóry pod brodą, pozostawiając ją odżywioną i elastyczną na cały dzień.",
      scent: "Nuty drzewne, bergamotka, mech dębowy",
      ingredients: "Olej ze słodkich migdałów, olej jojoba, olej arganowy, witamina E",
      price: "79 PLN",
      capacity: "30 ml",
      image: olejekAquatic,
    },
    {
      id: 2,
      name: "ByElementum Astrum",
      category: "Olejek do brody",
      type: "broda",
      description: "Olejek o działaniu silnie regenerującym. Idealny dla przesuszonych i matowych bród. Formuła oparta na naturalnych ekstraktach tworzy barierę ochronną przed czynnikami zewnętrznymi i nadaje zarostowi zdrowy, naturalny połysk.",
      scent: "Ziemiste nuty, wetyweria, czarny pieprz",
      ingredients: "Olej rycynowy, olej z pestek winogron, olej makadamia",
      price: "79 PLN",
      capacity: "30 ml",
      image: olejekAstrum,
    },
    {
      id: 3,
      name: "ByElementum Flaming",
      category: "Olejek do brody",
      type: "broda",
      description: "Lekka formuła, która błyskawicznie się wchłania, nie pozostawiając tłustego filmu. Ignis to olejek stworzony do codziennej rutyny – ułatwia rozczesywanie, dyscyplinuje niesforne kosmyki i pobudza zmysły swoim zapachem.",
      scent: "Owoce cytrusowe, kardamon, różowy pieprz",
      ingredients: "Olej z pestek moreli, olej z baobabu, esencje cytrusowe",
      price: "79 PLN",
      capacity: "30 ml",
      image: olejekFlaming,
    },
    {
      id: 4,
      name: "ByElementum Woody",
      category: "Olejek do brody",
      type: "broda",
      description: "Mocne odświeżenie i nawilżenie. Olejek Aqua został skomponowany tak, aby łagodzić stany zapalne skóry i dostarczać witamin cebulkom włosów. Świetny wybór dla osób o wrażliwej cerze, szukających ukojenia po trymowaniu.",
      scent: "Nuty morskie, mięta pieprzowa, eukaliptus",
      ingredients: "Olej z nasion ogórecznika, olej jojoba, ekstrakt z aloesu",
      price: "79 PLN",
      capacity: "30 ml",
      image: olejekWoody,
    },
    {
      id: 5,
      name: "ByElementum Floral",
      category: "Olejek do brody",
      type: "broda",
      description: "Niezwykle lekki olejek o działaniu odświeżającym i tonizującym. Aer to powiew świeżości dla Twojej brody. Odżywia zarost bez jego obciążania, zapewniając mu miękkość i ochronę przed utratą wilgoci w ciągu dnia.",
      scent: "Lawenda, szałwia, ozon, cedr",
      ingredients: "Olej lniany, olej z wiesiołka, olej arganowy",
      price: "79 PLN",
      capacity: "30 ml",
      image: olejekFloral,
    },
  ];

  // I TUTAJ JEST BRAKUJĄCE FILTROWANIE:
  const filteredProducts = products.filter((product) => {
    if (activeTab === "wszystko") return true;
    return product.type === activeTab;
  });

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main
      className="min-h-screen relative overflow-x-hidden pb-20"
      style={{
        background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <Navbar />

      <img
        src={Gradient}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-full h-auto pointer-events-none z-0 opacity-50"
        style={{ top: -400, right: -400 }}
      />

      <div className="relative z-10 pt-[150px] md:pt-[200px] px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromBottom}
          className="text-center md:text-start mb-20"
        >
          <h1
            className="uppercase font-bold"
            style={{
              fontFamily: '"Arial", "Helvetica", sans-serif',
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: "1",
              color: "transparent",
              WebkitTextStroke: "2px #ff6600",
              textShadow: "0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
            }}
          >
            Kosmetyki
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-[15px] leading-relaxed mx-auto md:mx-0">
            Pracujemy wyłącznie na sprawdzonych markach premium. Poznaj produkty,
            których używamy podczas wizyt w Mento Barber Shop i dowiedz się, 
            jak mogą zadbać o Twój zarost w domowym zaciszu.
            <br />
            <span className="text-prime font-bold mt-2 block">
              Wszystkie kosmetyki z naszej półki możesz nabyć stacjonarnie w salonie.
            </span>
          </p>
        </motion.div>
        
        <div className="flex justify-center gap-4 md:gap-8 mb-16 relative z-10">
          <button
            onClick={() => setActiveTab("wszystko")}
            className={`uppercase tracking-widest text-sm font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === "wszystko"
                ? "border-prime text-prime"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Wszystkie
          </button>
          <button
            onClick={() => setActiveTab("broda")}
            className={`uppercase tracking-widest text-sm font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === "broda"
                ? "border-prime text-prime"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Do Brody
          </button>
          <button
            onClick={() => setActiveTab("wlosy")}
            className={`uppercase tracking-widest text-sm font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === "wlosy"
                ? "border-prime text-prime"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Do Włosów
          </button>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
        {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                },
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 flex justify-center p-8 relative">
                <div 
                  className="absolute inset-0 z-0 bg-prime rounded-full opacity-5 blur-3xl"
                  style={{ transform: "scale(0.8)" }}
                ></div>
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.category}`}
                  className="w-full max-w-[400px] h-auto object-contain z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-prime uppercase tracking-widest text-xs font-bold mb-2">
                  {product.category}
                </p>
                <h2 className="text-white font-bold text-3xl md:text-4xl uppercase mb-6">
                  {product.name}
                </h2>
                
                <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <div>
                    <span className="text-white font-bold text-sm uppercase">Zapach: </span>
                    <span className="text-gray-400 text-sm">{product.scent}</span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm uppercase">Główne składniki: </span>
                    <span className="text-gray-400 text-sm">{product.ingredients}</span>
                  </div>
                </div>

                <div className="flex items-end gap-6 pt-6 border-t border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-xs uppercase font-bold mb-1">Cena</span>
                    <span className="text-prime font-bold text-2xl">{product.price}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-xs uppercase font-bold mb-1">Pojemność</span>
                    <span className="text-white font-medium text-lg">{product.capacity}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cosmetics;