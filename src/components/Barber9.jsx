import PropTypes from "prop-types";

import Gradient from "../assets/gradient.svg";
import Barber from "../assets/barber9.webp";
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
						<h1
							className='text-9xl font-bold text-orange-500'
							style={{
								fontSize: "7.85rem",
								fontWeight: "bold",
								textTransform: "uppercase",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600",
								textShadow:
									"0 0 0px #0B0C0F, 0 0 0px #0B0C0F, 0 0 10px #E67543",
							}}>
							NATALIA
						</h1>
						<p className='mt-4 max-w-[430px] text-[15px] font-light'>
							Cześć! Tu Natalia – barberka z okiem do detali i wielką zajawką do męskich cięć.
                            Uwielbiam klasyczne formy, więc z mojego fotela zejdziesz dopracowany w każdym calu.
                            Poza pracą kręci mnie historia oraz podróże, a uśmiech to mój znak rozpoznawczy.
                            Wpadaj na fotel, ogarniemy świeży look i przy okazji świetnie pogadamy!
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
								fontSize: "26vw",
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "4px #ff6600",
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							NATALIA
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
    alt="Barber Natalia - Mento Barber Bochnia"
    loading="lazy"
    className="absolute bottom-0 right-0 w-[50%] h-auto object-contain pointer-events-none z-10"
    style={{
        bottom: -20,
        right: 50,
    }}
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
								fontSize: "23vw", // Zmieniono na jednostkę vw, aby dopasować do szerokości ekranu
								fontWeight: "bold",
								color: "transparent",
								WebkitTextStroke: "2px #ff6600",
								width: "100%",
								whiteSpace: "nowrap",
							}}>
							Natalia
						</h1>
						<p className='mt-4 mb-[25%] max-w-[430px] text-[14px] font-light text-white text-center'>
							Cześć! Tu Natalia – barberka z okiem do detali i wielką zajawką do męskich cięć.
                            Uwielbiam klasyczne formy, więc z mojego fotela zejdziesz dopracowany w każdym calu.
                            Poza pracą kręci mnie historia oraz podróże, a uśmiech to mój znak rozpoznawczy.
                            Wpadaj na fotel, ogarniemy świeży look i przy okazji świetnie pogadamy!
                        </p>        
					</div>
					<img
    src={Barber}
    alt="Barber Natalia - Mento Barber Bochnia"
    loading="lazy"
    className="absolute max-w-none z-10 pointer-events-none"
    style={{ 
        top: "0px",       
        right: "-100px",  
        width: "650px"    
    }}
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

export default Barber9;

Barber9.propTypes = {
	slideInFromRight: PropTypes.object,
	fadeInFromLeft: PropTypes.object,
};
