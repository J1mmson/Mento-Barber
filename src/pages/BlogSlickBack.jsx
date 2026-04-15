// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog2 from "../assets/haircut8.webp";

const BlogSlickBack = () => {
  const isMobile = useIsMobile();

  return !isMobile ? (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {/* Stałe tło */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      {/* Kontener z przewijaną treścią */}
      <div className="relative h-screen overflow-auto">
        <div className="flex items-center justify-center mt-[10%] mb-[5%]">
          <div
            className="w-[65%] bg-[#171D1F] flex flex-col p-[32px]  rounded-[10px]"
            style={{ boxShadow: "0px 8px 10px #00000099" }}
          >
            <div className="rounded-[6px] overflow-hidden h-[400px] flex justify-center items-center">
              <img
                src={Blog2}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[6px]">
              Jak pielęgnować brodę, żeby była gęsta i zadbana?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Broda to symbol męskości, ale tylko wtedy, gdy jest odpowiednio
              zadbana. Zaniedbana potrafi postarzać, dodać niechlujności i
              sprawiać, że cała stylizacja wygląda mniej atrakcyjnie. Dobra
              wiadomość jest taka, że gęsta i zdrowa broda to nie tylko geny –
              ogromną rolę odgrywa właściwa pielęgnacja.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            {/* <div className="flex flex-row items-center justify-center gap-[16px]">
              <div className="w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden">
                <img
                  src={slickback1}
                  alt="slickback1"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden">
                <img
                  src={slickback2}
                  alt="slickback2"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden">
                <img
                  src={slickback3}
                  alt="slickback3"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div> */}
            <h1 className="text-[32px] text-prime font-bold">
              1. Mycie – podstawa pielęgnacji
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Wielu mężczyzn wciąż myje brodę zwykłym szamponem do włosów lub,
              co gorsza, żelem pod prysznic. To błąd! Skóra pod brodą jest
              delikatna, a włos twardszy niż na głowie – wymaga innej
              pielęgnacji. <br /> 👉 Używaj{" "}
              <b>specjalnych szamponów do brody</b> lub delikatnych produktów do
              twarzy, które oczyszczą, ale nie przesuszą.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              2. Nawilżanie i odżywianie
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Sucha broda = łupież, swędzenie i nieestetyczny wygląd. 👉
              Codziennie stosuj <b>olejek do brody</b>, który:
              <ul className="text-[16px] text-white font-light list-disc list-inside">
                <li>zmiękcza włosy, </li>
                <li>nadaje im zdrowy połysk,</li>
                <li>nawilża skórę pod brodą,</li>
                <li>ułatwia stylizację</li>
              </ul>
              Dłuższe brody polubią również <b>balsamy</b>, które dodatkowo
              ujarzmiają niesforne włoski.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              3. Regularne przycinanie i kontury
            </h1>
            <p className="text-[16px] text-white my-[12px] font-light">
              Broda rośnie nierówno – dlatego tak ważne są wizyty u barbera. To
              właśnie on wyrówna kształt, nada jej formę i zadba o linie, które
              samemu trudno utrzymać. <br /> 👉 Odwiedzaj barbera <b>co 2–3</b>
              tygodnie, żeby utrzymać schludny wygląd.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              4. Codzienna stylizacja i czesanie
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Szczotka do brody (kartacz) z naturalnego włosia lub grzebień to
              must-have. Regularne czesanie:
              <ul className="text-[16px] text-white font-light list-disc list-inside">
                <li>pobudza krążenie, </li>
                <li>rozprowadza sebum i olejek na całej długości,</li>
                <li>zapobiega kołtunom,</li>
                <li>sprawia, że broda układa się naturalnie</li>
              </ul>
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              5. Zdrowy styl życia
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Gęsta broda to także efekt tego, co dzieje się w środku organizmu.
              👉 Zadbaj o:
              <ul className="text-[16px] text-white font-light list-disc list-inside">
                <li>
                  <b>dietę bogatą w białko, cynk, witaminy z grupy B,</b>
                </li>
                <li>odpowiednią ilość snu,</li>
                <li>ograniczenie stresu.</li>
              </ul>
              To wszystko wspiera wzrost włosów i ich kondycję.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              6. Peeling – sekret zdrowej skóry pod brodą
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Często zapominamy, że pod brodą też jest skóra, która potrzebuje
              oczyszczenia. Resztki kosmetyków, martwy naskórek i sebum mogą
              blokować mieszki włosowe i prowadzić do podrażnień czy
              wrastających włosków. <br /> 👉 Raz w tygodniu wykonaj
              <b> peeling enzymatyczny</b>, który:
              <ul className="text-[16px] text-white font-light list-disc list-inside">
                <li>delikatnie złuszcza zrogowaciały naskórek,</li>
                <li> odblokowuje mieszki włosowe,</li>
                <li>nawilża i odświeża skórę</li>
              </ul>
              Efekt? Skóra oddycha, a broda rośnie zdrowsza i mocniejsza.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              💡 Pro Tip od barbera:
            </h1>
            <p className="text-[16px] text-white mt-[12px] mb-[42px] font-light">
              Jeśli masz <b>brodę twardą i suchą</b>, potraktuj ją tak samo jak
              włosy na głowie. Użyj{" "}
              <b>nawilżającej odżywki lub maski do włosów</b> – to świetny
              sposób, żeby zmiękczyć zarost i ułatwić jego codzienną stylizację.
            </p>
          </div>
        </div>
      </div>

      <img
        src={Gradient}
        alt="Gradient"
        className="fixed w-full h-auto pointer-events-none z-[-1] opacity-70"
        style={{ top: "-50%" }}
      />
    </div>
  ) : (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      {/* Stałe tło */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      {/* Kontener z przewijaną treścią */}
      <div className="relative h-screen overflow-auto">
        <div className="flex items-center justify-center mt-[100px] mb-[5%]">
          <div
            className="w-full bg-[#171D1F] flex flex-col p-[32px] m-[16px] rounded-[10px] z-10"
            style={{ boxShadow: "0px 8px 10px #00000099" }}
          >
            <div className="h-[200px] rounded-[6px] overflow-hidden flex justify-center items-center">
              <img
                src={Blog2}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[6px]">
              Jak pielęgnować brodę, żeby była gęsta i zadbana?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              W świecie męskich fryzur jednym z najbardziej klasycznych i
              eleganckich stylów jest bez wątpienia „slick back” – czyli fryzura
              męska zaczesana do tyłu. Ten ponadczasowy look zdobi głowy
              mężczyzn od dziesięcioleci, nadając im pewności siebie i stylowego
              wyrazu. Czym właściwie jest ta fryzura, dla kogo jest idealna i
              jak ewoluowała na przestrzeni lat?
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              1. Mycie – podstawa pielęgnacji
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Wielu mężczyzn wciąż myje brodę zwykłym szamponem do włosów lub,
              co gorsza, żelem pod prysznic. To błąd! Skóra pod brodą jest
              delikatna, a włos twardszy niż na głowie – wymaga innej
              pielęgnacji. <br /> 👉 Używaj{" "}
              <b>specjalnych szamponów do brody</b> lub delikatnych produktów do
              twarzy, które oczyszczą, ale nie przesuszą.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              2. Nawilżanie i odżywianie
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Sucha broda = łupież, swędzenie i nieestetyczny wygląd. 👉
              Codziennie stosuj <b>olejek do brody</b>, który:
              <ul className="text-[14px] text-white font-light list-disc list-inside">
                <li>zmiękcza włosy, </li>
                <li>nadaje im zdrowy połysk,</li>
                <li>nawilża skórę pod brodą,</li>
                <li>ułatwia stylizację</li>
              </ul>
              Dłuższe brody polubią również <b>balsamy</b>, które dodatkowo
              ujarzmiają niesforne włoski.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              3. Regularne przycinanie i kontury
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Broda rośnie nierówno – dlatego tak ważne są wizyty u barbera. To
              właśnie on wyrówna kształt, nada jej formę i zadba o linie, które
              samemu trudno utrzymać. <br /> 👉 Odwiedzaj barbera <b>co 2–3</b>
              tygodnie, żeby utrzymać schludny wygląd.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              4. Codzienna stylizacja i czesanie
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Szczotka do brody (kartacz) z naturalnego włosia lub grzebień to
              must-have. Regularne czesanie:
              <ul className="text-[14px] text-white font-light list-disc list-inside">
                <li>pobudza krążenie, </li>
                <li>rozprowadza sebum i olejek na całej długości,</li>
                <li>zapobiega kołtunom,</li>
                <li>sprawia, że broda układa się naturalnie</li>
              </ul>
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              5. Zdrowy styl życia
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Gęsta broda to także efekt tego, co dzieje się w środku organizmu.
              👉 Zadbaj o:
              <ul className="text-[14px] text-white font-light list-disc list-inside">
                <li>
                  <b>dietę bogatą w białko, cynk, witaminy z grupy B,</b>
                </li>
                <li>odpowiednią ilość snu,</li>
                <li>ograniczenie stresu.</li>
              </ul>
              To wszystko wspiera wzrost włosów i ich kondycję.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              6. Peeling – sekret zdrowej skóry pod brodą
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Często zapominamy, że pod brodą też jest skóra, która potrzebuje
              oczyszczenia. Resztki kosmetyków, martwy naskórek i sebum mogą
              blokować mieszki włosowe i prowadzić do podrażnień czy
              wrastających włosków. <br /> 👉 Raz w tygodniu wykonaj
              <b> peeling enzymatyczny</b>, który:
              <ul className="text-[14px] text-white font-light list-disc list-inside">
                <li>delikatnie złuszcza zrogowaciały naskórek,</li>
                <li> odblokowuje mieszki włosowe,</li>
                <li>nawilża i odświeża skórę</li>
              </ul>
              Efekt? Skóra oddycha, a broda rośnie zdrowsza i mocniejsza.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold ">
              💡 Pro Tip od barbera:
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light mb-[42px]">
              Jeśli masz <b>brodę twardą i suchą</b>, potraktuj ją tak samo jak
              włosy na głowie. Użyj{" "}
              <b>nawilżającej odżywki lub maski do włosów</b> – to świetny
              sposób, żeby zmiękczyć zarost i ułatwić jego codzienną stylizację.
            </p>
          </div>
        </div>
      </div>
      <img
        src={Gradient}
        alt="Gradient"
        className="absolute top-0 z-0 w-[800px] max-w-none"
        style={{ right: "-200px", top: "-200px" }}
      />
    </div>
  );
};

export default BlogSlickBack;
