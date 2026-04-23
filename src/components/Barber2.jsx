import PropTypes from "prop-types";

import Gradient from "../assets/gradient.svg";
import Barber from "../assets/barber2.webp";
import Texture from "../assets/texture.webp";
import { motion } from "framer-motion";

import { useIsMobile } from "../Hooks/useIsMobile";

const Barber2 = ({ slideInFromRight, fadeInFromLeft }) => {
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
							KACPER
						</h1>
						<p className='mt-4 max-w-[430px] text-[15px] font-light'>
							Siema! Jestem Kacper – młody barber z pasją do cięcia. Uwielbiam
							fryzury typu crop i ciągle rozwijam swoje umiejętności, byś zawsze
							wychodził z fotela zadowolony. Sport to moja zajawka, a humor
							nigdy mnie nie opuszcza. Wpadnij, ogarniemy Twój look i przy
							okazji się pośmiejemy!
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
								fontSize: "26vw",
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "4px #ff6600",
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							KACPER
						</h1>
					</motion.div>
					<img
						src={Gradient}
						 alt=""  
    					aria-hidden="true"
  						loading="lazy"
						className='absolute top-0 right-0 w-1/2 h-auto pointer-events-none z-0'
						style={{ top: -350, right: -350 }}
					/>
					<img
						src={Barber}
						alt='Barber Kacper - Mento Barber Bochnia'
						loading="lazy"
						className='absolute bottom-0 right-0 w-1/2 h-auto pointer-events-none'
						style={{ bottom: -320, right: 100, zIndex: 1 }}
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
								fontSize: "21vw", // Zmieniono na jednostkę vw, aby dopasować do szerokości ekranu
								fontWeight: "bold",
								textTransform: "uppercase",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600",
								whiteSpace: "nowrap",
							}}>
							KACPER
						</h1>
						<p className='mt-4 mb-[25%] max-w-[430px] text-[14px] font-light text-white text-center'>
							Siema! Jestem Kacper – młody barber z pasją do cięcia. Uwielbiam
							fryzury typu crop i ciągle rozwijam swoje umiejętności, byś zawsze
							wychodził z fotela zadowolony. Sport to moja zajawka, a humor
							nigdy mnie nie opuszcza. Wpadnij, ogarniemy Twój look i przy
							okazji się pośmiejemy!
						</p>
					</div>
					<img
						src={Barber}
						alt="Barber Kacper - Mento Barber Bochnia" 
  						loading="lazy"
						className='absolute top-0 w-[700px] max-w-none z-10' // Added maxWidth constraint
						style={{ right: "-125px", top: "-100px" }}
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

export default Barber2;

Barber2.propTypes = {
	slideInFromRight: PropTypes.object,
	fadeInFromLeft: PropTypes.object,
};
