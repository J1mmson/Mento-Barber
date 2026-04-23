import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog1 from "../assets/blog1.webp";

const BlogFrequency = () => {
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
              src={Blog1}
              alt="Częstotliwość wizyt u barbera"
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
              Co ile powinienem chodzić do barbera na strzyżenie?
            </h1>
            <p className="text-[18px] text-gray-200 mt-[24px] font-light leading-relaxed">
              To jedno z najczęstszych pytań, które słyszymy w barbershopie.
              Odpowiedź nie jest jednak taka sama dla każdego – wszystko zależy
              od tego, jak szybko rosną Twoje włosy, jaką fryzurę nosisz i jak
              chcesz wyglądać na co dzień.
            </p>

            <hr className="border-[white] opacity-10 my-[32px] shrink-0" />

            <h1 className="text-[28px] text-prime font-bold mt-[10px]">
              1. Krótkie fryzury (fade, buzz cut, crew cut)
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli wybierasz krótkie cięcia, szczególnie z cieniowaniem od
              zera, to włosy zaczynają tracić kształt już po 2 tygodniach.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 2–3 tygodnie.</b>
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              2. Średnie długości (side part, french crop, klasyki)
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Przy średniej długości włosów fryzura jest bardziej wyrozumiała.
              Możesz chodzić rzadziej, ale wciąż warto dbać o linie i kontury.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 3–4 tygodnie.</b>
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              3. Długie włosy
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Dłuższe fryzury wymagają mniej częstych wizyt, ale trzeba je
              regularnie podcinać, aby zachować zdrowe końcówki i kształt.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 6–8 tygodni.</b>
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              4. Broda – nie zapominaj o niej!
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli nosisz brodę, to tak samo jak fryzura potrzebuje regularnego
              korygowania. Nierówne linie psują cały efekt.
            </p>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 2–3 tygodnie</b> (w zależności od tempa wzrostu).
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Dlaczego warto trzymać się regularności?
            </h1>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>fryzura zawsze wygląda świeżo,</li>
              <li>włosy i broda są łatwiejsze w codziennej stylizacji,</li>
              <li>unikasz &quot;okresu przejściowego&quot;, w którym wyglądają niechlujnie,</li>
              <li>dbasz o kondycję włosów i skóry głowy.</li>
            </ul>

            <div className="bg-[#1f2629] p-[24px] rounded-[8px] mt-[40px] mb-[20px] shrink-0 border border-gray-700">
              <h1 className="text-[24px] text-prime font-bold flex items-center gap-2">
               Podsumowanie:
              </h1>
              <p className="text-[16px] text-white font-light mt-4 leading-relaxed">
                Nie ma jednej złotej zasady dla wszystkich. Najprościej zapamiętać:
                <br /><br />
                <span className="font-semibold text-prime">krótko = częściej,</span><br />
                <span className="font-semibold text-prime">długo = rzadziej.</span>
                <br /><br />
                Ale jeśli chcesz wyglądać perfekcyjnie każdego dnia – regularne
                wizyty u barbera to najlepsza inwestycja w Twój wizerunek.
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
                src={Blog1}
                alt="Częstotliwość wizyt u barbera"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[28px] text-prime font-bold mt-[8px] leading-tight">
              Co ile powinienem chodzić do barbera na strzyżenie?
            </h1>
            <p className="text-[15px] text-gray-200 mt-[16px] font-light leading-relaxed">
              To jedno z najczęstszych pytań, które słyszymy w barbershopie.
              Odpowiedź nie jest jednak taka sama dla każdego – wszystko zależy
              od tego, jak szybko rosną Twoje włosy, jaką fryzurę nosisz i jak
              chcesz wyglądać na co dzień.
            </p>
            
            <hr className="border-[white] opacity-10 my-[32px]" />
            
            <h1 className="text-[22px] text-prime font-bold mt-[10px]">
              1. Krótkie fryzury (fade, buzz cut, crew cut)
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli wybierasz krótkie cięcia, szczególnie z cieniowaniem od
              zera, to włosy zaczynają tracić kształt już po 2 tygodniach.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 2–3 tygodnie.</b>
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              2. Średnie długości (side part, french crop, klasyki)
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Przy średniej długości włosów fryzura jest bardziej wyrozumiała.
              Możesz chodzić rzadziej, ale wciąż warto dbać o linie i kontury.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 3–4 tygodnie.</b>
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              3. Długie włosy
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Dłuższe fryzury wymagają mniej częstych wizyt, ale trzeba je
              regularnie podcinać, aby zachować zdrowe końcówki i kształt.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 6–8 tygodni.</b>
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              4. Broda – nie zapominaj o niej!
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli nosisz brodę, to tak samo jak fryzura potrzebuje regularnego
              korygowania. Nierówne linie psują cały efekt.
            </p>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              Optymalna częstotliwość: <b className="text-prime">co 2–3 tygodnie</b> (w zależności od tempa wzrostu).
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Dlaczego warto trzymać się regularności?
            </h1>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>fryzura zawsze wygląda świeżo,</li>
              <li>włosy i broda są łatwiejsze w codziennej stylizacji,</li>
              <li>unikasz &quot;okresu przejściowego&quot;, w którym wyglądają niechlujnie,</li>
              <li>dbasz o kondycję włosów i skóry głowy.</li>
            </ul>

            <div className="bg-[#1f2629] p-[20px] rounded-[8px] mt-[32px] mb-[20px] border border-gray-700">
              <h1 className="text-[20px] text-prime font-bold flex items-center gap-2">
               Podsumowanie:
              </h1>
              <p className="text-[15px] text-white font-light mt-4 leading-relaxed">
                Nie ma jednej złotej zasady dla wszystkich. Najprościej zapamiętać:
                <br /><br />
                <span className="font-semibold text-prime">krótko = częściej,</span><br />
                <span className="font-semibold text-prime">długo = rzadziej.</span>
                <br /><br />
                Ale jeśli chcesz wyglądać perfekcyjnie każdego dnia – regularne
                wizyty u barbera to najlepsza inwestycja w Twój wizerunek.
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

export default BlogFrequency;