import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LOCATIONS } from "../data/locations";

/*
 * Per-route SEO for the SPA: sets <title>, meta description, canonical,
 * Open Graph / Twitter tags and (for blog posts) BlogPosting JSON-LD.
 * Bez tego każda podstrona miała canonical = strona główna, więc Google
 * traktował artykuły z bloga jak duplikaty homepage.
 */

const SITE = "https://mentobarber.pl";
const BLOG_DATE = "2025-09-09";

const locationJsonLd = (loc) => [
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: loc.faq.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "MENTO Barber Shop", item: SITE + "/" },
			{ "@type": "ListItem", position: 2, name: `Barber ${loc.city}`, item: SITE + loc.slug },
		],
	},
];

const PAGES = {
	"/barber-sulkowice": {
		title: "Barber Sułkowice – fryzjer męski koło Myślenic | MENTO",
		description:
			"Barber w Sułkowicach, ul. Sportowa 133 – kilkanaście minut od Myślenic. Strzyżenie męskie, fade, broda. Darmowy parking, pn–pt 11–20, sob 8–14. Zarezerwuj online!",
		jsonld: locationJsonLd(LOCATIONS.sulkowice),
	},
	"/barber-bochnia": {
		title: "Barber Bochnia – fryzjer męski, ul. Nad Babicą 2 | MENTO",
		description:
			"Barber w Bochni, ul. Nad Babicą 2 – tu narodziło się MENTO. Strzyżenie męskie, fade, broda, odsiwianie. Pn–pt 8–20, sob 8–14. Zarezerwuj wizytę online!",
		jsonld: locationJsonLd(LOCATIONS.bochnia),
	},
	"/": {
		title: "Barber Bochnia, Sułkowice, Myślenice – Fryzjer Męski | MENTO",
		description:
			"MENTO Barber Shop – barber i fryzjer męski w Bochni (Nad Babicą 2) i w Sułkowicach (Sportowa 133) koło Myślenic. Strzyżenie męskie, fade, broda, odsiwianie. Umów wizytę online!",
	},
	"/cosmetics": {
		title: "Kosmetyki do włosów i brody – Mento Barber Shop Bochnia",
		description:
			"Olejki i balsamy do brody, pasty, pomady i pudry do włosów (Uppercut, Reuzel, Montibello i inne). Kosmetyki barberskie kupisz stacjonarnie w Mento Barber Shop w Bochni.",
	},
	"/training": {
		title: "Szkolenia barberskie – fade, broda, ModCut | Mento Barber",
		description:
			"Szkolenia barberskie w Mento Barber Shop w Bochni: krótkie formy i fade, broda + toner, pokazy Look & Learn (ModCut i Mullet) oraz szkolenia wyjazdowe dla salonów.",
	},
	"/blog": {
		title: "Blog barberski – porady o włosach i brodzie | Mento Barber",
		description:
			"Porady barberów z Mento Barber Shop (Bochnia, Sułkowice): jak często się strzyc, jak dbać o brodę, stylizacja włosów, wypadanie włosów i przygotowanie pana młodego.",
	},
	"/blog/Frequency": {
		title: "Co ile chodzić do barbera na strzyżenie? | Mento Barber",
		headline: "Co ile powinienem chodzić do barbera na strzyżenie?",
		description:
			"Fade, french crop czy dłuższe włosy – podpowiadamy, co ile tygodni wracać do barbera, żeby fryzura i broda zawsze wyglądały świeżo. Porady z Mento Barber Shop.",
	},
	"/blog/BeardCondition": {
		title: "Jak pielęgnować brodę, żeby była gęsta? | Mento Barber",
		headline: "Jak pielęgnować brodę, żeby była gęsta i zadbana?",
		description:
			"Mycie, nawilżanie, olejki, przycinanie i peeling – 6 kroków do gęstej i zadbanej brody. Sprawdzone porady barberów z Mento Barber Shop.",
	},
	"/blog/WeddingDay": {
		title: "Pan młody – fryzura i broda przed ślubem | Mento Barber",
		headline: "Jak pan młody powinien przygotować się do wielkiego dnia?",
		description:
			"Kiedy iść do barbera przed ślubem, jak zadbać o brodę i skórę, co zrobić dzień przed weselem? Plan przygotowań pana młodego od Mento Barber Shop.",
	},
	"/blog/Bangs": {
		title: "Wypadanie włosów u mężczyzn – co robić? | Mento Barber",
		headline: "Wypadanie włosów",
		description:
			"Skóra głowy, pielęgnacja, dieta i masaże – 5 sposobów, by spowolnić wypadanie włosów u mężczyzn. Porady barberów z Mento Barber Shop.",
	},
	"/blog/Balding": {
		title: "Jak zapobiegać łysieniu, gdy geny nie sprzyjają? | Mento",
		headline: "Jak zapobiegać łysieniu, gdy geny nie sprzyjają?",
		description:
			"Łysienie w rodzinie? Mezoterapia igłowa i mikronakłuwanie z egzosomami pomagają działać prewencyjnie. Dowiedz się, dlaczego warto zacząć wcześniej.",
	},
	"/blog/HairStyling": {
		title: "Stylizacja włosów męskich – jak to zrobić dobrze? | Mento",
		headline: "Stylizacja włosów – jak to zrobić dobrze?",
		description:
			"Pomada czy puder? Szybka stylizacja włosów krok po kroku w 5 minut – porady barberów z Mento Barber Shop.",
	},
	"/blog/Haircut": {
		title: "Dobra fryzura = dobre wrażenie | Mento Barber Shop",
		headline: "Dobra fryzura = dobre wrażenie",
		description:
			"Dlaczego fryzura tak mocno wpływa na pierwsze wrażenie – w pracy i na co dzień? Sprawdź, czemu dobre strzyżenie to inwestycja w siebie.",
	},
	"/blog/RecedingHairlineHairstyle": {
		title: "Najlepsze fryzury na zakola – quiff, french crop | Mento",
		headline: "Najlepsze fryzury na zakola",
		description:
			"Quiff, french crop, middle part, side part czy buzz cut – jakie fryzury najlepiej maskują zakola? Przegląd od barberów z Mento Barber Shop.",
	},
};

const setAttr = (selector, attr, value) => {
	const el = document.head.querySelector(selector);
	if (el) el.setAttribute(attr, value);
};

const Seo = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
		const known = Object.prototype.hasOwnProperty.call(PAGES, path);
		const page = known ? PAGES[path] : PAGES["/"];
		const url = SITE + (path === "/" ? "/" : path);

		document.title = page.title;
		setAttr('meta[name="description"]', "content", page.description);
		setAttr('meta[property="og:title"]', "content", page.title);
		setAttr('meta[property="og:description"]', "content", page.description);
		setAttr('meta[property="og:url"]', "content", url);
		setAttr('meta[property="og:type"]', "content", path.startsWith("/blog/") ? "article" : "website");
		setAttr('meta[name="twitter:title"]', "content", page.title);
		setAttr('meta[name="twitter:description"]', "content", page.description);
		// Nieistniejące adresy (SPA zwraca 200 dla wszystkiego) – nie indeksuj.
		setAttr('meta[name="robots"]', "content", known ? "index, follow, max-image-preview:large" : "noindex, follow");

		let canonical = document.head.querySelector('link[rel="canonical"]');
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.setAttribute("rel", "canonical");
			document.head.appendChild(canonical);
		}
		canonical.setAttribute("href", known ? url : SITE + "/");

		const old = document.getElementById("page-jsonld");
		if (old) old.remove();
		const addJsonLd = (data) => {
			const script = document.createElement("script");
			script.type = "application/ld+json";
			script.id = "page-jsonld";
			script.text = JSON.stringify(data);
			document.head.appendChild(script);
		};
		if (known && page.jsonld) {
			addJsonLd(page.jsonld);
		} else if (known && path.startsWith("/blog/")) {
			addJsonLd({
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: page.headline || page.title,
				description: page.description,
				datePublished: BLOG_DATE,
				inLanguage: "pl-PL",
				mainEntityOfPage: url,
				image: SITE + "/wyszukiwarka.jpg",
				author: { "@id": SITE + "/#organization" },
				publisher: { "@id": SITE + "/#organization" },
			});
		}
	}, [pathname]);

	return null;
};

export default Seo;
