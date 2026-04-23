import { useState } from "react";

// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";

// Assets
import ShortHair from "../assets/shortHair.webp";
import Beard from "../assets/beard.webp";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import HeadcometLogo from "../assets/logos/HEDCOMET_logo_black.webp";
import Panel3Image from "../assets/courses/panel3.webp";
import Panel4Image from "../assets/courses/panel4.webp";
import Panel5Image from "../assets/courses/panel5.webp";

const Training = () => {
  const isMobile = useIsMobile();

  const [activePanel, setActivePanel] = useState(0);

  const [dialogText, setDialogText] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [reservationDialogText, setReservationDialogText] = useState(null);
  const [isReservationDialogOpen, setIsReservationDialogOpen] = useState(false);

  const openDialog = (index) => {
    setDialogText(data[index].tutorial);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogText(null);
  };

  const openReservationDialog = (index) => {
    setReservationDialogText(data[index].tutorial);
    setIsReservationDialogOpen(true);
  };

  const closeReservationDialog = () => {
    setIsReservationDialogOpen(false);
    setReservationDialogText(null);
  };

  const data = [
    {
      photo: ShortHair,
      alt: "Mężczyzna z krótką fryzurą typu fade, stworzony w MENTO BARBER Bochnia",
      title: "Krótkie włosy + cieniowanie od zera (fade)",
      description:
        "Perfekcyjny fade to podstawa nowoczesnego barberingu. W tym panelu skupimy się na technice cieniowania od zera, precyzyjnym przejściu tonalnym i odpowiednim doborze długości do kształtu głowy. Pokażemy, jak pracować z maszynką, trymerem i shaverem, by uzyskać idealne wykończenie. Szkolenie obejmuje zarówno teorię, jak i praktykę na modelach, abyś mógł doszlifować swoje umiejętności i zyskać pewność w pracy z krótkimi fryzurami.",
      tutorial: "KRÓTKIE FORMY + FADE - PLAN DNIA",
      data: "25 stycznia 2026",
      plan: (
        <>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 11:00</p>
            <p>Teoria + prezentacja multimedialna</p>
            <p>→ Proporcje w strzyżeniu i ich wpływ na finalny efekt</p>
            <p>→ Kształt fryzury – budowanie formy i balansu</p>
            <p>→ Analiza głowy oraz tekstury włosów</p>
            <p>→ Dobór fryzury do typu klienta</p>
            <p>
              → Dobór i omówienie narzędzi pracy (maszynki, nasadki, trymery,
              nożyczki)
            </p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">11:00 - 13:30</p>
            <p>Model pokazowy z opracowaniem</p>
            <p>→ Pełne cięcie pokazowe</p>
            <p>→ Omówienie pracy krok po kroku</p>
            <p>→ Budowanie kształtu w krótkich formach</p>
            <p>→ Detale i wykończenie fryzury</p>
            <p>→ Praca maszynką i nożyczkami w praktyce</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">13:30 - 14:00</p>
            <p>Przerwa / lunch – wliczony w koszt szkolenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">14:00 - 18:00</p>
            <p>Warsztaty – praca uczestników na modelach</p>
            <p>→ Samodzielna praca kursantów</p>
            <p>→ Praktyczne wykorzystanie wiedzy z części teoretycznej</p>
            <p>→ Budowanie kształtu i poprawnych proporcji</p>
            <p>→ Praca pod okiem szkoleniowca</p>
            <p>→ Indywidualny feedback i korekta techniki</p>
          </div>
          <div>
            <p className="font-bold">Podsumowanie szkolenia</p>
            <p>→ Rozdanie certyfikatów oraz upominków</p>
          </div>
        </>
      ),
    },
    {
      photo: Beard,
      alt: "Mężczyzna z zadbaną brodą, obciętą w MENTO BARBER Bochnia",
      title: "COMBO włosy + broda (2 dni)",
      description:
        "Dwudniowe szkolenie COMBO włosy + broda to kompleksowy program dla barberów, którzy chcą pracować świadomie, technicznie i pewnie zarówno przy strzyżeniu włosów, jak i przy wykonywaniu brody. Podczas szkolenia uczestnicy poznają pełny proces pracy z klientem – od analizy głowy, proporcji i kształtu fryzury, po dobór odpowiedniej formy brody dopasowanej do twarzy i stylu klienta. Program łączy teorię, wykład oraz intensywną praktykę, dzięki czemu wiedza od razu przekładana jest na realną pracę przy fotelu.",
      tutorial: "COMBO WŁOSY + BRODA - PLAN SZKOLENIA",
      data: "14/15 marca 2026",
      plan: (
        <>
          <p className="text-[20px] font-bold text-prime mb-[16px]">
            DZIEŃ 1 – WŁOSY
          </p>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 11:00</p>
            <p>Teoria + prezentacja multimedialna</p>
            <p>→ Proporcje w strzyżeniu i ich wpływ na finalny efekt</p>
            <p>→ Kształt fryzury – budowanie formy i balansu</p>
            <p>→ Analiza głowy oraz tekstury włosów</p>
            <p>→ Dobór fryzury do typu klienta</p>
            <p>
              → Dobór i omówienie narzędzi pracy (maszynki, nasadki, trymery,
              nożyczki)
            </p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">11:00 - 13:30</p>
            <p>Model pokazowy z opracowaniem</p>
            <p>→ Pełne cięcie pokazowe</p>
            <p>→ Omówienie pracy krok po kroku</p>
            <p>→ Budowanie kształtu w krótkich formach</p>
            <p>→ Detale i wykończenie fryzury</p>
            <p>→ Praca maszynką i nożyczkami w praktyce</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">13:30 - 14:00</p>
            <p>Przerwa / lunch – wliczony w koszt szkolenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">14:00 - 18:00</p>
            <p>Warsztaty – praca uczestników na modelach</p>
            <p>→ Samodzielna praca kursantów</p>
            <p>→ Praktyczne wykorzystanie wiedzy z części teoretycznej</p>
            <p>→ Budowanie kształtu i poprawnych proporcji</p>
            <p>→ Praca pod okiem szkoleniowca</p>
            <p>→ Indywidualny feedback i korekta techniki</p>
          </div>

          <hr className="border-[white] opacity-20 my-[32px]" />

          <p className="text-[20px] font-bold text-prime mb-[16px]">
            DZIEŃ 2 – BRODY
          </p>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 10:30</p>
            <p>Teoria + prezentacja</p>
            <p>→ Różne typy brody i ich dopasowanie do kształtu twarzy</p>
            <p>→ Linie naturalne vs geometryczne</p>
            <p>→ Cieniowanie, konturowanie, wykończenie</p>
            <p>→ Narzędzia, techniki, produkty i tonery</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">10:30 - 12:30</p>
            <p>Pierwszy model pokazowy – krótka broda</p>
            <p>→ Opracowanie krok po kroku z pełnym omówieniem</p>
            <p>→ Praca z konturem, cieniowaniem i tonowaniem</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">12:30 - 15:00</p>
            <p>Drugi model pokazowy – długa broda</p>
            <p>→ Inne podejście, narzędzia i prowadzenie linii</p>
            <p>→ Stylizacja, tekstura, objętość i pielęgnacja</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">15:00 - 18:00</p>
            <p>Praca uczestników na modelach</p>
            <p>→ Każdy kursant wykonuje pełną stylizację brody</p>
            <p>
              → Szkoleniowcy aktywnie pomagają w opracowaniu brody – od
              planowania, przez wykonanie, aż po finalne wykończenie
            </p>
          </div>
          <div>
            <p className="font-bold">Podsumowanie szkolenia</p>
            <p>→ Rozdanie certyfikatów oraz upominków</p>
          </div>
        </>
      ),
    },
    {
      photo: Panel3Image,
      alt: "Mężczyzna z elgecanką fryzurą i zadbaną brodą, obciętą w MENTO BARBER Bochnia",
      title: "Brody krótke i długie",
      description:
        "Idealnie przycięta broda to nie tylko estetyka, ale i komfort klienta. W tym panelu nauczysz się cieniowania brody, jej konturowania i odpowiedniego skracania, by dopasować kształt do rysów twarzy. Skupimy się także na tonowaniu i pielęgnacji zarostu, aby uzyskać naturalny, zdrowy wygląd. Podczas praktycznej części dowiesz się, jak pracować maszynka , trymerem, brzytwą i nożyczkami, by broda wyglądała perfekcyjnie i była dopasowana do stylu klienta.",
      tutorial: "BRODY: CIENIOWANIE • MODELOWANIE • TONOWANIE - PLAN DNIA",
      data: "22 lutego 2026",
      plan: (
        <>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 10:30</p>
            <p>Teoria + prezentacja</p>
            <p>→ Różne typy brody i ich dopasowanie do kształtu twarzy</p>
            <p>→ Linie naturalne vs geometryczne</p>
            <p>→ Cieniowanie, konturowanie, wykończenie</p>
            <p>→ Narzędzia, techniki, produkty i tonery</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">10:30 - 12:30</p>
            <p>Pierwszy model pokazowy – krótka broda</p>
            <p>→ Opracowanie krok po kroku z pełnym omówieniem</p>
            <p>→ Praca z konturem, cieniowaniem i tonowaniem</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">12:30 - 15:00</p>
            <p>Drugi model pokazowy – długa broda</p>
            <p>→ Inne podejście, narzędzia i prowadzenie linii</p>
            <p>→ Stylizacja, tekstura, objętość i pielęgnacja</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">15:00 - 18:00</p>
            <p>Praca uczestników na modelach</p>
            <p>→ Każdy kursant wykonuje pełną stylizację brody</p>
            <p>
              → Szkoleniowcy aktywnie pomagają w opracowaniu brody – od
              planowania, przez wykonanie, aż po finalne wykończenie
            </p>
          </div>
          <div>
            <p className="font-bold">18:00</p>
            <p>Zakończenie dnia – rozdanie dyplomów i upominków</p>
          </div>
        </>
      ),
    },
    {
      photo: Panel4Image,
      alt: "Mężczyzna z krótką fryzurą typu fade, stworzony w MENTO BARBER Bochnia",
      title: "Krótkie formy + fade + więcej praktyki (2 dni)",
      description:
        "Podczas tego dwudniowego szkolenia skupimy się na technice cieniowania od zera, precyzyjnym przejściu tonalnym oraz odpowiednim doborze długości do kształtu głowy. Omówimy i przećwiczymy pracę z maszynką, trymerem oraz shaverem, kładąc duży nacisk na czyste wykończenie i spójność formy. Program szkolenia oparty jest na panelu Krótkie Formy + Fade, jednak w tej edycji rozszerzamy część praktyczną. Uczestnicy wykonają aż trzy pełne fryzury w ciągu dwóch dni, pracując na trzech modelach, co pozwala na realne przećwiczenie technik, powtarzalność ruchów i dopracowanie detali. Szkolenie łączy krótką, konkretną teorię z intensywną pracą warsztatową, dzięki czemu każdy etap – od budowania formy po finalne wykończenie – jest dokładnie przepracowany przy fotelu.",
      tutorial: "KRÓTKIE FORMY + FADE + WIĘCEJ PRAKTYKI - PLAN SZKOLENIA",
      data: "16/17 maja 2026",
      plan: (
        <>
          <p className="text-[20px] font-bold text-prime mb-[16px]">DZIEŃ 1</p>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 11:00</p>
            <p>Wykład oraz prezentacja teoretyczna</p>
            <p>→ Analiza głowy, tekstury włosów, dobór fryzury do klienta</p>
            <p>→ Technika cieniowania, główne techniki, proporcje</p>
            <p>
              → Dobór i omówienie narzędzi do pracy (maszynki, nasadki, trymery,
              nożyczki)
            </p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">11:00 - 13:30</p>
            <p>Model pokazowy</p>
            <p>→ Pełne opracowanie fryzury krok po kroku</p>
            <p>→ Komentarz techniczny na każdym etapie</p>
            <p>→ Analiza detali i wykończenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">13:30 - 14:00</p>
            <p>Przerwa obiadowa – wliczona w cenę szkolenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">14:00 - 18:00</p>
            <p>Warsztaty praktyczne</p>
            <p>→ Praca uczestników na modelu</p>
            <p>→ Indywidualne wskazówki i korekty</p>
            <p>→ Wdrażanie poznanych technik w praktyce</p>
          </div>

          <hr className="border-[white] opacity-20 my-[32px]" />

          <p className="text-[20px] font-bold text-prime mb-[16px]">DZIEŃ 2</p>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 10:30</p>
            <p>Prezentacja + krótki test</p>
            <p>→ Utrwalenie wiedzy z dnia pierwszego</p>
            <p>→ Uporządkowanie schematów pracy</p>
            <p>→ Przygotowanie do dalszej części praktycznej</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">10:30 - 14:00</p>
            <p>Model dla uczestników szkolenia</p>
            <p>→ Wykonanie pełnej fryzury</p>
            <p>→ Skupienie na powtarzalności i precyzji</p>
            <p>→ Praca nad detalami i czystym wykończeniem</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">14:00 - 14:30</p>
            <p>Przerwa obiadowa – wliczona w cenę szkolenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">14:30 - 18:00</p>
            <p>Drugi model dla uczestników</p>
            <p>→ Kolejne pełne wykonanie fryzury</p>
            <p>→ Utrwalenie techniki fade i krótkich form</p>
            <p>→ Doskonalenie ergonomii i tempa pracy</p>
          </div>
          <div>
            <p className="font-bold">18:00</p>
            <p>Podsumowanie szkolenia</p>
            <p>→ Omówienie postępów</p>
            <p>→ Rozdanie dyplomów i certyfikatów</p>
          </div>
        </>
      ),
    },
    {
      photo: Panel5Image,
      alt: "Salon MENTO BARBER Bochnia w czasie szkolenia, z uczestnikami pracującymi przy fotelach",
      title: "Szkolenia wyjazdowe",
      description:
        "W 2026 roku możemy również odwiedzić Twój salon! Oferujemy elastyczne formy szkoleń dopasowane do Twoich potrzeb – możemy przyjechać do Ciebie na miejscu i przeszkolić cały zespół, lub zorganizować szkolenie w formie zamkniętej grupy w naszej lokalizacji. Dopasowujemy program szkolenia, poziom zaawansowania oraz zakres tematyczny (włosy, broda, combo) do indywidualnych potrzeb Twojego salonu lub zespołu.",
      tutorial: "SZKOLENIA WYJAZDOWE - INFORMACJE",
      data: "Terminy ustalane indywidualnie",
      plan: (
        <>
          <div className="mb-[32px]">
            <p className="font-bold text-prime text-[18px] mb-[8px]">
              Formy szkoleń wyjazdowych:
            </p>
            <p className="mb-[8px]">
              <span className="font-bold">→ U Ciebie na miejscu</span>
              <br />
              Przyjeżdżamy do Twojego salonu i szkolimy cały zespół w znanym
              środowisku
            </p>
            <p>
              <span className="font-bold">→ W formie zamkniętej grupy</span>
              <br />
              Twój salon lub ekipa przyjeżdża do nas na dedykowane szkolenie
            </p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold text-prime text-[18px] mb-[8px]">
              Możemy dopasować:
            </p>
            <p>→ Program szkolenia do Twoich potrzeb</p>
            <p>→ Poziom zaawansowania uczestników</p>
            <p>→ Zakres tematyczny (włosy, broda, combo)</p>
            <p>→ Terminy i długość szkolenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold text-prime text-[18px] mb-[8px]">
              Skontaktuj się z nami:
            </p>
            <p>
              <span className="font-bold">Telefon: </span> +48 798 144 399
            </p>
            <p>
              <span className="font-bold">Instagram: </span>
              <a
                href="https://www.instagram.com/mento.barbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-prime underline"
              >
                mento.barbershop
              </a>
            </p>
          </div>
          <div>
            <p className="text-[14px] opacity-80">
              Skontaktuj się z nami, aby omówić szczegóły i stworzyć idealne
              szkolenie dla Twojego zespołu!
            </p>
          </div>
        </>
      ),
    },
  ];

  const handleChangePanel = (index) => setActivePanel(index);

  const renderPanel = (panel, index) => (
    <div
      key={index}
      className={`h-[20%] pl-[36px] border-l-4 ${
        activePanel === index ? "border-prime" : "border-transparent"
      } border-b-[1px] flex flex-col justify-center cursor-pointer`}
      style={{
        borderBottomColor:
          activePanel === index
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(112,112,112, 0.1)",
      }}
      onClick={() => handleChangePanel(index)}
    >
      <p className="text-white uppercase text-[14px]">panel {index + 1}</p>
      <p
        className={`text-[18px] ${
          activePanel === index ? "text-prime" : "text-white"
        }`}
      >
        {panel.title}
      </p>
    </div>
  );

  return (
    <>
      {!isMobile ? (
        <main className="h-screen ">
          <Navbar />
          <div
            className="relative min-h-screen h-screen overflow-hidden"
            style={{
              background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="absolute w-full flex items-center justify-center h-full z-[2]">
              <div className="flex items-center justify-center gap-[16px] w-[calc(100%-196px)] mt-[100px]">
                <div
                  className="h-[75vh] w-[33%] bg-[#171D1F]"
                  style={{ boxShadow: "0px 8px 10px #00000099" }}
                >
                  {data.map((panel, index) => renderPanel(panel, index))}
                </div>
                <div
                  className="h-[75vh] w-[66%] bg-[#171D1F] flex flex-col"
                  style={{ boxShadow: "0px 8px 10px #00000099" }}
                >
                  <div className="relative bg-white m-[32px] mb-[20px] rounded-[6px] overflow-hidden">
                    <img
                      src={data[activePanel].photo}
                      alt={data[activePanel].alt}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition:
                          activePanel === 2
                            ? "center 20%"
                            : activePanel === 3
                              ? "center 35%"
                              : "center center",
                      }}
                    />
                    <div className="absolute bottom-[12px] right-[12px] bg-white/90 backdrop-blur-sm rounded-[6px] px-[12px] py-[8px] flex items-center gap-[8px]">
                      <img
                        src={HeadcometLogo}
                        alt="Headcomet - partner szkolenia Mento Barber"
                        className="h-[20px] w-auto"
                      />
                      <p className="text-[#171D1F] text-[11px] font-medium">
                        Partner w szkoleniu
                      </p>
                    </div>
                  </div>
                  <p className="title text-prime mx-[32px] text-[20px]">
                    {data[activePanel].title}
                  </p>
                  <p className="description text-[13px] text-white mx-[32px] mt-[10px] mb-[24px] font-light">
                    {data[activePanel].description}
                  </p>
                  <div className="flex flex-row items-center justify-center mx-[32px] gap-[16px]">
                    <button
                      className="border-2 border-prime rounded-[16px] p-[12px] text-prime mb-[36px] mt-auto flex items-center justify-center gap-[2px]"
                      style={{ width: "20%" }}
                      onClick={() => openDialog(activePanel)}
                    >
                      <IoInformationCircleOutline
                        style={{ marginTop: "2px" }}
                      />{" "}
                      Plan szkolenia
                    </button>
                    <button
                      className=" bg-prime rounded-[16px] p-[12px] text-white mb-[36px] mt-auto"
                      style={{ width: "80%" }}
                      onClick={() => openReservationDialog(activePanel)}
                    >
                      Umów szkolenie
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={Gradient}
              alt="" aria-hidden="true"
              className="absolute w-full h-auto pointer-events-none z-[1] opacity-70"
              style={{ top: "-50%" }}
            />
          </div>
          {isDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] min-w-[65%] max-h-[80vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold">PLAN DNIA I TERMINY</p>
                <div className="flex justify-between items-center">
                  <p className="text-[24px] font-bold text-prime">
                    {dialogText}
                  </p>
                  <button onClick={closeDialog} className="text-prime">
                    <IoClose size={40} />
                  </button>
                </div>
                <hr className="border-[white] opacity-5 mt-[32px] mb-[16px]" />
                <p>
                  <span className="font-bold">Nadchodzące terminy: </span>
                  {data[activePanel].data}
                </p>
                <hr className="border-[white] opacity-5 mt-[16px] mb-[24px]" />
                {data[activePanel].plan}
              </div>
            </div>
          )}
          {isReservationDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeReservationDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] min-w-[65%] max-h-[80vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold">UMÓW SZKOLENIE</p>
                <div className="flex justify-between items-center">
                  <p className="text-[24px] font-bold text-prime">
                    {reservationDialogText}
                  </p>
                  <button
                    onClick={closeReservationDialog}
                    className="text-prime"
                  >
                    <IoClose size={40} />
                  </button>
                </div>
                <hr className="border-[white] opacity-5 mt-[32px] mb-[16px]" />
                <p>
                  Aby umówić szkolenie, skontaktuj się z nami telefonicznie lub
                  przez Instagram, podając nazwę szkolenia oraz interesujący Cię
                  termin.
                </p>
                <hr className="border-[white] opacity-5 mt-[16px] mb-[24px]" />
                <p>
                  <span className="font-bold">Telefon: </span>+48 798 144 399
                </p>
                <p>
                  <span className="font-bold">Instagram: </span>
                  <a
                    href="https://www.instagram.com/mento.barbershop/"
                    target="_blank"
                  >
                    mento.barbershop
                  </a>
                </p>
              </div>
            </div>
          )}
          <style>{`
				@media (min-width: 1800px) {
					.title {
						font-size: 24px;
					}
					.description {
						font-size: 16px;
					}
					.button {
						padding: 16px
					}
				}
			`}</style>
        </main>
      ) : (
        <main className="relative w-full py-6 px-4 overflow-hidden"
          style={{
            background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        >
          <Navbar />
          <div className="flex flex-col gap-6 mt-[80px]">
            {data.map((panel, index) => (
              <div
                key={index}
                className="bg-[#171D1F] rounded-lg shadow-lg p-4 flex flex-col z-10"
              >
                <div className="relative bg-white rounded-[6px] overflow-hidden mb-4">
                  <img
                    src={panel.photo}
                    alt={panel.alt}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-[10px] right-[10px] bg-white/90 backdrop-blur-sm rounded-[6px] px-[10px] py-[6px] flex items-center gap-[6px]">
                    <img
                      src={HeadcometLogo}
                      alt="Headcomet - partner szkolenia Mento Barber"
                      className="h-[18px] w-auto"
                    />
                    <p className="text-[#171D1F] text-[10px] font-medium">
                      Partner w szkoleniu
                    </p>
                  </div>
                </div>
                <p className="text-prime text-[18px] font-semibold mb-2">
                  {panel.title}
                </p>
                <p className="text-white text-[14px] font-light mb-6">
                  {panel.description}
                </p>
                <button
                  onClick={() => openDialog(index)}
                  className="border-2 border-prime text-prime rounded-[12px] py-[16px] mb-2 flex justify-center items-center gap-2 "
                  aria-label="Zamknij okno"
                >
                  <IoInformationCircleOutline style={{ marginTop: "2px" }} />{" "}
                  Plan szkolenia
                </button>
                <button
                  onClick={() => openReservationDialog(index)}
                  className="bg-prime text-white rounded-[12px] py-[16px] mb-2"
                  aria-label="Zamknij okno"
                >
                  Umów szkolenie
                </button>
              </div>
            ))}
          </div>
          <img
            src={Gradient}
            alt="" aria-hidden="true"
            className="absolute top-0 z-0 w-[800px] max-w-none"
            style={{ right: "-200px", top: "-200px" }}
          />
          {isDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] h-[100vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold text-[12px]">PLAN DNIA I TERMINY</p>
                <div className="flex justify-between items-start gap-4">
                  <p className="text-[20px] font-bold text-prime">
                    {dialogText}
                  </p>
                  <button onClick={closeDialog} className="text-prime" aria-label="Zamknij okno">
                    <IoClose size={30} />
                  </button>
                </div>
                <hr className="mt-[32px] mb-[16px]" />
                <p>
                  <span className="font-bold">Nadchodzące terminy: </span>
                  {data[activePanel].data}
                </p>
                <hr className="mt-[16px] mb-[24px]" />
                {data[activePanel].plan}
              </div>
            </div>
          )}
          {isReservationDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeReservationDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] min-h-[30vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold text-[12px]">UMÓW SZKOLENIE</p>
                <div className="flex justify-between items-start gap-4">
                  <p className="text-[20px] font-bold text-prime">
                    {reservationDialogText}
                  </p>
                  <button
                    onClick={closeReservationDialog}
                    className="text-prime"
                    aria-label="Zamknij okno"
                  >
                    <IoClose size={30} />
                  </button>
                </div>
                <hr className="border-[white] opacity-5 mt-[32px] mb-[16px]" />
                <p>
                  Aby umówić szkolenie, skontaktuj się z nami telefonicznie lub
                  przez Instagram, podając nazwę szkolenia oraz interesujący Cię
                  termin.
                </p>
                <hr className="border-[white] opacity-5 mt-[16px] mb-[24px]" />
                <p>
                  <span className="font-bold">Telefon: </span>+48 798 144 399
                </p>
                <p>
                  <span className="font-bold">Instagram: </span>
                  <a
                    href="https://www.instagram.com/mento.barbershop/"
                    target="_blank"
                  >
                    mento.barbershop
                  </a>
                </p>
              </div>
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default Training;
