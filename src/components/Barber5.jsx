import PropTypes from "prop-types";

import Gradient from "../assets/gradient.svg";
import Barber from "../assets/barber5.webp";
import Texture from "../assets/texture.webp";
import { motion } from "framer-motion";

import { useIsMobile } from "../Hooks/useIsMobile";

const Barber5 = ({ slideInFromRight, fadeInFromLeft }) => {
	const isMobile = useIsMobile();

	return (
		<>
			{!isMobile ? (
				<div
					className='relative h-screen flex items-center justify-start p-10 text-white snap-start overflow-hidden'
					style={{
						background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundBlendMode: "multiply",
					}}>
					<motion.div
						className='text-start p-10'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInFromLeft}>
						<h1
							className='text-9xl font-bold text-orange-500'
							style={{
								fontFamily: '"Arial", "Helvetica", sans-serif',
								fontSize: "7.85rem",
								fontWeight: "bold",
								textTransform: "uppercase",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600",
								textShadow:
									"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
							}}>
							OLA
						</h1>
						<p className='mt-4 max-w-[430px] text-[15px] font-light'>
							Specjalizuję się w strzyżeniach męskich, a cieniowanie od zera to
							moja ulubiona technika. Cenię dobrą rozmowę i świetny kontakt z
							klientami, bo barbering to dla mnie nie tylko praca, ale też
							pasja. Zawsze pełna energii i uśmiechu - zapraszam na fotel!
						</p>
					</motion.div>
					<motion.div
						className='absolute w-full left-0 right-0 z-1'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={slideInFromRight}>
						<h1
							className='font-bold uppercase text-center'
							style={{
								fontFamily: '"Arial", "Helvetica", sans-serif',
								fontSize: "30vw",
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "4px #ff6600",
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							OLA
						</h1>
					</motion.div>
					<img
						src={Gradient}
						alt=""
						aria-hidden="true"
						className='absolute top-0 right-0 w-1/2 h-auto pointer-events-none z-0'
						style={{ top: -350, right: -350 }}
					/>
					<img
						src={Barber}
						alt="Barber Ola - Mento Barber Bochnia"
						loading="lazy"
						className='absolute bottom-0 right-0 w-3/4 h-auto pointer-events-none'
						style={{ bottom: -570, right: -100, zIndex: 1 }}
					/>
				</div>
			) : (
				<div
					id='about'
					className='relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start z-10 overflow-hidden'
					style={{
						background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundBlendMode: "multiply",
					}}>
					<div className='flex flex-col items-center  mt-[10%] leading-none z-20 '>
						<h1
							className='font-bold uppercase text-center'
							style={{
								fontFamily: '"Arial", "Helvetica", sans-serif',
								fontSize: "25vw", // Zmieniono na jednostkę vw, aby dopasować do szerokości ekranu
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600",
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							OLA
						</h1>
						<p className='mt-4 mb-[25%] max-w-[430px] text-[14px] font-light text-white text-center'>
							Hej, jestem Ola, specjalizuję się w strzyżeniach męskich, a cieniowanie od zera to
							moja ulubiona technika. Cenię dobrą rozmowę i świetny kontakt z
							klientami, bo barbering to dla mnie nie tylko praca, ale też
							pasja. Zawsze pełna energii i uśmiechu - zapraszam na fotel!
						</p>
					</div>
					<img
						src={Barber}
						alt="Barber Ola - Mento Barber Bochnia"
						loading="lazy"
						className='absolute top-0 w-[1000px] max-w-none z-10' // Added maxWidth constraint
						style={{ right: "-250px", top: "-400px" }}
					/>
					<img
						src={Gradient}
						alt=""
						aria-hidden="true"
						className='absolute top-0 z-0 w-[800px] max-w-none'
						style={{ right: "-200px", top: "-200px" }}
					/>
					<div
						className='absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-10'
						style={{
							background:
								"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
						}}></div>
				</div>
			)}
		</>
	);
};

export default Barber5;

Barber5.propTypes = {
	slideInFromRight: PropTypes.object,
	fadeInFromLeft: PropTypes.object,
};
