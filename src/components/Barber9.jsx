import PropTypes from "prop-types";

import Gradient from "../assets/gradient.svg";
import BarberAdrian from "../assets/barber-adrian.webp";
import Texture from "../assets/texture.webp";
import { motion } from "framer-motion";

import { useIsMobile } from "../Hooks/useIsMobile";

const Barber9 = ({ slideInFromRight, fadeInFromLeft }) => {
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
						<h2
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
							ADRIAN
						</h2>
						<p className='mt-4 max-w-[430px] text-[15px] font-light'>
							Siema! Tu Adrian – barber z naszego salonu w Sułkowicach. Jako junior
							do każdego cięcia podchodzę z pełnym zaangażowaniem i głodem nauki.
							Po godzinach trenuję boks i żyję sportem, więc energii i pozytywnego
							vibe&apos;u nigdy mi nie brakuje. Szukasz barbera w Sułkowicach lub pod
							Myślenicami? Wskakuj na fotel – zrobimy świeży look i pogadamy o treningach!
						</p>
					</motion.div>
					<motion.div
						className='absolute w-full left-0 right-0 z-1'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={slideInFromRight}>
						<div
							aria-hidden='true'
							className='font-bold uppercase text-center'
							style={{
								fontFamily: '"Arial", "Helvetica", sans-serif',
								fontSize: "26vw",
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "4px #ff6600",
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							ADRIAN
						</div>
					</motion.div>
					<img
						src={Gradient}
						alt=''
						aria-hidden='true'
						loading='lazy'
						className='absolute top-0 right-0 w-1/2 h-auto pointer-events-none z-0'
						style={{ top: -350, right: -350 }}
					/>
					<img
						src={BarberAdrian}
						alt='Adrian – barber w Mento Barber Shop Sułkowice, fryzjer męski koło Myślenic'
						loading='lazy'
						width='900'
						height='1200'
						className='absolute bottom-0 right-0 w-[50%] h-auto object-contain pointer-events-none z-10'
						style={{
							bottom: -20,
							right: 50,
						}}
					/>
				</div>
			) : (
				<div
					className='relative flex flex-col justify-end min-h-screen px-6 pb-5 snap-start z-10 overflow-hidden'
					style={{
						background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundBlendMode: "multiply",
					}}>
					<div className='flex flex-col items-center mt-[10%] leading-none z-20'>
						<h2
							className='font-bold uppercase text-center'
							style={{
								fontFamily: '"Arial", "Helvetica", sans-serif',
								fontSize: "21vw",
								fontWeight: "bold",
								textTransform: "uppercase",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600",
								whiteSpace: "nowrap",
							}}>
							ADRIAN
						</h2>
						<p className='mt-4 mb-[25%] max-w-[430px] text-[14px] font-light text-white text-center'>
							Siema! Tu Adrian – barber z naszego salonu w Sułkowicach. Jako junior
							do każdego cięcia podchodzę z pełnym zaangażowaniem i głodem nauki.
							Po godzinach trenuję boks i żyję sportem, więc energii i pozytywnego
							vibe&apos;u nigdy mi nie brakuje. Szukasz barbera w Sułkowicach lub pod
							Myślenicami? Wskakuj na fotel – zrobimy świeży look i pogadamy o treningach!
						</p>
					</div>
					<img
						src={BarberAdrian}
						alt='Barber Adrian – fryzjer męski Sułkowice i Myślenice | Mento Barber Shop'
						loading='lazy'
						width='900'
						height='1200'
						className='absolute top-0 w-[700px] max-w-none z-10'
						style={{ right: "-150px", top: "-150px" }}
					/>
					<img
						src={Gradient}
						alt=''
						aria-hidden='true'
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

export default Barber9;

Barber9.propTypes = {
	slideInFromRight: PropTypes.object,
	fadeInFromLeft: PropTypes.object,
};
