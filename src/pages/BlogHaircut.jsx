import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog7 from "../assets/blog7.webp";

const BlogHaircut = () => {
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
              src={Blog7}
              alt="Dobra fryzura"
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
              Dobra fryzura = dobre wrażenie
            </h1>
            <p className="text-[18px] text-gray-200 mt-[24px] font-light leading-relaxed">
              Mówi się, że nie szata zdobi człowieka – ale prawda jest taka, że
              <b className="text-prime"> pierwsze wrażenie ma ogromne znaczenie</b>. Ludzie oceniają nas
              w ciągu kilku sekund, zanim zdążymy się odezwać. A jednym z
              kluczowych elementów, na który zwracają uwagę, jest fryzura.
            </p>

            <hr className="border-[white] opacity-10 my-[32px] shrink-0" />

            <h1 className="text-[28px] text-prime font-bold mt-[10px]">
              Dlaczego fryzura jest tak ważna?
            </h1>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>
                <b className="text-prime">Podkreśla Twój styl</b> – dobrze dobrane cięcie pasuje do
                kształtu twarzy i Twojej osobowości,
              </li>
              <li>
                <b className="text-prime">Dodaje pewności siebie</b> – z zadbaną fryzurą czujesz się
                lepiej i to widać w Twoim zachowaniu,
              </li>
              <li>
                <b className="text-prime">Buduje profesjonalny wizerunek</b> – szczególnie w pracy i na
                spotkaniach biznesowych.
              </li>
            </ul>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              W pracy – liczy się profesjonalizm
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Nawet jeśli masz świetne kompetencje, zaniedbany wygląd może
              podświadomie obniżać zaufanie do Ciebie. Z kolei{" "}
              <b className="text-prime">schludna fryzura i zadbana broda</b> sprawiają, że inni
              postrzegają Cię jako osobę poukładaną i pewną siebie.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              W codziennym życiu – pierwsze wrażenie robi różnicę
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Wyobraź sobie randkę, spotkanie ze znajomymi albo nawet zwykłą
              rozmowę w urzędzie. Czasem łatwiej jest coś załatwić czy przekonać
              kogoś do siebie, jeśli wyglądasz na osobę zadbaną.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              To sygnał, że dbasz o siebie – a skoro potrafisz zadbać o siebie, potrafisz też zadbać o inne sprawy.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Dobra fryzura to inwestycja w siebie
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Czasem wystarczy kilka minut u barbera i codzienna stylizacja,
              żeby zrobić ogromną różnicę w tym, jak jesteś postrzegany. To
              <b className="text-prime"> prosta inwestycja</b>, która daje realne korzyści – w pracy, w
              relacjach i w codziennym życiu.
            </p>

            <div className="bg-[#1f2629] p-[24px] rounded-[8px] mt-[40px] mb-[20px] shrink-0 border border-gray-700">
              <h1 className="text-[24px] text-prime font-bold flex items-center gap-2">
               Podsumowanie:
              </h1>
              <p className="text-[16px] text-white font-light mt-4 leading-relaxed">
                Dobra fryzura to nie tylko kwestia wyglądu. To narzędzie, które
                pomaga Ci budować wizerunek, dodaje pewności siebie i sprawia, że
                inni postrzegają Cię lepiej. Dlatego warto o nią zadbać – bo
                pierwsze wrażenie możesz zrobić tylko raz.
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
                src={Blog7}
                alt="Dobra fryzura"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[28px] text-prime font-bold mt-[8px] leading-tight">
              Dobra fryzura = dobre wrażenie
            </h1>
            <p className="text-[15px] text-gray-200 mt-[16px] font-light leading-relaxed">
              Mówi się, że nie szata zdobi człowieka – ale prawda jest taka, że
              <b className="text-prime"> pierwsze wrażenie ma ogromne znaczenie</b>. Ludzie oceniają nas
              w ciągu kilku sekund, zanim zdążymy się odezwać. A jednym z
              kluczowych elementów, na który zwracają uwagę, jest fryzura.
            </p>
            
            <hr className="border-[white] opacity-10 my-[32px]" />
            
            <h1 className="text-[22px] text-prime font-bold mt-[10px]">
              Dlaczego fryzura jest tak ważna?
            </h1>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>
                <b className="text-prime">Podkreśla Twój styl</b> – dobrze dobrane cięcie pasuje do
                kształtu twarzy i Twojej osobowości,
              </li>
              <li>
                <b className="text-prime">Dodaje pewności siebie</b> – z zadbaną fryzurą czujesz się
                lepiej i to widać w Twoim zachowaniu,
              </li>
              <li>
                <b className="text-prime">Buduje profesjonalny wizerunek</b> – szczególnie w pracy i na
                spotkaniach biznesowych.
              </li>
            </ul>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              W pracy – liczy się profesjonalizm
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Nawet jeśli masz świetne kompetencje, zaniedbany wygląd może
              podświadomie obniżać zaufanie do Ciebie. Z kolei{" "}
              <b className="text-prime">schludna fryzura i zadbana broda</b> sprawiają, że inni
              postrzegają Cię jako osobę poukładaną i pewną siebie.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              W codziennym życiu – pierwsze wrażenie robi różnicę
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Wyobraź sobie randkę, spotkanie ze znajomymi albo nawet zwykłą
              rozmowę w urzędzie. Czasem łatwiej jest coś załatwić czy przekonać
              kogoś do siebie, jeśli wyglądasz na osobę zadbaną.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              To sygnał, że dbasz o siebie – a skoro potrafisz zadbać o siebie, potrafisz też zadbać o inne sprawy.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Dobra fryzura to inwestycja w siebie
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Czasem wystarczy kilka minut u barbera i codzienna stylizacja,
              żeby zrobić ogromną różnicę w tym, jak jesteś postrzegany. To
              <b className="text-prime"> prosta inwestycja</b>, która daje realne korzyści – w pracy, w
              relacjach i w codziennym życiu.
            </p>

            <div className="bg-[#1f2629] p-[20px] rounded-[8px] mt-[32px] mb-[20px] border border-gray-700">
              <h1 className="text-[20px] text-prime font-bold flex items-center gap-2">
               Podsumowanie:
              </h1>
              <p className="text-[15px] text-white font-light mt-4 leading-relaxed">
                Dobra fryzura to nie tylko kwestia wyglądu. To narzędzie, które
                pomaga Ci budować wizerunek, dodaje pewności siebie i sprawia, że
                inni postrzegają Cię lepiej. Dlatego warto o nią zadbać – bo
                pierwsze wrażenie możesz zrobić tylko raz.
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

export default BlogHaircut;