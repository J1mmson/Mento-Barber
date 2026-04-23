// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.webp";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import recedingHairline from "../assets/zakola.webp";
import hairstyle1 from "../assets/hairstyle/hairstyle1.jpg";
import hairstyle2 from "../assets/hairstyle/hairstyle2.jpg";
import hairstyle3 from "../assets/hairstyle/hairstyle3.jpg";
import hairstyle4 from "../assets/hairstyle/hairstyle4.jpg";
import hairstyle5 from "../assets/hairstyle/hairstyle5.jpg";
import hairstyle6 from "../assets/hairstyle/hairstyle6.jpg";
import hairstyle7 from "../assets/hairstyle/hairstyle7.jpg";

const BlogRecedingHairlineHairstyle = () => {
	const isMobile = useIsMobile();

	return !isMobile ? (
		<div className='h-screen overflow-hidden'>
			<Navbar />
			{/* Stałe tło */}
			<div
				className='fixed top-0 left-0 w-full h-full z-[-1]'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}
			/>

			{/* Kontener z przewijaną treścią */}
			<div className='relative h-screen overflow-auto'>
				<div className='flex items-center justify-center mt-[10%] mb-[5%]'>
					<div
						className='w-[65%] bg-[#171D1F] flex flex-col p-[32px]  rounded-[10px]'
						style={{ boxShadow: "0px 8px 10px #00000099" }}>
						<div className='rounded-[6px] overflow-hidden h-[400px] flex justify-center items-center'>
							<img
								src={recedingHairline}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 23.04.2026
						</p>
						<h1 className='text-[32px] text-prime font-bold mt-[6px]'>
							Najlepsze fryzury na zakola
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Zakola mogą stanowić wyzwanie, ale odpowiednio dobrana fryzura
							może zdziałać cuda, pomagając ukryć to, co Cię niepokoi. To
							problem, który dotyka wielu mężczyzn, i nie ma w tym nic złego.
							Zakola są naturalną częścią procesu starzenia się, jednak nie
							każdy jest nimi zachwycony. Dla tych, którzy chcieliby zatuszować
							ten aspekt swojego wyglądu, istnieje wiele kreatywnych rozwiązań.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							W dzisiejszym artykule przedstawimy różne fryzury, które pomogą
							ukryć zakola i zyskać pewność siebie. Wybór fryzury zależy od
							Twojego stylu, preferencji i stopnia utraty włosów. Oto kilka
							propozycji, które mogą Ci pomóc:
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[32px] text-prime font-bold'>1. Quiff</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Fryzura <b>Quiff</b> to doskonały sposób na ukrycie zakoli.
							Charakteryzuje się dłuższym włosiem na górze głowy, które jest
							podniesione do góry. Ta objętość na górze pomaga odciągnąć uwagę
							od obszarów zakoli. Możesz wyeksponować kształt twarzy, a
							jednocześnie zachować elegancki wygląd.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-[50%] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle1}
									alt='fryzura typu Quiff'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold'>
							2. French Crop
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							<b>French Crop</b>, to modernistyczna i
							uniwersalna fryzura, która działa świetnie na zakola. Włosy z
							przodu są dłuższe i opadają na czoło, co pomaga ukryć obszary
							zakoli. To doskonała opcja dla tych, którzy chcą zachować
							naturalny wygląd.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-[50%] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle6}
									alt='fryzura typu French Crop'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold'>
							3. Middle Part
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							<b>Middle Part</b> to kolejna opcja, która
							może pomóc ukryć zakola. Włosy są równomiernie rozdzielone na dwie
							części, co skupia uwagę na centralnej części twarzy, a nie na
							obszarach zakoli.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-[50%] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle3}
									alt='fryzura typu Middle Part'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold'>
							4. Side Part
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							<b>Side Part</b> to klasyczna fryzura, w której włosy są starannie
							zaczesane na bok. Ten wygląd jest nie tylko modny, ale także
							skupia uwagę na innych obszarach twarzy, nie pozostawiając zakoli
							w pierwszym planie.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-[50%] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle4}
									alt='fryzura typu Side Part'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold'>
							5. Buzz Cut (Krótki zerowany)
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							<b>Buzz Cut</b> to krótka fryzura, która doskonale nadaje się do
							ukrywania zakoli. Ta prostota nie tylko optycznie zmniejsza
							znaczenie zakoli, ale także jest niezwykle łatwa w utrzymaniu. Co
							więcej, dodaje charakteru i pewności siebie.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-[50%] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle5}
									alt='fryzura typu Buzz Cut'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[32px] text-prime font-bold'>
							7. Na Łyso (Bald)
						</h1>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Dla tych, którzy lubią minimalizm i niski poziom konserwacji,
							ogolona głowa jest wspaniałym wyborem. To odważne i pewne siebie
							podejście, które doskonale maskuje zakola. Dodatkowo, łysienie
							może nadać Twojej sylwetce charakter.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-[50%] bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle7}
									alt='fryzura typu Bald'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Niezależnie od tego, jakie masz zakola, istnieje idealna fryzura,
							która pomoże Ci poczuć się pewnie i stylowo. Wybierz tę, która
							najlepiej odpowiada Twojemu stylowi i preferencjom.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-bold'>
							Jak Pozbyć Się Zakoli?
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Jeśli marzysz o trwałym rozwiązaniu, warto skonsultować się z
							dermatologiem lub chirurgiem plastycznym w celu rozważenia
							procedur takich jak przeszczep włosów. To długoterminowa metoda,
							która może kompletnie wyeliminować problem zakoli.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Jeśli potrzebujesz fachowej pomocy, to profesjonalny Barber jest
							osobą, której możesz zaufać. A jeśli jesteś w okolicach Bochni, to
							mamy dla Ciebie jeszcze lepszą wiadomość! MENTO Barber Bochnia to
							miejsce, gdzie Twoje pragnienia związane z męską urodą mogą stać
							się rzeczywistością.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light'>
							Nasza ekipa barberów to prawdziwi eksperci w dziedzinie
							fryzjerstwa i pielęgnacji zarostu. Zaufaj naszym zdolnościom, a
							poczujesz się pewniej i jeszcze bardziej stylowo. Nasze podejście
							jest oparte na pasji, precyzji i kreatywności, co sprawia, że
							każda wizyta u nas to nie tylko strzyżenie, to prawdziwa
							transformacja.
						</p>
						<p className='text-[16px] text-white mt-[12px] font-light mb-[42px]'>
							Czekamy na Ciebie w MENTO Barber Bochnia! Nasza pasja,
							doświadczenie i nowoczesne podejście sprawią, że opuścisz nasz
							salon z uśmiechem na twarzy i pewnością siebie. Przyjdź do nas i
							odkryj, co oznacza prawdziwa męska pielęgnacja.
						</p>
					</div>
				</div>
			</div>
			<img
				src={Gradient}
				alt='Gradient'
				className='fixed w-full h-auto pointer-events-none z-[-1] opacity-70'
				style={{ top: "-50%" }}
			/>
		</div>
	) : (
		<div className='relative h-screen overflow-hidden'>
			<Navbar />
			{/* Stałe tło */}
			<div
				className='fixed top-0 left-0 w-full h-full z-[-1]'
				style={{
					background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}
			/>

			{/* Kontener z przewijaną treścią */}
			<div className='relative h-screen overflow-auto'>
				<div className='flex items-center justify-center mt-[100px] mb-[5%]'>
					<div
						className='w-full bg-[#171D1F] flex flex-col p-[32px] m-[16px] rounded-[10px] z-10'
						style={{ boxShadow: "0px 8px 10px #00000099" }}>
						<div className='h-[200px] rounded-[6px] overflow-hidden flex justify-center items-center'>
							<img
								src={recedingHairline}
								alt='panel'
								className='w-full h-auto object-cover'
							/>
						</div>
						<p className='text-[12px] text-white mt-[32px] font-light'>
							Dodano: 24.03.2025
						</p>
						<h1 className='text-[24px] text-prime font-bold mt-[6px]'>
							Najlepsze fryzury na zakola
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Zakola mogą stanowić wyzwanie, ale odpowiednio dobrana fryzura
							może zdziałać cuda, pomagając ukryć to, co Cię niepokoi. To
							problem, który dotyka wielu mężczyzn, i nie ma w tym nic złego.
							Zakola są naturalną częścią procesu starzenia się, jednak nie
							każdy jest nimi zachwycony. Dla tych, którzy chcieliby zatuszować
							ten aspekt swojego wyglądu, istnieje wiele kreatywnych rozwiązań.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							W dzisiejszym artykule przedstawimy różne fryzury, które pomogą
							ukryć zakola i zyskać pewność siebie. Wybór fryzury zależy od
							Twojego stylu, preferencji i stopnia utraty włosów. Oto kilka
							propozycji, które mogą Ci pomóc:
						</p>
						<hr className='border-[white] opacity-5 my-[32px]' />
						<h1 className='text-[24px] text-prime font-bold'>1. Quiff</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Fryzura <b>Quiff</b> to doskonały sposób na ukrycie zakoli.
							Charakteryzuje się dłuższym włosiem na górze głowy, które jest
							podniesione do góry. Ta objętość na górze pomaga odciągnąć uwagę
							od obszarów zakoli. Możesz wyeksponować kształt twarzy, a
							jednocześnie zachować elegancki wygląd.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-full bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle1}
									alt='fryzura typu Quiff'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold'>
							2. French Crop
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							<b>French Crop</b>, to modernistyczna i
							uniwersalna fryzura, która działa świetnie na zakola. Włosy z
							przodu są dłuższe i opadają na czoło, co pomaga ukryć obszary
							zakoli. To doskonała opcja dla tych, którzy chcą zachować
							naturalny wygląd.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-full bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle6}
									alt='fryzura typu French Crop'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold'>
							3. Middle Part
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							<b>Middle Part</b> to kolejna opcja, która
							może pomóc ukryć zakola. Włosy są równomiernie rozdzielone na dwie
							części, co skupia uwagę na centralnej części twarzy, a nie na
							obszarach zakoli.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-full bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle3}
									alt='fryzura typu Middle Part'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold'>
							4. Side Part
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							<b>Side Part</b> to klasyczna fryzura, w której włosy są starannie
							zaczesane na bok. Ten wygląd jest nie tylko modny, ale także
							skupia uwagę na innych obszarach twarzy, nie pozostawiając zakoli
							w pierwszym planie.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-full bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle4}
									alt='fryzura typu Side Part'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold'>
							5. Buzz Cut (Krótki zerowany)
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							<b>Buzz Cut</b> to krótka fryzura, która doskonale nadaje się do
							ukrywania zakoli. Ta prostota nie tylko optycznie zmniejsza
							znaczenie zakoli, ale także jest niezwykle łatwa w utrzymaniu. Co
							więcej, dodaje charakteru i pewności siebie.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-full bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle5}
									alt='fryzura typu Buzz Cut'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<h1 className='text-[24px] text-prime font-bold'>
							7. Na Łyso (Bald)
						</h1>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Dla tych, którzy lubią minimalizm i niski poziom konserwacji,
							ogolona głowa jest wspaniałym wyborem. To odważne i pewne siebie
							podejście, które doskonale maskuje zakola. Dodatkowo, łysienie
							może nadać Twojej sylwetce charakter.
						</p>
						<div className='flex flex-row items-center justify-center gap-[16px] mt-[24px] mb-[42px]'>
							<div className='w-full bg-gray-300 rounded-[6px] overflow-hidden'>
								<img
									src={hairstyle7}
									alt='hairstyle7}'
									className='w-full h-full object-cover object-top'
								/>
							</div>
						</div>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Niezależnie od tego, jakie masz zakola, istnieje idealna fryzura,
							która pomoże Ci poczuć się pewnie i stylowo. Wybierz tę, która
							najlepiej odpowiada Twojemu stylowi i preferencjom.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-bold'>
							Jak Pozbyć Się Zakoli?
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Jeśli marzysz o trwałym rozwiązaniu, warto skonsultować się z
							dermatologiem lub chirurgiem plastycznym w celu rozważenia
							procedur takich jak przeszczep włosów. To długoterminowa metoda,
							która może kompletnie wyeliminować problem zakoli.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Jeśli potrzebujesz fachowej pomocy, to profesjonalny Barber jest
							osobą, której możesz zaufać. A jeśli jesteś w okolicach Bochni, to
							mamy dla Ciebie jeszcze lepszą wiadomość! MENTO Barber Bochnia to
							miejsce, gdzie Twoje pragnienia związane z męską urodą mogą stać
							się rzeczywistością.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light'>
							Nasza ekipa barberów to prawdziwi eksperci w dziedzinie
							fryzjerstwa i pielęgnacji zarostu. Zaufaj naszym zdolnościom, a
							poczujesz się pewniej i jeszcze bardziej stylowo. Nasze podejście
							jest oparte na pasji, precyzji i kreatywności, co sprawia, że
							każda wizyta u nas to nie tylko strzyżenie, to prawdziwa
							transformacja.
						</p>
						<p className='text-[14px] text-white mt-[12px] font-light mb-[42px]'>
							Czekamy na Ciebie w MENTO Barber Bochnia! Nasza pasja,
							doświadczenie i nowoczesne podejście sprawią, że opuścisz nasz
							salon z uśmiechem na twarzy i pewnością siebie. Przyjdź do nas i
							odkryj, co oznacza prawdziwa męska pielęgnacja.
						</p>
					</div>
				</div>
			</div>
			<img
				src={Gradient}
				alt='Gradient'
				className='absolute top-0 z-0 w-[800px] max-w-none'
				style={{ right: "-200px", top: "-200px" }}
			/>
		</div>
	);
};

export default BlogRecedingHairlineHairstyle;
