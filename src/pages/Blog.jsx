import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Project imports
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Texture from "../assets/texture.webp";
import Blog1 from "../assets/blog1.webp";
import Blog2 from "../assets/haircut8.webp";
import Blog3 from "../assets/haircut3.webp";
import Blog4 from "../assets/blog4.webp";
import Blog5 from "../assets/haircut2.webp";
import Blog6 from "../assets/blog6.webp";
import Blog7 from "../assets/blog7.webp";
import Blog8 from "../assets/shortHair.webp";
const Blog = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const content = [
    {
      id: 1,
      title: "Co ile powinienem chodzić do barbera na strzyżenie?",
      description:
        "To jedno z najczęstszych pytań, które słyszymy w barbershopie. Odpowiedź nie jest jednak taka sama dla każdego – wszystko zależy od tego, jak szybko rosną Twoje włosy, jaką fryzurę nosisz i jak chcesz wyglądać na co dzień.",
      image: Blog1,
      path: "Frequency",
      alt: "Mężczyzna podczas profesjonalnego strzyżenia włosów w Mento Barber Bochnia",
    },
    {
      id: 2,
      title: "Jak pielęgnować brodę, żeby była gęsta i zadbana?",
      description:
        "Broda to symbol męskości, ale tylko wtedy, gdy jest odpowiednio zadbana. Zaniedbana potrafi postarzać, dodać niechlujności i sprawiać, że cała stylizacja wygląda mniej atrakcyjnie. Dobra wiadomość jest taka, że gęsta i zdrowa broda to nie tylko geny – ogromną rolę odgrywa właściwa pielęgnacja.",
      image: Blog2,
      path: "BeardCondition",
      alt: "Zadbana, gęsta broda po pielęgnacji olejkami w MENTO BARBER Bochnia",
    },
    {
      id: 3,
      title: "Jak pan młody powinien przygotować się do wielkiego dnia?",
      description:
        "Ślub to wyjątkowe wydarzenie – wszystko musi być dopięte na ostatni guzik. Garnitur, buty, dodatki… ale równie ważny jest wizerunek pana młodego. Odpowiednia fryzura, zadbana broda i zdrowa skóra twarzy sprawią, że w tym dniu będziesz wyglądał pewnie i świeżo. Jak to zaplanować?",
      image: Blog3,
      path: "WeddingDay",
      alt: "Mężczyzna z nową fryzurą przygotowujący się do ważnego wydarzenia",
    },
    {
      id: 4,
      title: "Wypadanie włosów",
      description:
        "Każdy z nas traci włosy – to naturalny proces. Średnio wypada nam od 50 do 100 włosów dziennie i nie ma w tym nic niepokojącego. Problem pojawia się wtedy, gdy włosów wypada coraz więcej, fryzura traci gęstość, a zakola czy przerzedzenia zaczynają być coraz bardziej widoczne. Na szczęście istnieją sposoby, by ten proces spowolnić i zadbać o zdrowie skóry głowy.",
      image: Blog4,
      path: "Bangs",
      alt: "Frzyzura typu courtains z zakrytymi zakolami, stworzona w MENTO BARBER Bochnia",
    },
    {
      id: 5,
      title: "Jak zapobiegać łysieniu, gdy geny nie sprzyjają?",
      description:
        "Łysienie to częsty problem u mężczyzn. Jeśli w Twojej rodzinie tata, dziadek czy wujkowie wcześnie tracili włosy, istnieje duże prawdopodobieństwo, że u Ciebie będzie podobnie. Ale to wcale nie oznacza, że musisz pogodzić się z losem. Dzięki nowoczesnym zabiegom możesz działać prewencyjnie i zatrzymać włosy na dłużej.",
      image: Blog5,
      path: "Balding",
      alt: "Zabiegi nowoczesne w MENTO BARBER Bochnia",
    },
    {
      id: 6,
      title: "Stylizacja włosów – jak to zrobić dobrze?",
      description:
        "Dobra fryzura to połowa sukcesu, ale bez odpowiedniej stylizacji nawet najlepsze cięcie nie pokaże swojego potencjału. Wielu facetów uważa, że to skomplikowane i czasochłonne, a prawda jest taka, że wystarczy 5 minut rano, żeby włosy wyglądały świetnie przez cały dzień.",
      image: Blog6,
      path: "HairStyling",
      alt: "Mężczyzna podczas układania fryzury w MENTO BARBER Bochnia",
    },
    {
      id: 7,
      title: "Dobra fryzura = dobre wrażenie",
      description:
        "Mówi się, że nie szata zdobi człowieka – ale prawda jest taka, że pierwsze wrażenie ma ogromne znaczenie. Ludzie oceniają nas w ciągu kilku sekund, zanim zdążymy się odezwać. A jednym z kluczowych elementów, na który zwracają uwagę, jest fryzura.",
      image: Blog7,
      path: "Haircut",
      alt: "Mężczyzna podczas profesjonalnego strzyżenia włosów w MENTO BARBER Bochnia",
    },
    {
      id: 8,
      title: "Jak dobrać fryzurę do recesji i zakoli?",
      description:
        "Dobór odpowiedniej fryzury do recesji i zakoli to klucz do stworzenia kompletnego stylu. Warto zwrócić uwagę na kształt głowy, typ włosów i preferencje personalne.",
      image: Blog8,
      path: "RecedingHairlineHairstyle",
      alt: "Mężczyzna podczas profesjonalnego strzyżenia włosów w MENTO BARBER Bochnia",
    },
  ];

  const handleScroll = (event) => {
    const { deltaY } = event;
    if (deltaY > 0 && currentIndex < content.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    const touchEnd = event.touches[0].clientY;
    const distance = touchStart - touchEnd;

    // Minimalna odległość przesunięcia, aby zmienić sekcję
    const threshold = 100;

    if (distance > threshold && currentIndex < content.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTouchStart(touchEnd); // Resetuj punkt początkowy, aby uniknąć wielokrotnego przeskakiwania
    } else if (distance < -threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setTouchStart(touchEnd); // Resetuj punkt początkowy, aby uniknąć wielokrotnego przeskakiwania
    }
  };

  return !isMobile ? (
    <div className="h-screen overflow-hidden" onWheel={handleScroll}>
      {/* Desktop View */}
      <Navbar />
      <div
        id="about"
        className="relative flex flex-col justify-end items-center min-h-screen px-[96px] z-10 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, #090909, #091E23), url(${content[currentIndex].image}), url(${Texture})`,
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "center, center",
          backgroundBlendMode: "multiply",
          opacity: 1, // Added opacity to make it more transparent
        }}
      >
        <div className="z-20 flex flex-row justify-between w-full items-end">
          <div className="flex flex-col items-start mt-60 leading-none max-w-screen-sm z-20">
            <h1 className="title text-[32px] text-prime font-bold">
              {content[currentIndex].title}
            </h1>
            <p
              className="description text-[13px] mt-4 max-w-xl text-gray-300"
              style={{ lineHeight: 2 }}
            >
              {content[currentIndex].description}
            </p>
            <button
              className="button p-[12px] border-2 w-full border-prime rounded-[16px] text-prime mb-[96px] mt-[24px]"
              onClick={() => navigate(`/blog/${content[currentIndex].path}`)}
            >
              Kliknij aby przeczytać
            </button>
          </div>

          <div className="flex flex-col items-center space-y-3 mb-[96px]">
            {content.map((_, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex &&
                  "w-5 h-5 border-[1px] border-gray-500 rounded-full flex items-center justify-center"
                }`}
                onClick={() => setCurrentIndex(index)} // Added click handler
                style={{ cursor: "pointer" }} // Added pointer cursor for better UX
              >
                <div
                  className={`rounded-full border-2 ${
                    index === currentIndex
                      ? "bg-prime border-prime w-3 h-3 m-auto"
                      : "border-[#FFF8E7] w-5 h-5"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <img
          src={Gradient}
          alt="Gradient"
          className="absolute top-0 right-0 pointer-events-none z-20"
          style={{ top: -350, opacity: 0.5, width: "250%", height: "auto" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
            opacity: 0.5,
          }}
        ></div>
      </div>
    </div>
  ) : (
    <div
      className="h-[100dvh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Navbar />

      <div
        id="about"
        className="relative flex flex-col justify-end items-center px-[16px] z-10 overflow-hidden"
        style={{
          minHeight: "100dvh", // uwzględnia paski Safari
          height: "100dvh", // fallback dla starszych przeglądarek
          backgroundImage: `linear-gradient(90deg, rgba(9,9,9,0.7), rgba(9,30,35,0.7)), url(${content[currentIndex].image}), url(${Texture})`,
          backgroundSize: "cover, cover, cover",
          backgroundRepeat: "no-repeat, no-repeat, repeat",
          backgroundPosition: "center, center, center",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* CONTENT */}
        <div className="z-20 flex flex-col w-full">
          {/* Nawigacja (kropki) */}
          <div className="flex flex-col items-center space-y-2 mb-6 mr-auto">
            {content.map((_, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex &&
                  "w-5 h-5 border-[1px] border-gray-500 rounded-full flex items-center justify-center"
                }`}
                onClick={() => setCurrentIndex(index)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`rounded-full border-2 ${
                    index === currentIndex
                      ? "bg-prime border-prime w-3 h-3 m-auto"
                      : "border-[#FFF8E7] w-5 h-5"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Sekcja tekstowa */}
          <div className="flex flex-row justify-between w-full items-end">
            <div className="flex flex-col items-start mt-auto leading-none max-w-screen-sm z-20">
              <h1 className="title text-[22px] text-prime font-bold">
                {content[currentIndex].title}
              </h1>
              <p
                className="description text-[13px] mt-4 max-w-xl text-gray-300"
                style={{ lineHeight: 2 }}
              >
                {content[currentIndex].description}
              </p>
              <button
                className="button p-[12px] border-2 w-full border-prime rounded-[16px] text-prime mb-[30px] mt-[24px]"
                onClick={() => navigate(`/blog/${content[currentIndex].path}`)}
              >
                Kliknij aby przeczytać
              </button>
            </div>
          </div>
        </div>

        {/* Nakładka górna (gradient) */}
        <img
          src={Gradient}
          alt="Gradient"
          className="absolute top-0 right-0 pointer-events-none z-20"
          style={{ top: -350, opacity: 0.5, width: "250%", height: "auto" }}
        />

        {/* Gradient dolny */}
        <div
          className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
            opacity: 0.5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
