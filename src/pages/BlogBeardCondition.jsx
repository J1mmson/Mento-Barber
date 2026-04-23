import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog2 from "../assets/haircut8.webp";

const BlogBeardCondition = () => {
  const isMobile = useIsMobile();

  return !isMobile ? (
    <div className="h-screen overflow-hidden relative flex flex-col">
      <Navbar />
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="flex-1 flex items-center justify-center p-[40px]">
        <div
          className="w-[85%] max-w-[1300px] h-[85vh] bg-[#171D1F] flex flex-row gap-[50px] p-[40px] rounded-[10px] z-10"
          style={{ boxShadow: "0px 8px 10px #00000099" }}
        >
          <div className="w-[40%] h-full shrink-0 rounded-[6px] overflow-hidden shadow-lg relative">
            <img
              src={Blog2}
              alt="Pielęgnacja brody"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          <div 
            className="w-[60%] h-full flex flex-col overflow-y-auto pr-6"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#E67543 transparent" }}
          >
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[40px] text-prime font-bold mt-[12px] leading-tight">
              Jak pielęgnować brodę, żeby była gęsta i zadbana?
            </h1>
            <p className="text-[18px] text-gray-200 mt-[24px] font-light leading-relaxed">
              Broda to symbol męskości, ale tylko wtedy, gdy jest odpowiednio
              zadbana. Zaniedbana potrafi postarzać, dodać niechlujności i
              sprawiać, że cała stylizacja wygląda mniej atrakcyjnie. Dobra
              wiadomość jest taka, że gęsta i zdrowa broda to nie tylko geny –
              ogromną rolę odgrywa właściwa pielęgnacja.
            </p>

            <hr className="border-[white] opacity-10 my-[32px] shrink-0" />

            <h1 className="text-[28px] text-prime font-bold mt-[10px]">
              1. Mycie – podstawa pielęgnacji
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Wielu mężczyzn wciąż myje brodę zwykłym szamponem do włosów lub,
              co gorsza, żelem pod prysznic. To błąd! Skóra pod brodą jest
              delikatna, a włos twardszy niż na głowie – wymaga innej pielęgnacji.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Używaj <b className="text-prime">specjalnych szamponów do brody</b> lub delikatnych produktów do
              twarzy, które oczyszczą, ale nie przesuszą.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              2. Nawilżanie i odżywianie
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Sucha broda = łupież, swędzenie i nieestetyczny wygląd. Codziennie stosuj <b className="text-prime">olejek do brody</b>, który:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>zmiękcza włosy,</li>
              <li>nadaje im zdrowy połysk,</li>
              <li>nawilża skórę pod brodą,</li>
              <li>ułatwia stylizację.</li>
            </ul>
            <p className="text-[16px] text-white mt-[16px] font-light leading-relaxed">
              Dłuższe brody polubią również <b className="text-prime">balsamy</b>, które dodatkowo
              ujarzmiają niesforne włoski.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              3. Regularne przycinanie i kontury
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Broda rośnie nierówno – dlatego tak ważne są wizyty u barbera. To
              właśnie on wyrówna kształt, nada jej formę i zadba o linie, które
              samemu trudno utrzymać.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Odwiedzaj barbera <b className="text-prime">co 2–3 tygodnie</b>, żeby utrzymać schludny wygląd.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              4. Codzienna stylizacja i czesanie
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Szczotka do brody (kartacz) z naturalnego włosia lub grzebień to
              must-have. Regularne czesanie:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>pobudza krążenie,</li>
              <li>rozprowadza sebum i olejek na całej długości,</li>
              <li>zapobiega kołtunom,</li>
              <li>sprawia, że broda układa się naturalnie.</li>
            </ul>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              5. Zdrowy styl życia
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Gęsta broda to także efekt tego, co dzieje się w środku organizmu. Zadbaj o:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li><b className="text-prime">dietę bogatą w białko, cynk, witaminy z grupy B,</b></li>
              <li>odpowiednią ilość snu,</li>
              <li>ograniczenie stresu.</li>
            </ul>
            <p className="text-[16px] text-white mt-[16px] font-light leading-relaxed">
              To wszystko wspiera wzrost włosów i ich kondycję.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              6. Peeling – sekret zdrowej skóry pod brodą
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Często zapominamy, że pod brodą też jest skóra, która potrzebuje
              oczyszczenia. Resztki kosmetyków, martwy naskórek i sebum mogą
              blokować mieszki włosowe i prowadzić do podrażnień czy wrastających włosków.
            </p>
            <p className="text-[16px] text-white mt-[16px] font-light leading-relaxed">
              Raz w tygodniu wykonaj <b className="text-prime">peeling enzymatyczny</b>, który:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>delikatnie złuszcza zrogowaciały naskórek,</li>
              <li>odblokowuje mieszki włosowe,</li>
              <li>nawilża i odświeża skórę.</li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Efekt? Skóra oddycha, a broda rośnie zdrowsza i mocniejsza.
            </p>

            <div className="bg-[#1f2629] p-[24px] rounded-[8px] mt-[40px] mb-[20px] shrink-0 border border-gray-700">
              <h1 className="text-[24px] text-prime font-bold flex items-center gap-2">
                <span>💡</span> Pro Tip od barbera:
              </h1>
              <p className="text-[16px] text-white font-light mt-4 leading-relaxed">
                Jeśli masz <b className="text-prime">brodę twardą i suchą</b>, potraktuj ją tak samo jak
                włosy na głowie. Użyj <b className="text-prime">nawilżającej odżywki lub maski do włosów</b> – to świetny
                sposób, żeby zmiękczyć zarost i ułatwić jego codzienną stylizację.
              </p>
            </div>
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
    <div className="relative h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="flex-1 overflow-auto w-full">
        <div className="flex items-center justify-center p-[16px] pb-[5%]">
          <div
            className="w-full bg-[#171D1F] flex flex-col p-[24px] rounded-[10px] z-10"
            style={{ boxShadow: "0px 8px 10px #00000099" }}
          >
            <div className="rounded-[6px] overflow-hidden aspect-[9/16] max-h-[60vh] w-full mb-[24px]">
              <img
                src={Blog2}
                alt="Pielęgnacja brody"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[28px] text-prime font-bold mt-[8px] leading-tight">
              Jak pielęgnować brodę, żeby była gęsta i zadbana?
            </h1>
            <p className="text-[15px] text-gray-200 mt-[16px] font-light leading-relaxed">
              Broda to symbol męskości, ale tylko wtedy, gdy jest odpowiednio
              zadbana. Zaniedbana potrafi postarzać, dodać niechlujności i
              sprawiać, że cała stylizacja wygląda mniej atrakcyjnie. Dobra
              wiadomość jest taka, że gęsta i zdrowa broda to nie tylko geny –
              ogromną rolę odgrywa właściwa pielęgnacja.
            </p>
            
            <hr className="border-[white] opacity-10 my-[32px]" />
            
            <h1 className="text-[22px] text-prime font-bold mt-[10px]">
              1. Mycie – podstawa pielęgnacji
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Wielu mężczyzn wciąż myje brodę zwykłym szamponem do włosów lub,
              co gorsza, żelem pod prysznic. To błąd! Skóra pod brodą jest
              delikatna, a włos twardszy niż na głowie – wymaga innej pielęgnacji.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Używaj <b className="text-prime">specjalnych szamponów do brody</b> lub delikatnych produktów do
              twarzy, które oczyszczą, ale nie przesuszą.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              2. Nawilżanie i odżywianie
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Sucha broda = łupież, swędzenie i nieestetyczny wygląd. Codziennie stosuj <b className="text-prime">olejek do brody</b>, który:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>zmiękcza włosy,</li>
              <li>nadaje im zdrowy połysk,</li>
              <li>nawilża skórę pod brodą,</li>
              <li>ułatwia stylizację.</li>
            </ul>
            <p className="text-[15px] text-white mt-[16px] font-light leading-relaxed">
              Dłuższe brody polubią również <b className="text-prime">balsamy</b>, które dodatkowo ujarzmiają niesforne włoski.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              3. Regularne przycinanie i kontury
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Broda rośnie nierówno – dlatego tak ważne są wizyty u barbera. To
              właśnie on wyrówna kształt, nada jej formę i zadba o linie, które
              samemu trudno utrzymać.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Odwiedzaj barbera <b className="text-prime">co 2–3 tygodnie</b>, żeby utrzymać schludny wygląd.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              4. Codzienna stylizacja i czesanie
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Szczotka do brody (kartacz) z naturalnego włosia lub grzebień to
              must-have. Regularne czesanie:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>pobudza krążenie,</li>
              <li>rozprowadza sebum i olejek na całej długości,</li>
              <li>zapobiega kołtunom,</li>
              <li>sprawia, że broda układa się naturalnie.</li>
            </ul>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              5. Zdrowy styl życia
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Gęsta broda to także efekt tego, co dzieje się w środku organizmu. Zadbaj o:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li><b className="text-prime">dietę bogatą w białko, cynk, witaminy z grupy B,</b></li>
              <li>odpowiednią ilość snu,</li>
              <li>ograniczenie stresu.</li>
            </ul>
            <p className="text-[15px] text-white mt-[16px] font-light leading-relaxed">
              To wszystko wspiera wzrost włosów i ich kondycję.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              6. Peeling – sekret zdrowej skóry pod brodą
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Często zapominamy, że pod brodą też jest skóra, która potrzebuje
              oczyszczenia. Resztki kosmetyków, martwy naskórek i sebum mogą
              blokować mieszki włosowe i prowadzić do podrażnień czy wrastających włosków.
            </p>
            <p className="text-[15px] text-white mt-[16px] font-light leading-relaxed">
              Raz w tygodniu wykonaj <b className="text-prime">peeling enzymatyczny</b>, który:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>delikatnie złuszcza zrogowaciały naskórek,</li>
              <li>odblokowuje mieszki włosowe,</li>
              <li>nawilża i odświeża skórę.</li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Efekt? Skóra oddycha, a broda rośnie zdrowsza i mocniejsza.
            </p>

            <div className="bg-[#1f2629] p-[20px] rounded-[8px] mt-[32px] mb-[20px] border border-gray-700">
              <h1 className="text-[20px] text-prime font-bold flex items-center gap-2">
                <span>💡</span> Pro Tip od barbera:
              </h1>
              <p className="text-[15px] text-white font-light mt-4 leading-relaxed">
                Jeśli masz <b className="text-prime">brodę twardą i suchą</b>, potraktuj ją tak samo jak
                włosy na głowie. Użyj <b className="text-prime">nawilżającej odżywki lub maski do włosów</b> – to świetny
                sposób, żeby zmiękczyć zarost i ułatwić jego codzienną stylizację.
              </p>
            </div>
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

export default BlogBeardCondition;