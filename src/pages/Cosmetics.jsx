import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";

import olejekAquatic from "../assets/cosmetics/olejek-do-brody-aquatic.webp";
import olejekAstrum from "../assets/cosmetics/olejek-do-brody-astrum.webp";
import olejekFloral from "../assets/cosmetics/olejek-do-brody-floral.webp";
import olejekFlaming from "../assets/cosmetics/olejek-do-brody-flaming.webp";
import olejekWoody from "../assets/cosmetics/olejek-do-brody-woody.webp";
import balsamAgnostico from "../assets/cosmetics/balsam-do-brody-agnostico.webp";
import balsamBelladonna from "../assets/cosmetics/balsam-do-brody-belladonna.webp";
import balsamCrocodile from "../assets/cosmetics/balsam-do-brody-crocodile.webp";
import balsamRebel from "../assets/cosmetics/balsam-do-brody-rebel.webp";
import balsamMontibello from "../assets/cosmetics/balsam-wygladzajacy-montibello.webp";
import kremComposer from "../assets/cosmetics/krem-do-lokow-composer.webp";
import kremMontibello from "../assets/cosmetics/krem-do-lokow-montibello.webp";
import olejekAmber from "../assets/cosmetics/olejek-do-brody-amber.webp";
import olejekAmericanDream from "../assets/cosmetics/olejek-do-brody-americandream.webp";
import olejekGingerFox from "../assets/cosmetics/olejek-do-brody-gingerfox.webp";
import olejekOud from "../assets/cosmetics/olejek-do-brody-oud.webp";
import olejekTobacco from "../assets/cosmetics/olejek-do-brody-tobacco.webp";
import pastaFirsthand from "../assets/cosmetics/pasta-do-wlosow-firsthand.webp";
import pastaPerformer from "../assets/cosmetics/pasta-do-wlosow-performer.webp";
import pastaSupersonic from "../assets/cosmetics/pasta-do-wlosow-supersonic.webp";
import pastaUppercut from "../assets/cosmetics/pasta-do-wlosow-uppercut.webp";
import piankaReuzel from "../assets/cosmetics/pianka-do-brody-reuzel.webp";
import pomadaUppercut from "../assets/cosmetics/pomada-do-wlosow-uppercut.webp";
import puderFrutti from "../assets/cosmetics/puder-do-wlosow-frutti.webp";
import szamponDepot from "../assets/cosmetics/szampon-do-brody-depot.webp";
import szamponDermedic from "../assets/cosmetics/szampon-do-wlosow-dermedic.webp";
import tonikReuzel from "../assets/cosmetics/tonik-do-wlosow-reuzel.webp";

const Cosmetics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("wszystko");

  const products = [
    {
      id: 1,
      name: "By Elementum Aquatic",
      category: "Olejek do brody",
      type: "broda",
      description: "Olejek do brody By Elementum Aquatic to wyjątkowy produkt, który łączy w sobie naturalne, roślinne oleje, aby zapewnić kompleksową opiekę zarówno nad zarostem, jak i skórą pod nim. Regularne stosowanie zaledwie kilku kropli tego olejku pozwala uzyskać zdrowy i zadbany wygląd brody.",
      scent: "Nuty cytrusowe, kwiatowe, drzewne i piżmowe",
      ingredients: "Olej z orzechów makadamia, olej z awokado,  olej ze słodkich migdałów oraz olej ryżowy",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekAquatic,
    },
    {
      id: 2,
      name: "By Elementum Astrum",
      category: "Olejek do brody",
      type: "broda",
      description: "Wejdź na wyższy poziom męskiej pielęgnacji z olejkiem Astrum – luksusową mieszanką natury i zmysłowego aromatu. Ten olejek do brody nie tylko odżywia i nawilża, ale także otula niepowtarzalnym zapachem, który podkreśli Twój charakter. Dzięki starannie dobranym naturalnym olejom, Twoja broda stanie się miękka, gładka i zadbana, a skóra pod nią – ukojona i zregenerowana.",
      scent: "Nuty Szafranu, limonki, paczuli, drzewa cedrowego oraz ambry",
      ingredients: "Olej z orzechów makadamia, olej z awokado, olejek cytrusowy, olej ze słodkich migdałów oraz Witamina E",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekAstrum,
    },
    {
      id: 3,
      name: "By Elementum Flaming",
      category: "Olejek do brody",
      type: "broda",
      description: "Poznaj Flaming, olejek do brody, który odmieni Twoją codzienną pielęgnację. Przebadany dermatologicznie i stworzony z myślą o najbardziej wymagających brodach, Mollis Flaming oferuje coś więcej niż tylko pielęgnację – obiecuje kompletną transformację. Już po dwóch tygodniach regularnego stosowania, Twoja broda stanie się niesamowicie miękka, gładka i zadbana.",
      scent: "Nuty fasoli tonka, wanilii, skóry oraz mchu dębowego",
      ingredients: "Olej arganowy, olej jojoba oraz olej z ze słodkich migdałów",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekFlaming,
    },
    {
      id: 4,
      name: "By Elementum Woody",
      category: "Olejek do brody",
      type: "broda",
      description: "Odkryj Woody, olejek do brody, który przenosi codzienną pielęgnację na nowy poziom luksusu i komfortu. Przebadany dermatologicznie i opracowany z myślą o najbardziej wymagających brodach, Mollis Woody to wyjątkowa mieszanka sześciu olejów roślinnych, które zapewniają intensywne odżywienie, miękkość oraz zdrowy wygląd Twojej brody już po dwóch tygodniach regularnego stosowania.",
      scent: "Nuty drzewa Amyrisowego, palisandru oraz drzewo sandałowego",
      ingredients: "Olej z orzechów makadamia, olej z awokado, olej ryżowy, olej z zarodków pszenicy, olej arganowy oraz olej z ogórecznika",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekWoody,
    },
    {
      id: 5,
      name: "By Elementum Floral",
      category: "Olejek do brody",
      type: "broda",
      description: "Poznaj Floral, olejek do brody, który przenosi pielęgnację na wyższy poziom. Przebadany dermatologicznie i stworzony z myślą o wymagających brodach, Mollis Floral oferuje intensywne nawilżenie i odżywienie, które widocznie poprawia kondycję włosów już po dwóch tygodniach stosowania. Odkryj, jak miękka i zdrowa może być Twoja broda dzięki mocy starannie wyselekcjonowanych sześciu olejów roślinnych.",
      scent: "Nuty mango czewonej porzeczki, dojrzałych jeżyn oraz jaśminu",
      ingredients: "Olej z orzechów makadamia, olej z awokado, olej ryżowy, olej z zarodków pszenicy, olej arganowy oraz olej z ogórecznika",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekFloral,
    },
    {
      id: 6,
      name: "HEDCOMET Performer Matte Clay",
      category: "Pasta do włosów",
      type: "włosy",
      description: "HEDCOMET Performer Matte Clay to pomada stworzona dla mężczyzn, którzy lubią mieć wszystko pod kontrolą - fryzurę, objętość i teksturę. To produkt, który modeluje, nadaje kształt i utrzymuje formę, zachowując naturalny, surowy look bez połysku.",
      hold: "Średni",
      finish: "Bardzo matowe",
      scent: "Drzewno-skórzany z nutą kardamonu, wetywerii i pudru",
      ingredients: "Zielona glinka, mieszanka wosków naturalnych oraz biopolimer matujący i stylizujący",
      price: "90 PLN",
      capacity: "100 g",
      image: pastaPerformer,
    },{
      id: 7,
      name: "HEDCOMET Supersonic Clay Pomade",
      category: "Pomada do włosów",
      type: "włosy",
      description: "HEDCOMET Supersonic Clay Pomade to produkt, który przenosi codzienną stylizację włosów na zupełnie nowy poziom. Stworzona z myślą o mężczyznach, którzy oczekują pełnej kontroli, objętości i tekstury - bez kompromisów i efektu przeciążenia.",
      hold: "Bardzo wysokie",
      finish: "Matowe",
      scent: "Cytrusy połączone z nutą karmelu",
      ingredients: "Naturalne glinki (biała, zielona i bentonitowa), odżywcze oleje oraz masło shea",
      price: "90 PLN",
      capacity: "100 g",
      image: pastaSupersonic,
    },{
      id: 8,
      name: "HEDCOMET Composer Curl Cream ",
      category: "Krem do loków",
      type: "włosy",
      description: "HEDCOMET Composer Curl Cream to krem do loków, który pomaga w tworzeniu elastycznych i trwałyh loków. Stworzony z myślą o mężczyznach, którzy chcą mieć naturalne, stylizowane lokи bez połysku.",
      hold: "Średni",
      finish: "Matowe",
      scent: "Palona Wanilia",
      ingredients: "Woda oraz biopolimery naturalnego pochodzenia",
      price: "90 PLN",
      capacity: "100 ml",
      image: kremComposer,
    },{
      id: 9,
      name: "HEDCOMET Perfect Rebel All In One",
      category: "Balsam do brody",
      type: "broda",
      description: "HEDCOMET Perfect Rebel All In One to wszechstronny balsam, który łączy w sobie funkcje kremu do twarzy, balsamu po goleniu oraz odżywki do brody. Stworzony dla mężczyzn, którzy cenią skuteczność i prostotę pielęgnacji. Ten produkt nie tylko nawilża i odżywia, ale także łagodzi podrażnienia po goleniu, pozostawiając skórę miękką i zregenerowaną.",
      scent: "Świeży, cytrusowy z nutą przypraw i piżma",
      ingredients: "Hydromanil, Niacynamid i D-Pantenol oraz oleje z baobabu, jojoby i awokado",
      price: "100 PLN",
      capacity: "100 ml",
      image: balsamRebel,
    },{
      id: 10,
      name: "Pan Drwal Agnostico",
      category: "Balsam do brody",
      type: "broda",
      description: "Kultowy balsam o mocnym chwycie i woskowej konsystencji, stworzony we współpracy z poznańskim Barber Shopem Petit Pati. Agnostico doskonale modeluje kształt brody, ujarzmia niesforne włosy i chroni je przed czynnikami zewnętrznymi, nie pozostawiając tłustego filmu.",
      hold : "Lekki",
      scent: "Drzewno-balsamiczny z nutami sosny, eukaliptusa i żywicy",
      ingredients: "Masło shea, wosk pszczeli, olej makadamia, olej kokosowy",
      price: "110 PLN",
      capacity: "100 ml",
      image: balsamAgnostico,
    },
    {
      id: 11,
      name: "Pan Drwal Belladonna",
      category: "Balsam do brody",
      type: "broda",
      description: "Balsam stworzony we współpracy z wrocławskim składem Petit Pati. Wyróżnia się niebanalnym zapachem i mocnym chwytem. Idealny do codziennego układania zarostu. Jego odżywcza formuła dba o kondycję włosów, nadając im naturalny połysk i zdrowy wygląd.",
      hold: "Mocny",
      scent: "Słodka jeżyna przełamana świeżą bazylią",
      ingredients: "Masło shea, wosk pszczeli, olej z nasion róży, olej arganowy",
      price: "80 PLN",
      capacity: "50 ml",
      image: balsamBelladonna,
    },
    {
      id: 12,
      name: "Pan Drwal Crocodile Tears",
      category: "Balsam do brody",
      type: "broda",
      description: "Krokodyle łzy to wynik kooperacji z gdańskim The Barbers. To mocno trzymający balsam woskowy, który poradzi sobie z najcięższym zarostem. Odżywia, modeluje i otula brodę klasycznym, barberskim zapachem typu Bay Rum.",
      hold: "Mocny",
      scent: "Klasyczny Bay Rum (rum z goździkami i przyprawami korzennymi)",
      ingredients: "Masło shea, wosk pszczeli, olej makadamia",
      price: "80 PLN",
      capacity: "50 ml",
      image: balsamCrocodile,
    },
    {
      id: 13,
      name: "Montibello Decode Smooth",
      category: "Balsam wygładzający",
      type: "wlosy",
      description: "Profesjonalny balsam wygładzający, który eliminuje problem puszenia się włosów. Ułatwia rozczesywanie, chroni przed wysoką temperaturą (np. podczas suszenia) i sprawia, że włosy są jedwabiście miękkie oraz podatne na dalszą stylizację.",
      finish: "Naturalny połysk",
      scent: "Delikatny, salonowy, kwiatowo-kosmetyczny",
      ingredients: "Pantenol, żywice wygładzające, filtry UVA/UVB",
      price: "80 PLN",
      capacity: "150 ml",
      image: balsamMontibello,
    },
    {
      id: 14,
      name: "Montibello Decode Curl",
      category: "Krem do loków",
      type: "wlosy",
      description: "Odżywczy krem stworzony specjalnie do podkreślania tekstury loków i fal. Zapewnia elastyczne utrwalenie, nie skleja i nie obciąża włosów. Idealny do wydobycia naturalnego skrętu u panów z kręconymi lub falowanymi włosami.",
      hold: "Średni / Elastyczny",
      finish: "Naturalny połysk",
      scent: "Świeży, owocowo-kwiatowy",
      ingredients: "Aktywne polimery, ekstrakt z bambusa, filtry ochronne",
      price: "80 PLN",
      capacity: "150 ml",
      image: kremMontibello,
    },
    {
      id: 15,
      name: "Silkclay Amber",
      category: "Olejek do brody",
      type: "broda",
      description: "Wyjątkowy olejek z linii Elementum, który głęboko nawilża zarost i skórę twarzy. Charakteryzuje się ciepłym, bogatym aromatem, który idealnie sprawdzi się na chłodniejsze miesiące. Redukuje uczucie swędzenia podczas zapuszczania brody.",
      scent: "Żywica bursztynowa, wanilia, drzewo sandałowe i skóra",
      ingredients: "Olej makadamia, olej jojoba, olej migdałowy, witamina E",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekAmber,
    },
    {
      id: 16,
      name: "Jobski Cosmetics American Dream",
      category: "Olejek do brody",
      type: "broda",
      description: "Słodki, nostalgiczny zapach zamknięty w doskonałej, odżywczej formule. Olejek American Dream przywraca brodzie witalność i miękkość, jednocześnie wprawiając w doskonały nastrój swoim niecodziennym, deserowym aromatem.",
      scent: "Truskawka, malina, słodka wanilia i pianki marshmallow",
      ingredients: "Olej z awokado, olej arganowy, olej ryżowy",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekAmericanDream,
    },
    {
      id: 17,
      name: "Jobski Cosmetics Ginger Fox",
      category: "Olejek do brody",
      type: "broda",
      description: "Energetyzujący, pikantno-drzewny olejek do brody. Lisi charakter zawdzięcza wyraźnej nucie imbiru. Zmiękcza zarost, chroni go przed łamaniem i dba o prawidłowe nawilżenie naskórka pod włosami.",
      scent: "Imbir, różowy pieprz, cedr, wetyweria i cytrusy",
      ingredients: "Olej makadamia, olej z ogórecznika, olej jojoba",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekGingerFox,
    },
    {
      id: 18,
      name: "Silkclay Oud",
      category: "Olejek do brody",
      type: "broda",
      description: "Elegancki, mroczny i tajemniczy. Olejek Oud to propozycja dla mężczyzn szukających mocnych, ekskluzywnych wrażeń zapachowych. Dogłębnie regeneruje zniszczony zarost, nadając mu miękkość i naturalny, zdrowy wygląd.",
      scent: "Drewno agarowe (Oud), skóra, paczula, dym",
      ingredients: "Olej arganowy, olej rycynowy, witamina E",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekOud,
    },
    {
      id: 19,
      name: "Silkclay Tobacco",
      category: "Olejek do brody",
      type: "broda",
      description: "Klasyka męskiej elegancji. Olejek Tobacco łączy w sobie ciężkie, dymne nuty z lekką słodyczą. Doskonale chroni włosy przed czynnikami zewnętrznymi i szybko się wchłania, nie pozostawiając uczucia tłustej brody.",
      scent: "Liście tytoniu, wanilia, przyprawy korzenne i kakao",
      ingredients: "Olej z pestek winogron, olej ze słodkich migdałów, olej jojoba",
      price: "80 PLN",
      capacity: "30 ml",
      image: olejekTobacco,
    },
    {
      id: 20,
      name: "Firsthand Clay Pomade",
      category: "Pasta do włosów",
      type: "wlosy",
      description: "Jedna z najbardziej wszechstronnych pomad na rynku od amerykańskiej marki Firsthand. Idealnie balansuje między mocnym chwytem a naturalnym, matowym wykończeniem. Świetnie nadaje się do fryzur typu messy, quiff czy crop, dodając włosom potężnej tekstury i objętości. Łatwo się zmywa wodą.",
      scent: "Ziemisto-cytrusowy (bergamotka, lawenda, palo santo)",
      ingredients: "Sok z aloesu, wosk pszczeli, glinka kaolinowa, olej morelowy",
      hold: "Mocny",
      finish: "Naturalny mat",
      price: "95 PLN",
      capacity: "88 ml",
      image: pastaFirsthand,
    },
    {
      id: 21,
      name: "Uppercut Matt Paste",
      category: "Pasta do włosów",
      type: "wlosy",
      description: "Kultowa pasta od australijskiej marki Uppercut Deluxe. Prawdziwy 'game changer' dla każdego, kto szuka elastycznego utrwalenia i w pełni matowego efektu. Pracuje się nią łatwo, pozwala na przeczesywanie włosów w ciągu dnia dłonią i jest idealna do włosów o różnej długości.",
      scent: "Tiramisu",
      ingredients: "Baza wodna, wosk mikrokrystaliczny, wyciąg z liści mięty",
      hold: "Średni / Elastyczny",
      finish: "Matowe",
      price: "75 PLN",
      capacity: "100 g",
      image: pastaUppercut,
    },
    {
      id: 22,
      name: "Uppercut Deluxe Pomade",
      category: "Klasyczna pomada wodna",
      type: "wlosy",
      description: "Legendarna pomada, która zapoczątkowała szał na klasyczne barberskie cięcia. Stworzona do fryzur takich jak slick back, pompadour czy side part. Oferuje żelazny chwyt i piękny połysk, a dzięki wodnej bazie, zmywa się pod prysznicem samą wodą.",
      scent: "Kokos i słodka wanilia",
      ingredients: "Baza wodna, gliceryna, karmel",
      hold: "Bardzo mocny",
      finish: "Wysoki połysk",
      price: "75 PLN",
      capacity: "100 g",
      image: pomadaUppercut,
    },
    {
      id: 23,
      name: "Reuzel Beard Foam",
      category: "Pianka do brody",
      type: "broda",
      description: "Unikalna odżywka bez spłukiwania w formie lekkiej pianki. Błyskawicznie się wchłania, odświeża zarost (działa jak dezodorant do brody), ułatwia rozczesywanie szczotką i ujarzmia odstające włoski. Idealna dla mężczyzn, którzy nie przepadają za tłustymi olejkami.",
      scent: "Świeży, koloński zapach z delikatną nutą drewna",
      ingredients: "Ekstrakt z oczaru wirginijskiego, wyciąg z pokrzywy i rozmarynu",
      hold: "Lekki (dyscyplinujący)",
      price: "65 PLN",
      capacity: "70 ml",
      image: piankaReuzel,
    },
    {
      id: 24,
      name: "Frutti Professional",
      category: "Puder do włosów",
      type: "wlosy",
      description: "Puder stylizujący błyskawicznie unoszący włosy u nasady. Niezastąpiony produkt przy cienkich i opadających włosach. Wystarczy zaaplikować niewielką ilość u nasady, aby uzyskać potężną objętość i mocno matową teksturę fryzur typu crop lub quiff.",
      scent: "Bezzapachowy",
      ingredients: "Krzemionka, polimery teksturyzujące",
      hold: "Mocny",
      finish: "Surowy mat",
      price: "25 PLN",
      capacity: "10 g",
      image: puderFrutti,
    },
    {
      id: 25,
      name: "Depot No. 501",
      category: "Szampon do brody",
      type: "broda",
      description: "Nawilżający i oczyszczający szampon dedykowany specjalnie do zarostu. W przeciwieństwie do zwykłych żeli pod prysznic, nie wysusza skóry twarzy i nie wypłukuje naturalnego sebum z brody. Pozostawia zarost czysty, miękki i gotowy do nałożenia olejku.",
      scent: "Odświeżający zapach mięty i cytrusów",
      ingredients: "Ekstrakt z aloesu, olejek miętowy, prowitamina B5",
      price: "60 PLN",
      capacity: "250 ml",
      image: szamponDepot,
    },
    {
      id: 26,
      name: "Dermedic Capilarte",
      category: "Szampon kuracyjny",
      type: "wlosy",
      description: "Specjalistyczny, apteczny szampon wspierający walkę z problemami skóry głowy. Doskonale oczyszcza, łagodzi stany zapalne i pobudza krążenie w mieszkach włosowych, stymulując wzrost nowych, zdrowych włosów. Idealny do wrażliwej skóry.",
      scent: "Delikatny, apteczno-ziołowy",
      ingredients: "Ekstrakt z komórek macierzystych jabłoni, D-Panthenol, biotyna",
      price: "45 PLN",
      capacity: "300 ml",
      image: szamponDermedic,
    },
    {
      id: 27,
      name: "Reuzel Grooming Tonic",
      category: "Tonik do modelowania",
      type: "wlosy",
      description: "Niezbędny produkt przed użyciem suszarki (tzw. prestyler). Chroni włosy przed gorącym powietrzem, nadaje im niesamowitą objętość i ułatwia wstępne ułożenie fryzury. Może być również używany samodzielnie dla uzyskania luźnego, naturalnego wyglądu.",
      scent: "Słodkie jabłko z odrobiną mięty pieprzowej",
      ingredients: "Ekstrakt z oczaru wirginijskiego, olej arganowy, skrzyp polny",
      hold: "Lekki",
      finish: "Delikatny połysk / Naturalny",
      price: "80 PLN",
      capacity: "500/350/100 ml",
      image: tonikReuzel,
    }
  ];

  const filteredProducts = products.filter((product) => {
    if (activeTab === "wszystko") return true;
    return product.type === activeTab;
  });

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main
      className="min-h-screen relative overflow-x-hidden pb-20"
      style={{
        background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <Navbar />

      <img
        src={Gradient}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-full h-auto pointer-events-none z-0 opacity-50"
        style={{ top: -400, right: -400 }}
      />

      <div className="relative z-10 pt-[150px] md:pt-[200px] px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromBottom}
          className="text-center md:text-start mb-20"
        >
          <h1
            className="uppercase font-bold"
            style={{
              fontFamily: '"Arial", "Helvetica", sans-serif',
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: "1",
              color: "transparent",
              WebkitTextStroke: "2px #ff6600",
              textShadow: "0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
            }}
          >
            Kosmetyki
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-[15px] leading-relaxed mx-auto md:mx-0">
            Pracujemy wyłącznie na sprawdzonych markach premium. Poznaj produkty,
            których używamy w Mento Barber Shop i dowiedz się, 
            jak mogą zadbać o Twój wygląd w domowym zaciszu.
            <br />
            <span className="text-prime font-bold mt-2 block">
              Wszystkie kosmetyki możesz nabyć stacjonarnie w naszym salonie Mento Barber Shop Bochnia.
            </span>
          </p>
        </motion.div>
        
        <div className="flex justify-center gap-4 md:gap-8 mb-16 relative z-10">
          <button
            onClick={() => setActiveTab("wszystko")}
            className={`uppercase tracking-widest text-sm font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === "wszystko"
                ? "border-prime text-prime"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Wszystkie
          </button>
          <button
            onClick={() => setActiveTab("broda")}
            className={`uppercase tracking-widest text-sm font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === "broda"
                ? "border-prime text-prime"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Do Brody
          </button>
          <button
            onClick={() => setActiveTab("wlosy")}
            className={`uppercase tracking-widest text-sm font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === "wlosy"
                ? "border-prime text-prime"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Do Włosów
          </button>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
        {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                },
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 flex justify-center p-8 relative">
                <div 
                  className="absolute inset-0 z-0 bg-prime rounded-full opacity-5 blur-3xl"
                  style={{ transform: "scale(0.8)" }}
                ></div>
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.category}`}
                  className="w-full max-w-[400px] h-auto object-contain z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-prime uppercase tracking-widest text-xs font-bold mb-2">
                  {product.category}
                </p>
                <h2 className="text-white font-bold text-3xl md:text-4xl uppercase mb-6">
                  {product.name}
                </h2>
                
                <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
                  {product.description}
                </p>

                <<div className="flex flex-col gap-4 mb-8">
  {product.scent && (
    <div>
      <span className="text-white font-bold text-sm uppercase">Zapach: </span>
      <span className="text-gray-400 text-sm">{product.scent}</span>
    </div>
  )}
  {product.ingredients && (
    <div>
      <span className="text-white font-bold text-sm uppercase">Główne składniki: </span>
      <span className="text-gray-400 text-sm">{product.ingredients}</span>
    </div>
  )}
  {product.hold && (
    <div>
      <span className="text-white font-bold text-sm uppercase">Chwyt: </span>
      <span className="text-prime font-bold text-sm tracking-wide">{product.hold}</span>
    </div>
  )}
  {product.finish && (
    <div>
      <span className="text-white font-bold text-sm uppercase">Efekt: </span>
      <span className="text-prime font-bold text-sm tracking-wide">{product.finish}</span>
    </div>
  )}
</div>

                <div className="flex items-end gap-6 pt-6 border-t border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-xs uppercase font-bold mb-1">Cena</span>
                    <span className="text-prime font-bold text-2xl">{product.price}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-xs uppercase font-bold mb-1">Pojemność</span>
                    <span className="text-white font-medium text-lg">{product.capacity}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cosmetics;