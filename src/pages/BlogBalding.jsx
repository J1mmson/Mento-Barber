import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog5 from "../assets/haircut2.webp";

const BlogBalding = () => {
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
              src={Blog5}
              alt="panel"
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
              Jak zapobiegać łysieniu, gdy geny nie sprzyjają?
            </h1>
            <p className="text-[18px] text-gray-200 mt-[24px] font-light leading-relaxed">
              Łysienie to częsty problem u mężczyzn. Jeśli w Twojej rodzinie
              tata, dziadek czy wujkowie wcześnie tracili włosy, istnieje duże
              prawdopodobieństwo, że u Ciebie będzie podobnie. Ale to wcale nie
              oznacza, że musisz pogodzić się z losem. Dzięki nowoczesnym
              zabiegom możesz działać prewencyjnie i zatrzymać włosy na dłużej.
            </p>

            <hr className="border-[white] opacity-10 my-[32px] shrink-0" />

            <h1 className="text-[28px] text-prime font-bold mt-[10px]">
              Mezoterapia igłowa Dr.CYJ – co to właściwie jest?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Brzmi skomplikowanie, ale zasada jest prosta:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>
                za pomocą bardzo cienkiej igły podaje się w skórę głowy
                specjalny <b className="text-prime">koktajl peptydów i składników odżywczych</b>,
              </li>
              <li>
                zabieg pobudza krążenie, odżywia cebulki i stymuluje wzrost
                włosów,
              </li>
              <li>
                działa tam, gdzie żadne szampony czy odżywki nie są w stanie
                dotrzeć – bezpośrednio do mieszka włosowego.
              </li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              - To jak &quot;doping&quot; dla włosów – dostają energię do
              wzrostu i dłużej utrzymują swoją siłę.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Mikronakłuwanie z egzosomami – regeneracja na poziomie komórkowym
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Tutaj zamiast wstrzykiwania używa się specjalnego urządzenia z
              mikroigiełkami, które robią w skórze bardzo drobne nakłucia.
              Dzięki temu:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc leading-relaxed">
              <li>skóra dostaje sygnał, żeby się regenerować,</li>
              <li>
                mieszki włosowe lepiej wchłaniają podawane w trakcie zabiegu
                <b className="text-prime"> egzosomy</b> – nowoczesne cząsteczki, które wspierają
                odbudowę i wzrost włosów,
              </li>
              <li>poprawia się ukrwienie i dotlenienie skóry głowy.</li>
            </ul>
            <p className="text-[16px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              - Można to porównać do &quot;resetu&quot; dla skóry – pobudzasz
              ją, a ona zaczyna pracować lepiej.
            </p>

            <h1 className="text-[28px] text-prime font-bold mt-[40px]">
              Dlaczego warto zacząć wcześniej?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli wiesz, że masz &quot;gen do łysienia&quot;, nie czekaj, aż
              włosy zaczną wypadać garściami. Profilaktyka działa tylko wtedy,
              gdy w porę zadbasz o mieszki włosowe.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Łatwiej jest <b className="text-prime">utrzymać to, co masz</b>, niż odzyskać włosy,
              które już wypadły.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light leading-relaxed">
              Regularne zabiegi + pielęgnacja = włosy pozostają gęste i mocne na
              dłużej.
            </p>

            <div className="bg-[#1f2629] p-[24px] rounded-[8px] mt-[40px] mb-[20px] shrink-0 border border-gray-700">
              <h1 className="text-[24px] text-prime font-bold flex items-center gap-2">
                <span>💡</span> Pro Tip:
              </h1>
              <p className="text-[16px] text-white font-light mt-2">
                Im szybciej zaczniesz działać, tym większe masz
                szanse, żeby zachować gęste włosy na długie lata. To inwestycja w
                Twój wygląd i pewność siebie.
              </p>
              <p className="text-[16px] text-white mt-[16px] font-medium">
                Umów się na konsultację do Mento Care aby dowiedzieć się więcej:{" "}
                <a
                  href="http://mentocare.booksy.com"
                  className="text-orange-500 hover:text-white transition-colors duration-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mentocare.booksy.com
                </a>
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
                src={Blog5}
                alt="panel"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[28px] text-prime font-bold mt-[8px] leading-tight">
              Jak zapobiegać łysieniu, gdy geny nie sprzyjają?
            </h1>
            <p className="text-[15px] text-gray-200 mt-[16px] font-light leading-relaxed">
              Łysienie to częsty problem u mężczyzn. Jeśli w Twojej rodzinie
              tata, dziadek czy wujkowie wcześnie tracili włosy, istnieje duże
              prawdopodobieństwo, że u Ciebie będzie podobnie. Ale to wcale nie
              oznacza, że musisz pogodzić się z losem. Dzięki nowoczesnym
              zabiegom możesz działać prewencyjnie i zatrzymać włosy na dłużej.
            </p>
            
            <hr className="border-[white] opacity-10 my-[32px]" />
            
            <h1 className="text-[22px] text-prime font-bold">
              Mezoterapia igłowa Dr.CYJ – co to właściwie jest?
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Brzmi skomplikowanie, ale zasada jest prosta:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>
                za pomocą bardzo cienkiej igły podaje się w skórę głowy
                specjalny <b className="text-prime">koktajl peptydów i składników odżywczych</b>,
              </li>
              <li>
                zabieg pobudza krążenie, odżywia cebulki i stymuluje wzrost
                włosów,
              </li>
              <li>
                działa tam, gdzie żadne szampony czy odżywki nie są w stanie
                dotrzeć – bezpośrednio do mieszka włosowego.
              </li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              - To jak &quot;doping&quot; dla włosów – dostają energię do
              wzrostu i dłużej utrzymują swoją siłę.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Mikronakłuwanie z egzosomami – regeneracja na poziomie komórkowym
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Tutaj zamiast wstrzykiwania używa się specjalnego urządzenia z
              mikroigiełkami, które robią w skórze bardzo drobne nakłucia.
              Dzięki temu:
            </p>
            <ul className="text-[15px] text-white mt-[12px] font-light ml-[20px] list-disc leading-relaxed">
              <li>skóra dostaje sygnał, żeby się regenerować,</li>
              <li>
                mieszki włosowe lepiej wchłaniają podawane w trakcie zabiegu
                <b className="text-prime"> egzosomy</b> – nowoczesne cząsteczki, które wspierają
                odbudowę i wzrost włosów,
              </li>
              <li>poprawia się ukrwienie i dotlenienie skóry głowy.</li>
            </ul>
            <p className="text-[15px] text-gray-300 mt-[16px] font-light italic border-l-2 border-prime pl-4">
              - Można to porównać do &quot;resetu&quot; dla skóry – pobudzasz
              ją, a ona zaczyna pracować lepiej.
            </p>

            <h1 className="text-[22px] text-prime font-bold mt-[32px]">
              Dlaczego warto zacząć wcześniej?
            </h1>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Jeśli wiesz, że masz &quot;gen do łysienia&quot;, nie czekaj, aż
              włosy zaczną wypadać garściami. Profilaktyka działa tylko wtedy,
              gdy w porę zadbasz o mieszki włosowe.
            </p>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Łatwiej jest <b className="text-prime">utrzymać to, co masz</b>, niż odzyskać włosy,
              które już wypadły.
            </p>
            <p className="text-[15px] text-white mt-[12px] font-light leading-relaxed">
              Regularne zabiegi + pielęgnacja = włosy pozostają gęste i mocne na
              dłużej.
            </p>

            <div className="bg-[#1f2629] p-[20px] rounded-[8px] mt-[32px] mb-[20px] border border-gray-700">
              <h1 className="text-[20px] text-prime font-bold flex items-center gap-2">
                <span>💡</span> Pro Tip:
              </h1>
              <p className="text-[15px] text-white font-light mt-2">
                Im szybciej zaczniesz działać, tym większe masz
                szanse, żeby zachować gęste włosy na długie lata. To inwestycja w
                Twój wygląd i pewność siebie.
              </p>
              <p className="text-[15px] text-white mt-[16px] font-medium break-words">
                Umów się na konsultację do Mento Care aby dowiedzieć się więcej:{" "}
                <br />
                <a
                  href="http://mentocare.booksy.com"
                  className="text-orange-500 hover:text-white transition-colors duration-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mentocare.booksy.com
                </a>
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

export default BlogBalding;