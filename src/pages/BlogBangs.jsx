// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog4 from "../assets/blog4.webp";

const BlogBangs = () => {
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
                src={Blog4}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[6px]">
              Wypadanie włosów
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Każdy z nas traci włosy – to naturalny proces. Średnio wypada nam
              od 50 do 100 włosów dziennie i nie ma w tym nic niepokojącego.
              Problem pojawia się wtedy, gdy włosów wypada coraz więcej, fryzura
              traci gęstość, a zakola czy przerzedzenia zaczynają być coraz
              bardziej widoczne. Na szczęście istnieją sposoby, by ten proces
              spowolnić i zadbać o zdrowie skóry głowy.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              1. Zadbaj o skórę głowy
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Wypadanie włosów często zaczyna się właśnie od problemów ze skórą
              głowy.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              👉 Regularne oczyszczanie i peeling pozwala:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>usunąć martwy naskórek,</li>
              <li>odblokować mieszki włosowe,</li>
              <li>poprawić krążenie i dotlenienie cebulek.</li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              W Mento Care oferujemy głębokie oczyszczanie skóry głowy, które
              jest świetnym pierwszym krokiem w walce z wypadaniem włosów
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              2. Odpowiednia pielęgnacja
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Nie każdy szampon działa tak samo – źle dobrany kosmetyk może
              przesuszać skórę lub zatykać mieszki włosowe.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              👉 Warto postawić na szampony i toniki pobudzające krążenie oraz
              wzmacniające cebulki włosów.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              3. Dieta i styl życia
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Włosy to odbicie tego, co dzieje się w organizmie.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              👉 Postaw na dietę bogatą w:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>białko (mięso, ryby, jajka, rośliny strączkowe),</li>
              <li>żelazo i cynk,</li>
              <li>witaminy z grupy B i D.</li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Unikaj przewlekłego stresu i zadbaj o sen – oba czynniki mają
              ogromny wpływ na kondycję włosów.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              4. Profesjonalna konsultacja
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Jeśli zauważasz, że problem się nasila, nie działaj na własną
              rękę.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              👉 W Mento Care zapraszamy na konsultację kosmetologiczną –
              ocenimy stan skóry głowy i dobierzemy indywidualną terapię. W
              niektórych przypadkach pomożemy Ci również znaleźć specjalistę,
              jeśli problem wymaga szerszej diagnostyki.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              5. Regularne masaże skóry głowy
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Masaż to prosta, ale skuteczna metoda – poprawia krążenie,
              dotlenia skórę i wspiera cebulki włosów. Możesz wykonywać go sam w
              domu lub skorzystać z profesjonalnych zabiegów w Mento Care.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              💈 Podsumowanie:
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light mb-[42px]">
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
                src={Blog4}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[6px]">
              Wypadanie włosów
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Każdy z nas traci włosy – to naturalny proces. Średnio wypada nam
              od 50 do 100 włosów dziennie i nie ma w tym nic niepokojącego.
              Problem pojawia się wtedy, gdy włosów wypada coraz więcej, fryzura
              traci gęstość, a zakola czy przerzedzenia zaczynają być coraz
              bardziej widoczne. Na szczęście istnieją sposoby, by ten proces
              spowolnić i zadbać o zdrowie skóry głowy.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              1. Zadbaj o skórę głowy
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Wypadanie włosów często zaczyna się właśnie od problemów ze skórą
              głowy.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              👉 Regularne oczyszczanie i peeling pozwala:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>usunąć martwy naskórek,</li>
              <li>odblokować mieszki włosowe,</li>
              <li>poprawić krążenie i dotlenienie cebulek.</li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              W Mento Care oferujemy głębokie oczyszczanie skóry głowy, które
              jest świetnym pierwszym krokiem w walce z wypadaniem włosów
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              2. Odpowiednia pielęgnacja
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Nie każdy szampon działa tak samo – źle dobrany kosmetyk może
              przesuszać skórę lub zatykać mieszki włosowe.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              👉 Warto postawić na szampony i toniki pobudzające krążenie oraz
              wzmacniające cebulki włosów.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              3. Dieta i styl życia
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Włosy to odbicie tego, co dzieje się w organizmie.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              👉 Postaw na dietę bogatą w:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>białko (mięso, ryby, jajka, rośliny strączkowe),</li>
              <li>żelazo i cynk,</li>
              <li>witaminy z grupy B i D.</li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Unikaj przewlekłego stresu i zadbaj o sen – oba czynniki mają
              ogromny wpływ na kondycję włosów.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              4. Profesjonalna konsultacja
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Jeśli zauważasz, że problem się nasila, nie działaj na własną
              rękę.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              👉 W Mento Care zapraszamy na konsultację kosmetologiczną –
              ocenimy stan skóry głowy i dobierzemy indywidualną terapię. W
              niektórych przypadkach pomożemy Ci również znaleźć specjalistę,
              jeśli problem wymaga szerszej diagnostyki.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              5. Regularne masaże skóry głowy
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Masaż to prosta, ale skuteczna metoda – poprawia krążenie,
              dotlenia skórę i wspiera cebulki włosów. Możesz wykonywać go sam w
              domu lub skorzystać z profesjonalnych zabiegów w Mento Care.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              💈 Podsumowanie:
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light mb-[42px]">
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
