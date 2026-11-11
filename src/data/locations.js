// Dane salonów MENTO – używane przez podstrony /barber-sulkowice i /barber-bochnia
// oraz przez Seo.jsx (FAQ i breadcrumbs w JSON-LD). Zmieniasz godziny/telefon tutaj – zmienia się wszędzie.

import Jimmy from "../assets/team/jimmy.webp";
import Kacper from "../assets/team/kacper.webp";
import Dawid from "../assets/team/dawid.webp";
import Anna from "../assets/team/anna.webp";
import Ola from "../assets/team/ola.webp";
import Julia from "../assets/team/julia.webp";
import Gabi from "../assets/team/gabi.webp";
import Krystian from "../assets/team/krystian.webp";
import Kasia from "../assets/team/kasia.webp";
import Adrian from "../assets/team/adrian.webp";

import galeria4 from "../assets/gallery/galeria4.webp";
import galeria18 from "../assets/gallery/galeria18.webp";
import galeria7 from "../assets/gallery/galeria7.webp";
import galeria21 from "../assets/gallery/galeria21.webp";
import galeria8 from "../assets/gallery/galeria8.webp";
import galeria11 from "../assets/gallery/galeria11.webp";
import galeria20 from "../assets/gallery/galeria20.webp";
import galeria24 from "../assets/gallery/galeria24.webp";

export const BOOKING_URL = "https://app.mentobarber.pl";

const hours = (weekdays) => [
	{ days: "Poniedziałek – Piątek", hours: weekdays },
	{ days: "Sobota", hours: "08:00 – 14:00" },
	{ days: "Niedziela", hours: "Zamknięte" },
];

export const SERVICES = [
	{
		name: "Strzyżenie męskie",
		desc: "Klasyczne i nowoczesne cięcia dopasowane do kształtu twarzy, typu włosów i Twojego stylu.",
	},
	{
		name: "Fade i krótkie formy",
		desc: "Skin fade, low fade, taper, french crop – płynne przejścia i ostre, czyste linie.",
	},
	{
		name: "Broda",
		desc: "Trymowanie, modelowanie i konturowanie zarostu brzytwą, wykończenie olejkiem lub balsamem.",
	},
	{
		name: "Strzyżenie + broda",
		desc: "Włosy i zarost w jednym stylu podczas jednej wizyty – najczęściej wybierane combo.",
	},
	{
		name: "Odsiwianie",
		desc: "Odświeżenie koloru włosów i brody z naturalnym efektem.",
	},
	{
		name: "Stylizacja i porada",
		desc: "Podpowiemy, jak układać fryzurę w domu i jakich kosmetyków używać.",
	},
];

export const LOCATIONS = {
	sulkowice: {
		key: "sulkowice",
		slug: "/barber-sulkowice",
		city: "Sułkowice",
		cityIn: "w Sułkowicach",
		name: "MENTO Barber Shop Sułkowice",
		subtitle: "Fryzjer męski blisko Myślenic",
		street: "ul. Sportowa 133",
		postal: "32-440 Sułkowice",
		phone: "+48735067757",
		phoneDisplay: "735 067 757",
		mapUrl: "https://maps.app.goo.gl/8kdjDuNQPuEFKkMs5",
		hours: hours("11:00 – 20:00"),
		mapQuery: "MENTO Barber Shop, Sportowa 133, 32-440 Sułkowice",
		intro: [
			"MENTO Barber Shop w Sułkowicach to nowoczesna odsłona MENTO – ten sam standard, który od 2021 roku znają klienci z Bochni, teraz przy ul. Sportowej 133. Strzyżemy klasycznie i nowocześnie: fade, krótkie formy, dłuższe fryzury, a do tego pełna obsługa brody.",
			"To najbliższy salon MENTO dla mieszkańców Myślenic, Krzywaczki, Biertowic, Harbutowic, Rudnika i Głogoczowa. Przyjeżdżasz, parkujesz za darmo, siadasz na fotel – resztą zajmą się Kasia i Adrian.",
		],
		highlights: ["Darmowy parking", "Rezerwacja online", "Blisko Myślenic"],
		team: [
			{
				name: "Kasia",
				img: Kasia,
				note: "Pierwsza barberka w Sułkowicach. Uwielbia nowoczesne formy jak low fade czy mullet.",
			},
			{
				name: "Adrian",
				img: Adrian,
				note: "Junior z pozytywnym vibe'em. Po godzinach boks i sport, za fotelem świeże cięcia.",
			},
		],
		gallery: [
			{ src: galeria18, alt: "Skin fade – realizacja barberów MENTO Barber Shop" },
			{ src: galeria8, alt: "Taper fade – strzyżenie męskie w MENTO Barber Shop" },
			{ src: galeria24, alt: "Konturowanie zarostu brzytwą – barberzy MENTO" },
			{ src: galeria21, alt: "Krótkie strzyżenie męskie – MENTO Barber Shop" },
		],
		access: [
			{ from: "Z Myślenic", how: "kilkanaście minut samochodem – to najbliższy salon MENTO dla Myśleniczan." },
			{ from: "Z Krakowa", how: "Zakopianką (DK7) do Głogoczowa, dalej przez Krzywaczkę do Sułkowic." },
			{ from: "Z okolicznych wsi", how: "z Krzywaczki, Biertowic, Harbutowic i Rudnika dojedziesz w kilka minut." },
			{ from: "Na miejscu", how: "darmowy parking dla klientów salonu." },
		],
		nearby: [
			"Sułkowice", "Myślenice", "Krzywaczka", "Biertowice", "Harbutowice", "Rudnik",
			"Głogoczów", "Jasienica", "Bęczarka", "Izdebnik", "Lanckorona", "Mogilany",
			"Skawina", "Kalwaria Zebrzydowska",
		],
		faq: [
			{
				q: "Jak umówić się do barbera w Sułkowicach?",
				a: "Najwygodniej przez aplikację MENTO (app.mentobarber.pl) – zobaczysz tam wolne terminy i wybierzesz barbera. Możesz też zadzwonić pod numer 735 067 757.",
			},
			{
				q: "W jakich godzinach jest otwarty salon w Sułkowicach?",
				a: "Od poniedziałku do piątku w godzinach 11:00–20:00, w soboty 8:00–14:00. W niedziele salon jest zamknięty.",
			},
			{
				q: "Czy przy salonie jest parking?",
				a: "Tak – klienci salonu w Sułkowicach mają do dyspozycji darmowy parking.",
			},
			{
				q: "Czy to dobry barber dla osób z Myślenic?",
				a: "Tak. Salon przy ul. Sportowej 133 w Sułkowicach to najbliższy MENTO dla mieszkańców Myślenic – dojazd zajmuje kilkanaście minut samochodem.",
			},
			{
				q: "Gdzie jest drugi salon MENTO?",
				a: "W Bochni, przy ul. Nad Babicą 2 – to tam w 2021 roku zaczęła się historia MENTO.",
			},
		],
		other: { slug: "/barber-bochnia", label: "Barber Bochnia", address: "ul. Nad Babicą 2, Bochnia" },
		extras: [],
	},

	bochnia: {
		key: "bochnia",
		slug: "/barber-bochnia",
		city: "Bochnia",
		cityIn: "w Bochni",
		name: "MENTO Barber Shop Bochnia",
		subtitle: "Fryzjer męski – ul. Nad Babicą 2",
		street: "ul. Nad Babicą 2",
		postal: "32-700 Bochnia",
		phone: "+48798144399",
		phoneDisplay: "798 144 399",
		mapUrl: "https://maps.app.goo.gl/VbPsZzhGmUHndtjV6",
		hours: hours("08:00 – 20:00"),
		mapQuery: "MENTO Barber Shop, Nad Babicą 2, 32-700 Bochnia",
		intro: [
			"To w Bochni w 2021 roku narodziło się MENTO. Salon przy ul. Nad Babicą 2 to zespół barberów, którym zaufały tysiące klientów – miejsce z doświadczeniem, klimatem i najwyższym standardem strzyżenia męskiego oraz pielęgnacji brody.",
			"Wygodnie dojedziesz do nas z Nowego Wiśnicza, Rzezawy, Łapanowa, Brzeska, Niepołomic i okolic. Na miejscu kupisz też kosmetyki do włosów i brody, a w salonie prowadzimy szkolenia barberskie.",
		],
		highlights: ["Tu zaczęło się MENTO", "Rezerwacja online", "Kosmetyki na miejscu"],
		team: [
			{ name: "Jimmy", img: Jimmy, note: "Kocha klasyczne cięcia, ale z radością eksperymentuje z nowymi trendami." },
			{ name: "Dawid", img: Dawid, note: "Właściciel MENTO. Pracuje za fotelem i rozwija cały zespół." },
			{ name: "Kacper", img: Kacper, note: "Fan fryzur typu crop. Sport to jego zajawka, humor – znak rozpoznawczy." },
			{ name: "Anna", img: Anna, note: "Klasyczne strzyżenia z nowoczesnym sznytem. Startuje w zawodach barberskich." },
			{ name: "Ola", img: Ola, note: "Specjalistka od męskich cięć – cieniowanie od zera to jej ulubiona technika." },
			{ name: "Julia", img: Julia, note: "Czuje się świetnie w długich formach i efekcie „messy look”." },
			{ name: "Gabi", img: Gabi, note: "Fryzury modernistyczne z teksturą, french crop i klasyczny side part." },
			{ name: "Krystian", img: Krystian, note: "Młody barber, który lubi wyzwania. Po godzinach – muzyka." },
		],
		gallery: [
			{ src: galeria4, alt: "Klasyczne strzyżenie męskie z cieniowaniem – barber Bochnia" },
			{ src: galeria11, alt: "Pompadour z płynnym przejściem – MENTO Barber Shop Bochnia" },
			{ src: galeria7, alt: "Strzyżenie i trymowanie brody – fryzjer męski Bochnia" },
			{ src: galeria20, alt: "Pielęgnacja i odsiwianie brody – barber Bochnia" },
		],
		access: [
			{ from: "Z Nowego Wiśnicza, Rzezawy i Łapanowa", how: "szybki dojazd – to najbliższy barbershop MENTO w okolicy." },
			{ from: "Z Brzeska, Niepołomic i Kłaja", how: "wygodnie autostradą A4 (węzeł Bochnia) lub drogą krajową 94." },
			{ from: "Z Lipnicy Murowanej, Trzciany i Żegociny", how: "salon w Bochni to najbliższe MENTO dla całego powiatu bocheńskiego." },
		],
		nearby: [
			"Bochnia", "Nowy Wiśnicz", "Rzezawa", "Łapanów", "Brzesko", "Niepołomice", "Kłaj",
			"Lipnica Murowana", "Trzciana", "Żegocina", "Drwinia",
		],
		faq: [
			{
				q: "Jak umówić się do barbera w Bochni?",
				a: "Najwygodniej przez aplikację MENTO (app.mentobarber.pl) – zobaczysz tam wolne terminy i wybierzesz barbera. Możesz też zadzwonić pod numer 798 144 399.",
			},
			{
				q: "W jakich godzinach jest otwarty salon w Bochni?",
				a: "Od poniedziałku do piątku w godzinach 8:00–20:00, w soboty 8:00–14:00. W niedziele salon jest zamknięty.",
			},
			{
				q: "Czy mogę kupić kosmetyki do włosów i brody?",
				a: "Tak – w salonie w Bochni kupisz stacjonarnie kosmetyki, których używamy na co dzień: olejki i balsamy do brody, pasty, pomady i pudry do włosów.",
			},
			{
				q: "Czy prowadzicie szkolenia barberskie?",
				a: "Tak – w Bochni prowadzimy szkolenia: krótkie formy i fade, broda + toner oraz pokazy Look & Learn.",
			},
			{
				q: "Gdzie jest drugi salon MENTO?",
				a: "W Sułkowicach koło Myślenic, przy ul. Sportowej 133 – z darmowym parkingiem.",
			},
		],
		other: { slug: "/barber-sulkowice", label: "Barber Sułkowice", address: "ul. Sportowa 133, Sułkowice (k. Myślenic)" },
		extras: [
			{ to: "/cosmetics", label: "Kosmetyki do włosów i brody", desc: "Zobacz produkty, które kupisz w salonie." },
			{ to: "/training", label: "Szkolenia barberskie", desc: "Kursy fade, broda + toner, Look & Learn." },
			{ href: "https://mentocare.pl", label: "Mento Care – kosmetologia", desc: "Zabiegi na skórę i skórę głowy w Bochni." },
		],
	},
};
