import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { LOCATIONS, SERVICES, BOOKING_URL } from "../data/locations";

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const outline = {
	fontFamily: '"Arial", "Helvetica", sans-serif',
	color: "transparent",
	WebkitTextStroke: "2px #ff6600",
	textShadow: "0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
};

const Reveal = ({ children, className = "" }) => (
	<motion.section
		className={className}
		initial='hidden'
		whileInView='visible'
		viewport={{ once: true, amount: 0.1 }}
		variants={fadeUp}>
		{children}
	</motion.section>
);

Reveal.propTypes = { children: PropTypes.node, className: PropTypes.string };

const SectionTitle = ({ eyebrow, children }) => (
	<div className='mb-8 md:mb-10'>
		<p className='text-prime uppercase tracking-[0.25em] text-xs font-bold mb-3'>{eyebrow}</p>
		<h2 className='text-white font-bold uppercase text-3xl md:text-4xl tracking-wide'>{children}</h2>
	</div>
);

SectionTitle.propTypes = { eyebrow: PropTypes.string, children: PropTypes.node };

const btnPrimary =
	"text-center bg-[#f97316] text-white py-4 px-8 rounded-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors";
const btnOutline =
	"text-center border-2 border-[#f97316] text-[#f97316] py-4 px-8 rounded-lg font-bold uppercase tracking-wider hover:bg-[#f97316] hover:text-white transition-colors";

const LocationPage = ({ locationKey }) => {
	const loc = LOCATIONS[locationKey];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [locationKey]);

	const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`;

	return (
		<main
			className='min-h-screen relative overflow-x-hidden pb-24'
			style={{
				background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundBlendMode: "multiply",
			}}>
			<Navbar />

			<img
				src={Gradient}
				alt=''
				aria-hidden='true'
				className='absolute top-0 right-0 w-full h-auto pointer-events-none z-0 opacity-50'
				style={{ top: -400, right: -400 }}
			/>

			<div className='relative z-10 pt-[130px] md:pt-[180px] px-5 md:px-12 lg:px-20 max-w-7xl mx-auto'>
				<nav aria-label='Ścieżka nawigacji' className='text-xs text-gray-500 mb-8 md:mb-10'>
					<Link to='/' className='hover:text-prime transition-colors'>
						MENTO Barber Shop
					</Link>
					<span className='mx-2'>/</span>
					<span className='text-gray-300'>Barber {loc.city}</span>
				</nav>

				{/* HERO + DANE KONTAKTOWE */}
				<motion.div
					initial='hidden'
					animate='visible'
					variants={fadeUp}
					className='grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start'>
					<div>
						<h1 className='uppercase font-bold leading-[0.95]'>
							<span className='block' style={{ ...outline, fontSize: "clamp(3rem, 7vw, 6rem)" }}>
								Barber
							</span>
							{" "}
							<span
								className='block text-[#f97316]'
								style={{
									fontFamily: '"Arial", "Helvetica", sans-serif',
									fontSize: "clamp(3rem, 7vw, 6rem)",
									textShadow: "0 0 18px rgba(255,102,0,0.45)",
								}}>
								{loc.city}
							</span>
						</h1>
						<p className='mt-5 text-white uppercase tracking-[0.2em] text-sm md:text-base font-semibold'>
							{loc.subtitle}
						</p>
						{loc.intro.map((p, i) => (
							<p key={i} className='text-gray-300 text-[15px] leading-relaxed mt-5 max-w-2xl'>
								{p}
							</p>
						))}
						<ul className='flex flex-wrap gap-2 mt-6'>
							{loc.highlights.map((h) => (
								<li
									key={h}
									className='border border-[#f97316]/50 text-[#f97316] text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full'>
									{h}
								</li>
							))}
						</ul>
						<div className='flex flex-col sm:flex-row gap-3 mt-8'>
							<a href={BOOKING_URL} className={btnPrimary}>
								Zarezerwuj wizytę
							</a>
							<a href={`tel:${loc.phone}`} className={btnOutline}>
								Zadzwoń: {loc.phoneDisplay}
							</a>
						</div>
					</div>

					<aside className='rounded-2xl border border-gray-800 bg-[#111111]/90 p-7 md:p-9 shadow-2xl'>
						<p className='text-white font-bold text-xl uppercase tracking-wider'>
							MENTO <span className='text-[#f97316]'>{loc.city}</span>
						</p>
						<address className='not-italic text-gray-300 text-sm leading-relaxed mt-4'>
							{loc.street}
							<br />
							{loc.postal}
							<br />
							<a href={`tel:${loc.phone}`} className='text-white font-bold hover:text-prime transition-colors'>
								tel. {loc.phoneDisplay}
							</a>
						</address>
						<a
							href={loc.mapUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block text-prime text-sm mt-3 hover:underline'>
							Wyznacz trasę w Google Maps →
						</a>
						<div className='border-t border-gray-800 my-6' />
						<p className='text-gray-400 uppercase text-xs font-bold tracking-[0.2em] mb-3'>Godziny otwarcia</p>
						<dl className='text-sm'>
							{loc.hours.map((h) => (
								<div key={h.days} className='flex justify-between gap-4 py-2 border-b border-gray-800/70 last:border-0'>
									<dt className='text-gray-300'>{h.days}</dt>
									<dd className={h.hours === "Zamknięte" ? "text-gray-500" : "text-white font-semibold"}>
										{h.hours}
									</dd>
								</div>
							))}
						</dl>
					</aside>
				</motion.div>

				{/* MAPA */}
				<Reveal className='mt-16 md:mt-24'>
					<div className='rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-[#111111]'>
						<iframe
							title={`Mapa dojazdu – ${loc.name}, ${loc.street}`}
							src={mapSrc}
							className='w-full h-[320px] md:h-[420px] block'
							style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) grayscale(0.35)" }}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							allowFullScreen
						/>
					</div>
				</Reveal>

				{/* ZESPÓŁ */}
				<Reveal className='mt-20 md:mt-28'>
					<SectionTitle eyebrow='Zespół'>Barberzy {loc.cityIn}</SectionTitle>
					<div
						className={`grid gap-4 md:gap-6 ${
							loc.team.length <= 2 ? "grid-cols-2 max-w-2xl" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
						}`}>
						{loc.team.map((m) => (
							<article
								key={m.name}
								className='group rounded-2xl overflow-hidden border border-gray-800 bg-[#111111] hover:border-[#f97316] transition-colors duration-300'>
								<div
									className='relative aspect-[4/5] overflow-hidden'
									style={{
										background:
											"radial-gradient(circle at 50% 35%, rgba(230,117,67,0.30), rgba(17,17,17,0) 65%)",
									}}>
									<img
										src={m.img}
										alt={`${m.name} – barber w MENTO Barber Shop ${loc.city}`}
										loading='lazy'
										width='480'
										height='600'
										className='absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105'
									/>
									<div
										className='absolute inset-x-0 bottom-0 h-1/3'
										style={{ background: "linear-gradient(180deg, rgba(17,17,17,0) 0%, #111111 100%)" }}
									/>
									<h3 className='absolute left-4 bottom-3 text-white font-bold uppercase text-lg md:text-2xl tracking-wider'>
										{m.name}
									</h3>
								</div>
								<p className='text-gray-400 text-[13px] leading-relaxed px-4 pb-5 pt-1'>{m.note}</p>
							</article>
						))}
					</div>
				</Reveal>

				{/* USŁUGI */}
				<Reveal className='mt-20 md:mt-28'>
					<SectionTitle eyebrow='Usługi'>Co robimy {loc.cityIn}</SectionTitle>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
						{SERVICES.map((s, i) => (
							<div
								key={s.name}
								className='rounded-2xl border border-gray-800 bg-[#111111]/80 p-6 hover:border-[#f97316] transition-colors duration-300'>
								<span className='text-prime font-bold text-sm'>{String(i + 1).padStart(2, "0")}</span>
								<h3 className='text-white font-bold uppercase tracking-wide text-lg mt-2'>{s.name}</h3>
								<p className='text-gray-400 text-sm leading-relaxed mt-2'>{s.desc}</p>
							</div>
						))}
					</div>
					<p className='text-gray-400 text-sm mt-6'>
						Aktualne ceny i wolne terminy sprawdzisz w{" "}
						<a href={BOOKING_URL} className='text-prime hover:underline'>
							aplikacji MENTO
						</a>
						.
					</p>
				</Reveal>

				{/* REALIZACJE */}
				<Reveal className='mt-20 md:mt-28'>
					<SectionTitle eyebrow='Realizacje'>Nasze prace</SectionTitle>
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
						{loc.gallery.map((g) => (
							<div
								key={g.alt}
								className='p-1.5 border-[3px] border-prime rounded-md shadow-[0_0_7px_rgba(255,120,0,0.8),inset_0_0_7px_rgba(255,120,0,0.8)]'>
								<img src={g.src} alt={g.alt} loading='lazy' className='w-full aspect-[4/5] object-cover rounded-md' />
							</div>
						))}
					</div>
				</Reveal>

				{/* DOJAZD + OKOLICA */}
				<Reveal className='mt-20 md:mt-28 grid lg:grid-cols-2 gap-12'>
					<div>
						<SectionTitle eyebrow='Dojazd'>Jak do nas trafić</SectionTitle>
						<ul className='space-y-4'>
							{loc.access.map((a) => (
								<li key={a.from} className='flex gap-4'>
									<span className='mt-2 w-2 h-2 rounded-full bg-prime shrink-0' />
									<p className='text-gray-300 text-[15px] leading-relaxed'>
										<strong className='text-white'>{a.from}</strong> – {a.how}
									</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<SectionTitle eyebrow='Okolica'>Wygodny dojazd z</SectionTitle>
						<ul className='flex flex-wrap gap-2'>
							{loc.nearby.map((t) => (
								<li key={t} className='text-sm text-gray-300 border border-gray-700 rounded-full px-3 py-1.5'>
									{t}
								</li>
							))}
						</ul>
					</div>
				</Reveal>

				{/* DODATKI (Bochnia: kosmetyki, szkolenia, Mento Care) */}
				{loc.extras.length > 0 && (
					<Reveal className='mt-20 md:mt-28'>
						<SectionTitle eyebrow='Więcej w MENTO'>Nie tylko strzyżenie</SectionTitle>
						<div className='grid md:grid-cols-3 gap-4 md:gap-5'>
							{loc.extras.map((x) => {
								const inner = (
									<>
										<h3 className='text-white font-bold uppercase tracking-wide text-lg group-hover:text-[#f97316] transition-colors'>
											{x.label} →
										</h3>
										<p className='text-gray-400 text-sm leading-relaxed mt-2'>{x.desc}</p>
									</>
								);
								const cls =
									"group block rounded-2xl border border-gray-800 bg-[#111111]/80 p-6 hover:border-[#f97316] transition-colors duration-300";
								return x.to ? (
									<Link key={x.label} to={x.to} className={cls}>
										{inner}
									</Link>
								) : (
									<a key={x.label} href={x.href} target='_blank' rel='noopener noreferrer' className={cls}>
										{inner}
									</a>
								);
							})}
						</div>
					</Reveal>
				)}

				{/* FAQ */}
				<Reveal className='mt-20 md:mt-28 max-w-4xl'>
					<SectionTitle eyebrow='FAQ'>Najczęstsze pytania</SectionTitle>
					<div className='divide-y divide-gray-800 border-y border-gray-800'>
						{loc.faq.map((f) => (
							<details key={f.q} className='group py-5'>
								<summary className='flex justify-between items-center gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden'>
									<h3 className='text-white font-semibold text-base md:text-lg'>{f.q}</h3>
									<span className='text-prime text-2xl leading-none transition-transform duration-300 group-open:rotate-45'>
										+
									</span>
								</summary>
								<p className='text-gray-400 text-[15px] leading-relaxed mt-3 pr-8'>{f.a}</p>
							</details>
						))}
					</div>
				</Reveal>

				{/* CTA */}
				<Reveal className='mt-20 md:mt-28 rounded-2xl border border-gray-800 bg-[#111111]/90 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl'>
					<div>
						<h2 className='text-white font-bold uppercase text-2xl md:text-3xl tracking-wide'>
							Wpadaj na fotel <span className='text-[#f97316]'>{loc.cityIn}</span>
						</h2>
						<p className='text-gray-400 mt-2 text-sm'>
							{loc.street}, {loc.postal} · tel. {loc.phoneDisplay}
						</p>
					</div>
					<a href={BOOKING_URL} className={`${btnPrimary} shrink-0`}>
						Zarezerwuj wizytę
					</a>
				</Reveal>

				<p className='text-gray-500 text-sm mt-10'>
					Drugi salon MENTO:{" "}
					<Link to={loc.other.slug} className='text-prime hover:underline'>
						{loc.other.label}
					</Link>{" "}
					– {loc.other.address}.
				</p>
			</div>
		</main>
	);
};

LocationPage.propTypes = {
	locationKey: PropTypes.oneOf(["sulkowice", "bochnia"]).isRequired,
};

export default LocationPage;
