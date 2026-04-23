import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog6 from "../assets/blog6.webp";

const BlogHairStyling = () => {
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
              src={Blog6}
              alt="Stylizacja włosów"
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
              Stylizacja włosów – jak to zrobić dobrze?
            </h1>
            <p className="text-[18px] text-gray-200 mt-[24px] font-light leading-relaxed">
              Dobra fryzura to połowa sukcesu, ale bez odpowiedniej stylizacji
              nawet najlepsze cięcie nie pokaże swojego potencjału. Wielu
              facetów uważa, że to skomplikowane i czasochłonne, a prawda jest
              taka, że wystarczy 5 minut rano, żeby włosy wyglądały świetnie
              przez cały dzień.
            </p>

            <hr className="border-[white] opacity-10 my-[32px] shrink-0" />

            <h1 className="text-[28px] text-prime font-bold mt-[10px]">
              Co będzie Ci potrzebne?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              <b className="text-prime">1. Tonik do włosów</b> – np. Reuzel Grooming Tonic, który daje
              lekkie utrwalenie, chroni włosy przed ciepłem suszarki i ułatwia
              stylizację.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              <b className="text-prime">2. Produkt do wykończenia fryzury</b> – tu wybór zależy od efektu, jaki chcesz uzyskać:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>
                <b className="text-prime">Pomada z połyskiem</b> – idealna do klasycznych, eleganckich fryzur.
              </li>
              <li>
                <b className="text-prime">Pomada matowa</b> – naturalny efekt bez świecenia, świetna do codziennego looku.
              </li>
              <li>
                <b className="text-prime">Puder do włosów</b> – jeśli potrzebujesz więcej objętości i lekkiego uniesienia.
              </li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              <b className="text-prime">3. Suszarka</b> – nie musi być profesjonalna, ale ważne, żeby używać średniego nawiewu.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Krok po kroku – szybka stylizacja
            </h1>
            <ol className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-decimal leading-relaxed">
              <li>
                <b className="text-prime">Na mokre włosy</b> nałóż niewielką ilość toniku.
              </li>
              <li>
                <b className="text-prime">Susz włosy suszarką</b> przez kilka minut, układając je dłonią lub szczotką w wybranym kierunku.
              </li>
              <li>
                <b className="text-prime">Nałóż wybrany produkt</b> (pomadę lub puder) – pamiętaj, żeby zacząć od małej ilości, zawsze możesz dołożyć więcej.
              </li>
              <li>
                <b className="text-prime">Utrwal fryzurę</b> ruchem dłoni lub grzebienia – zależnie od tego, czy chcesz efekt elegancki, czy bardziej swobodny.
              </li>
            </ol>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Dlaczego warto poświęcić te 5 minut?
            </h1>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>fryzura wygląda świeżo i schludnie przez cały dzień,</li>
              <li>włosy są łatwiejsze w kontrolowaniu,</li>
              <li>dobrze dobrany produkt chroni włosy przed wysuszeniem,</li>
              <li>wyglądasz po prostu lepiej i bardziej pewnie.</li>
            </ul>

            <div className="bg-[#1f2629] p-[24px] rounded-[8px] mt-[40px] mb-[20px] shrink-0 border border-gray-700">
              <h1 className="text-[24px] text-prime font-bold">
                Podsumowanie:
              </h1>
              <p className="text-[16px] text-white font-light mt-4 leading-relaxed">
                Stylizacja włosów to nie magia ani strata czasu. Wystarczy <b className="text-prime">tonik, suszarka i dobrze dobrana pomada albo puder</b>, żeby w kilka minut stworzyć fryzurę, która podkreśli Twój styl. A jeśli nie wiesz, który produkt będzie najlepszy dla Ciebie – w Mento dobierzemy kosmetyki i pokażemy, jak ich używać.
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
                src={Blog6}
                alt="Stylizacja włosów"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[28px] text-prime font-bold mt-[8px] leading-tight">
              Stylizacja włosów – jak to zrobić dobrze?
            </h1>
            <p className="text-[15px] text-gray-200 mt-[16px] font-light leading-relaxed">
              Dobra fryzura to połowa sukcesu, ale bez odpowiedniej stylizacji
              nawet najlepsze cięcie nie pokaże swojego potencjału. Wielu
              facetów uważa, że to skomplikowane i czasochłonne, a prawda jest
              taka, że wystarczy 5 minut rano, żeby włosy wyglądały świetnie
              przez cały dzień.
            </p>
            
            <hr className="border-[white] opacity-10 my-[32px]" />
            
            <h1 className="text-[22px] text-prime font-bold mt-[10px]">
              Co będzie Ci potrzebne?
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              <b className="text-prime">1. Tonik do włosów</b> – np. Reuzel Grooming Tonic, który daje
              lekkie utrwalenie, chroni włosy przed ciepłem suszarki i ułatwia
              stylizację.
            </p>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              <b className="text-prime">2. Produkt do wykończenia fryzury</b> – tu wybór zależy od efektu, jaki chcesz uzyskać:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>
                <b className="text-prime">Pomada z połyskiem</b> – idealna do klasycznych, eleganckich fryzur.
              </li>
              <li>
                <b className="text-prime">Pomada matowa</b> – naturalny efekt bez świecenia, świetna do codziennego looku.
              </li>
              <li>
                <b className="text-prime">Puder do włosów</b> – jeśli potrzebujesz więcej objętości i lekkiego uniesienia.
              </li>
            </ul>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              <b className="text-prime">3. Suszarka</b> – nie musi być profesjonalna, ale ważne, żeby używać średniego nawiewu.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Krok po kroku – szybka stylizacja
            </h1>
            <ol className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-decimal leading-relaxed">
              <li>
                <b className="text-prime">Na mokre włosy</b> nałóż niewielką ilość toniku.
              </li>
              <li>
                <b className="text-prime">Susz włosy suszarką</b> przez kilka minut, układając je dłonią lub szczotką w wybranym kierunku.
              </li>
              <li>
                <b className="text-prime">Nałóż wybrany produkt</b> (pomadę lub puder) – pamiętaj, żeby zacząć od małej ilości, zawsze możesz dołożyć więcej.
              </li>
              <li>
                <b className="text-prime">Utrwal fryzurę</b> ruchem dłoni lub grzebienia – zależnie od tego, czy chcesz efekt elegancki, czy bardziej swobodny.
              </li>
            </ol>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Dlaczego warto poświęcić te 5 minut?
            </h1>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>fryzura wygląda świeżo i schludnie przez cały dzień,</li>
              <li>włosy są łatwiejsze w kontrolowaniu,</li>
              <li>dobrze dobrany produkt chroni włosy przed wysuszeniem,</li>
              <li>wyglądasz po prostu lepiej i bardziej pewnie.</li>
            </ul>

            <div className="bg-[#1f2629] p-[20px] rounded-[8px] mt-[32px] mb-[20px] border border-gray-700">
              <h1 className="text-[20px] text-prime font-bold">
                Podsumowanie:
              </h1>
              <p className="text-[15px] text-white font-light mt-4 leading-relaxed">
                Stylizacja włosów to nie magia ani strata czasu. Wystarczy <b className="text-prime">tonik, suszarka i dobrze dobrana pomada albo puder</b>, żeby w kilka minut stworzyć fryzurę, która podkreśli Twój styl. A jeśli nie wiesz, który produkt będzie najlepszy dla Ciebie – w Mento dobierzemy kosmetyki i pokażemy, jak ich używać.
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

export default BlogHairStyling;