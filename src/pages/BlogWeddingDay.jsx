import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog3 from "../assets/haircut3.webp";

const BlogWeddingDay = () => {
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
              src={Blog3}
              alt="Pan młody"
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
              Jak pan młody powinien przygotować się do wielkiego dnia?
            </h1>
            <p className="text-[18px] text-gray-200 mt-[24px] font-light leading-relaxed">
              Ślub to wyjątkowe wydarzenie – wszystko musi być dopięte na
              ostatni guzik. Garnitur, buty, dodatki… ale równie ważny jest
              <b className="text-prime"> wizerunek pana młodego</b>. Odpowiednia fryzura, zadbana broda
              i zdrowa skóra twarzy sprawią, że w tym dniu będziesz wyglądał
              pewnie i świeżo. Jak to zaplanować?
            </p>

            <hr className="border-[white] opacity-10 my-[32px] shrink-0" />

            <h1 className="text-[28px] text-prime font-bold mt-[10px]">
              Minimum 6 tygodni przed ślubem – pierwsza wizyta w Mento Barbershop Bochnia
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Nie odkładaj przygotowań na ostatnią chwilę.{" "}
              <b className="text-prime">
                Najpóźniej 6 tygodni przed weselem umów się na strzyżenie w Mento Barbershop w Bochni.
              </b>
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Podczas tej wizyty:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>ocenimy kształt fryzury,</li>
              <li>dobierzemy cięcie do Twojej twarzy,</li>
              <li>podpowiemy, czy lepiej zapuścić włosy, czy je skrócić.</li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Dzięki temu będziemy mieć czas, żeby wypracować idealny efekt na dzień ślubu.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Zadbaj o skórę – Mento Care w Bochni
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Twój wygląd to nie tylko fryzura i broda. Skóra również potrzebuje
              uwagi. Dlatego polecamy wizytę w <b className="text-prime">Mento Care Bochnia</b>, gdzie Faustyna
              zadba o cerę:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>oczyści ją z zanieczyszczeń,</li>
              <li>nawilży i odświeży,</li>
              <li>przygotuje skórę do tego, by wyglądała zdrowo i promiennie w dniu ślubu.</li>
            </ul>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Dzień przed weselem – finałowe przygotowania
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Na dzień przed tym wielkim wydarzeniem zaplanuj wizytę w Mento Barber Shop Bochnia:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>wykonamy <b className="text-prime">ślubne strzyżenie</b>,</li>
              <li>zadbamy o brodę i kontury,</li>
              <li>zrobimy <b className="text-prime">zabieg pielęgnacyjny na twarz</b>, który nada skórze świeżości i blasku.</li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              To moment, w którym dopieszczamy każdy detal – Ty możesz się zrelaksować, a my zadbamy o perfekcyjny efekt.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              W dniu ślubu – tylko stylizacja
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              W dzień ceremonii nie ma czasu na długie zabiegi. Wystarczy, że:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>w domu weźmiesz prysznic, aby spłukać ewentualne resztki włosów po wczorajszym strzyżeniu,</li>
              <li>przyjdziesz do nas na <b className="text-prime">samą stylizację włosów i brody</b>,</li>
              <li>pojawisz się w koszuli lub ubraniu, które nie wymaga zakładania przez głowę – unikniesz psucia fryzury.</li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Wtedy w pełnym spokoju, bez nerwów, będziesz gotowy, aby powiedzieć sakramentalne &quot;tak&quot;.
            </p>

            <div className="bg-[#1f2629] p-[24px] rounded-[8px] mt-[40px] mb-[20px] shrink-0 border border-gray-700">
              <h1 className="text-[24px] text-prime font-bold">
                Podsumowanie:
              </h1>
              <p className="text-[16px] text-white font-light mt-4 leading-relaxed">
                Przygotowania pana młodego do ślubu to nie tylko garnitur i spinki
                do mankietów. To także plan pielęgnacyjny, który zaczyna się
                <b className="text-prime"> minimum 6 tygodni wcześniej</b> i kończy się tuż przed
                ceremonią. W Mento zadbamy o każdy szczegół – fryzurę, brodę i
                skórę – tak, byś w dniu ślubu wyglądał i czuł się TOP!
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
                src={Blog3}
                alt="Pan młody"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[28px] text-prime font-bold mt-[8px] leading-tight">
              Jak pan młody powinien przygotować się do wielkiego dnia?
            </h1>
            <p className="text-[15px] text-gray-200 mt-[16px] font-light leading-relaxed">
              Ślub to wyjątkowe wydarzenie – wszystko musi być dopięte na
              ostatni guzik. Garnitur, buty, dodatki… ale równie ważny jest
              <b className="text-prime"> wizerunek pana młodego</b>. Odpowiednia fryzura, zadbana broda
              i zdrowa skóra twarzy sprawią, że w tym dniu będziesz wyglądał
              pewnie i świeżo. Jak to zaplanować?
            </p>
            
            <hr className="border-[white] opacity-10 my-[32px]" />
            
            <h1 className="text-[22px] text-prime font-bold mt-[10px]">
              Minimum 6 tygodni przed ślubem – pierwsza wizyta w Mento Barbershop Bochnia
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Nie odkładaj przygotowań na ostatnią chwilę.{" "}
              <b className="text-prime">
                Najpóźniej 6 tygodni przed weselem umów się na strzyżenie w Mento Barbershop w Bochni.
              </b>
            </p>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Podczas tej wizyty:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>ocenimy kształt fryzury,</li>
              <li>dobierzemy cięcie do Twojej twarzy,</li>
              <li>podpowiemy, czy lepiej zapuścić włosy, czy je skrócić.</li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Dzięki temu będziemy mieć czas, żeby wypracować idealny efekt na dzień ślubu.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Zadbaj o skórę – Mento Care w Bochni
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Twój wygląd to nie tylko fryzura i broda. Skóra również potrzebuje
              uwagi. Dlatego polecamy wizytę w <b className="text-prime">Mento Care Bochnia</b>, gdzie Faustyna
              zadba o cerę:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>oczyści ją z zanieczyszczeń,</li>
              <li>nawilży i odświeży,</li>
              <li>przygotuje skórę do tego, by wyglądała zdrowo i promiennie w dniu ślubu.</li>
            </ul>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Dzień przed weselem – finałowe przygotowania
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Na dzień przed tym wielkim wydarzeniem zaplanuj wizytę w Mento Barber Shop Bochnia:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>wykonamy <b className="text-prime">ślubne strzyżenie</b>,</li>
              <li>zadbamy o brodę i kontury,</li>
              <li>zrobimy <b className="text-prime">zabieg pielęgnacyjny na twarz</b>, który nada skórze świeżości i blasku.</li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              To moment, w którym dopieszczamy każdy detal – Ty możesz się zrelaksować, a my zadbamy o perfekcyjny efekt.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              W dniu ślubu – tylko stylizacja
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              W dzień ceremonii nie ma czasu na długie zabiegi. Wystarczy, że:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>w domu weźmiesz prysznic, aby spłukać ewentualne resztki włosów po wczorajszym strzyżeniu,</li>
              <li>przyjdziesz do nas na <b className="text-prime">samą stylizację włosów i brody</b>,</li>
              <li>pojawisz się w koszuli lub ubraniu, które nie wymaga zakładania przez głowę – unikniesz psucia fryzury.</li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Wtedy w pełnym spokoju, bez nerwów, będziesz gotowy, aby powiedzieć sakramentalne &quot;tak&quot;.
            </p>

            <div className="bg-[#1f2629] p-[20px] rounded-[8px] mt-[32px] mb-[20px] border border-gray-700">
              <h1 className="text-[20px] text-prime font-bold">
                Podsumowanie:
              </h1>
              <p className="text-[15px] text-white font-light mt-4 leading-relaxed">
                Przygotowania pana młodego do ślubu to nie tylko garnitur i spinki
                do mankietów. To także plan pielęgnacyjny, który zaczyna się
                <b className="text-prime"> minimum 6 tygodni wcześniej</b> i kończy się tuż przed
                ceremonią. W Mento zadbamy o każdy szczegół – fryzurę, brodę i
                skórę – tak, byś w dniu ślubu wyglądał i czuł się TOP!
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

export default BlogWeddingDay;