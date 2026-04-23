import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog4 from "../assets/blog4.webp";

const BlogBangs = () => {
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
              src={Blog4}
              alt="Wypadanie włosów"
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
              Wypadanie włosów
            </h1>
            <p className="text-[18px] text-gray-200 mt-[24px] font-light leading-relaxed">
              Każdy z nas traci włosy – to naturalny proces. Średnio wypada nam
              od 50 do 100 włosów dziennie i nie ma w tym nic niepokojącego.
              Problem pojawia się wtedy, gdy włosów wypada coraz więcej, fryzura
              traci gęstość, a zakola czy przerzedzenia zaczynają być coraz
              bardziej widoczne. Na szczęście istnieją sposoby, by ten proces
              spowolnić i zadbać o zdrowie skóry głowy.
            </p>

            <hr className="border-[white] opacity-10 my-[32px] shrink-0" />

            <h1 className="text-[28px] text-prime font-bold mt-[10px]">
              1. Zadbaj o skórę głowy
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Wypadanie włosów często zaczyna się właśnie od problemów ze skórą głowy.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Regularne oczyszczanie i peeling pozwala:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>usunąć martwy naskórek,</li>
              <li>odblokować mieszki włosowe,</li>
              <li>poprawić krążenie i dotlenienie cebulek.</li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              W Mento Care oferujemy głębokie oczyszczanie skóry głowy, które
              jest świetnym pierwszym krokiem w walce z wypadaniem włosów.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              2. Odpowiednia pielęgnacja
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Nie każdy szampon działa tak samo – źle dobrany kosmetyk może
              przesuszać skórę lub zatykać mieszki włosowe.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Warto postawić na szampony i toniki pobudzające krążenie oraz
              wzmacniające cebulki włosów.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              3. Dieta i styl życia
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Włosy to odbicie tego, co dzieje się w organizmie. Postaw na dietę bogatą w:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>białko (mięso, ryby, jajka, rośliny strączkowe),</li>
              <li>żelazo i cynk,</li>
              <li>witaminy z grupy B i D.</li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Unikaj przewlekłego stresu i zadbaj o sen – oba czynniki mają
              ogromny wpływ na kondycję włosów.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              4. Profesjonalna konsultacja
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli zauważasz, że problem się nasila, nie działaj na własną rękę.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              W Mento Care zapraszamy na konsultację kosmetologiczną –
              ocenimy stan skóry głowy i dobierzemy indywidualną terapię. W
              niektórych przypadkach pomożemy Ci również znaleźć specjalistę,
              jeśli problem wymaga szerszej diagnostyki.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              5. Regularne masaże skóry głowy
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Masaż to prosta, ale skuteczna metoda – poprawia krążenie,
              dotlenia skórę i wspiera cebulki włosów. Możesz wykonywać go sam w
              domu lub skorzystać z profesjonalnych zabiegów w Mento Care.
            </p>

            <div className="bg-[#1f2629] p-[24px] rounded-[8px] mt-[40px] mb-[20px] shrink-0 border border-gray-700">
              <h1 className="text-[24px] text-prime font-bold flex items-center gap-2">
               Podsumowanie:
              </h1>
              <p className="text-[16px] text-white font-light mt-4 leading-relaxed">
                Wypadanie włosów to problem, któremu można zapobiegać, jeśli
                zadziała się odpowiednio wcześnie. Kluczowe są: oczyszczanie skóry
                głowy, właściwa pielęgnacja, zdrowa dieta, redukcja stresu i
                regularne wizyty u specjalisty. W Mento Care znajdziesz wsparcie i
                zabiegi, które realnie poprawią kondycję Twoich włosów i skóry
                głowy.
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
                src={Blog4}
                alt="Wypadanie włosów"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[28px] text-prime font-bold mt-[8px] leading-tight">
              Wypadanie włosów
            </h1>
            <p className="text-[15px] text-gray-200 mt-[16px] font-light leading-relaxed">
              Każdy z nas traci włosy – to naturalny proces. Średnio wypada nam
              od 50 do 100 włosów dziennie i nie ma w tym nic niepokojącego.
              Problem pojawia się wtedy, gdy włosów wypada coraz więcej, fryzura
              traci gęstość, a zakola czy przerzedzenia zaczynają być coraz
              bardziej widoczne. Na szczęście istnieją sposoby, by ten proces
              spowolnić i zadbać o zdrowie skóry głowy.
            </p>
            
            <hr className="border-[white] opacity-10 my-[32px]" />
            
            <h1 className="text-[22px] text-prime font-bold mt-[10px]">
              1. Zadbaj o skórę głowy
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Wypadanie włosów często zaczyna się właśnie od problemów ze skórą głowy.
            </p>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Regularne oczyszczanie i peeling pozwala:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>usunąć martwy naskórek,</li>
              <li>odblokować mieszki włosowe,</li>
              <li>poprawić krążenie i dotlenienie cebulek.</li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              W Mento Care oferujemy głębokie oczyszczanie skóry głowy, które
              jest świetnym pierwszym krokiem w walce z wypadaniem włosów.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              2. Odpowiednia pielęgnacja
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Nie każdy szampon działa tak samo – źle dobrany kosmetyk może
              przesuszać skórę lub zatykać mieszki włosowe.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Warto postawić na szampony i toniki pobudzające krążenie oraz
              wzmacniające cebulki włosów.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              3. Dieta i styl życia
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Włosy to odbicie tego, co dzieje się w organizmie. Postaw na dietę bogatą w:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>białko (mięso, ryby, jajka, rośliny strączkowe),</li>
              <li>żelazo i cynk,</li>
              <li>witaminy z grupy B i D.</li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Unikaj przewlekłego stresu i zadbaj o sen – oba czynniki mają
              ogromny wpływ na kondycję włosów.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              4. Profesjonalna konsultacja
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli zauważasz, że problem się nasila, nie działaj na własną rękę.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              W Mento Care zapraszamy na konsultację kosmetologiczną –
              ocenimy stan skóry głowy i dobierzemy indywidualną terapię. W
              niektórych przypadkach pomożemy Ci również znaleźć specjalistę,
              jeśli problem wymaga szerszej diagnostyki.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              5. Regularne masaże skóry głowy
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Masaż to prosta, ale skuteczna metoda – poprawia krążenie,
              dotlenia skórę i wspiera cebulki włosów. Możesz wykonywać go sam w
              domu lub skorzystać z profesjonalnych zabiegów w Mento Care.
            </p>

            <div className="bg-[#1f2629] p-[20px] rounded-[8px] mt-[32px] mb-[20px] border border-gray-700">
              <h1 className="text-[20px] text-prime font-bold flex items-center gap-2">
                Podsumowanie:
              </h1>
              <p className="text-[15px] text-white font-light mt-4 leading-relaxed">
                Wypadanie włosów to problem, któremu można zapobiegać, jeśli
                zadziała się odpowiednio wcześnie. Kluczowe są: oczyszczanie skóry
                głowy, właściwa pielęgnacja, zdrowa dieta, redukcja stresu i
                regularne wizyty u specjalisty. W Mento Care znajdziesz wsparcie i
                zabiegi, które realnie poprawią kondycję Twoich włosów i skóry
                głowy.
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

export default BlogBangs;