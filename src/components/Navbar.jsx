import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/mento_logo.svg"; 
import BurgerMenu from "../assets/burgerMenu.svg";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const menus = [
        { name: "o nas", id: "about" },
        { name: "cennik", id: "pricing" },
        { name: "barberzy", ids: ["barbers", "barbers-end"] },
        { name: "nasze prace", id: "works" },
    ];

    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveSection(null);
            return;
        }

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        menus.forEach(menu => {
            const ids = menu.ids || [menu.id];
            ids.forEach(id => {
                const element = document.getElementById(id);
                if (element) observer.observe(element);
            });
        });

        return () => observer.disconnect();
    }, [menus, location.pathname]);

    return (
        <>
            <nav className='fixed top-0 left-0 w-full md:w-[calc(100%-15px)] z-[60] px-4 lg:px-[40px] xl:px-[98px] py-5 md:py-6 bg-black/85 backdrop-blur-md shadow-lg'>
                <div className='flex justify-between items-center relative w-full'>
                    
                    <div className='hidden lg:flex space-x-[10px] xl:space-x-[20px] uppercase text-[16px] xl:text-lg font-light'>
                        {menus.map((menu, i) => (
                            <a
                                key={i}
                                href={`#${menu.ids ? menu.ids[0] : menu.id}`}
                                onClick={() => navigate(`/#${menu.ids ? menu.ids[0] : menu.id}`)}
                                className={`cursor-pointer flex items-center px-3 py-2 transition-colors duration-300 hover:text-prime ${
                                    (menu.ids || [menu.id]).some(id => activeSection === id)
                                        ? "text-prime"
                                        : "text-textPrimary"
                                }`}>
                                {(menu.ids || [menu.id]).some(id => activeSection === id) && (
                                    <span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
                                )}
                                {menu.name}
                            </a>
                        ))}
                    </div>

                    <div className='absolute left-1/2 transform -translate-x-1/2 z-20'>
                        <a href='/#about' className="inline-block p-2">
                            <img
                                src={Logo}
                                alt='Mento Barber Bochnia - Strona Główna'
                                width="300"
                                height="280"
                                className='logo cursor-pointer h-[80px] lg:h-[115px] object-contain invert transition-all duration-300'
                            />
                        </a>
                    </div>

                    <div className='hidden lg:flex space-x-[10px] xl:space-x-[20px] uppercase text-[16px] xl:text-lg font-light'>
                        <Link 
                            to='/cosmetics'
                            className={`cursor-pointer flex items-center px-3 py-2 transition-colors duration-300 hover:text-prime ${
                                location.pathname.includes("/cosmetics")
                                    ? "text-prime"
                                    : "text-textPrimary"
                            }`}>
                            {location.pathname.includes("/cosmetics") && (
                                <span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
                            )}
                            kosmetyki
                        </Link>
                        
                        <Link 
                            to='/blog'
                            className={`cursor-pointer flex items-center px-3 py-2 transition-colors duration-300 hover:text-prime ${
                                location.pathname.includes("/blog")
                                    ? "text-prime"
                                    : "text-textPrimary"
                            }`}>
                            {location.pathname.includes("/blog") && (
                                <span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
                            )}
                            blog
                        </Link>
                        
                        <Link 
                            to='/training'
                            className={`cursor-pointer flex items-center px-3 py-2 transition-colors duration-300 hover:text-prime ${
                                location.pathname === "/training"
                                    ? "text-prime"
                                    : "text-textPrimary"
                            }`}>
                            {location.pathname === "/training" && (
                                <span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
                            )}
                            szkolenia
                        </Link>
                        
                        {/* ZMIENIONY PRZYCISK DLA DESKTOPU */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className='text-prime bg-transparent border-none uppercase text-[16px] xl:text-lg font-light cursor-pointer flex items-center gap-2 px-3 py-2 hover:opacity-80 transition-opacity'>
                            <span>{`>`}</span>
                            <span>zarezerwuj</span>
                            <span>{`<`}</span>
                        </button>
                    </div>

                    <div className='lg:hidden z-20 ml-auto'>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='p-3 text-3xl text-prime focus:outline-none'
                            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu nawigacji"}>
                            {isMobileMenuOpen ? (
                                <AiOutlineClose style={{ color: "#FFFFFF" }} aria-hidden="true" />
                            ) : (
                                <img src={BurgerMenu} style={{ height: "20px" }} alt="Menu" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className='fixed inset-0 bg-[#0B0C0F]/95 backdrop-blur-lg flex flex-col justify-center items-center text-lg font-light uppercase z-[50]'>
                    <ul className='flex flex-col w-full px-6 gap-2 text-center text-white text-[18px] mt-16'>
                        <li className="w-full">
                            <a 
                                href='#about' 
                                className='block w-full py-4 cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    navigate("/#about");
                                }}>
                                o nas
                            </a>
                        </li>
                        <li className="w-full">
                            <a 
                                href='#pricing' 
                                className='block w-full py-4 cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    navigate("/#pricing");
                                }}>
                                cennik
                            </a>
                        </li>
                        <li className="w-full">
                            <a 
                                href='#barbers' 
                                className='block w-full py-4 cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    navigate("/#barbers");
                                }}>
                                barberzy
                            </a>
                        </li>
                        <li className="w-full">
                            <a 
                                href='#works' 
                                className='block w-full py-4 cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    navigate("/#works");
                                }}>
                                nasze prace
                            </a>
                        </li>
                        <li className="w-full">
                            <Link to='/cosmetics' onClick={() => setIsMobileMenuOpen(false)} className='block w-full py-4 cursor-pointer'>
                                kosmetyki
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link to='/blog' onClick={() => setIsMobileMenuOpen(false)} className='block w-full py-4 cursor-pointer'>
                                blog
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link to='/training' onClick={() => setIsMobileMenuOpen(false)} className='block w-full py-4 cursor-pointer'>
                                szkolenia
                            </Link>
                        </li>
                        <li className="w-full mt-4">
                            {/* ZMIENIONY PRZYCISK DLA MOBILE */}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsModalOpen(true);
                                }}
                                className='text-prime bg-transparent border-none uppercase font-bold text-[18px] flex justify-center items-center gap-2 block w-full py-4 cursor-pointer'>
                                <span>{`>`}</span>
                                <span>zarezerwuj</span>
                                <span>{`<`}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}


            {isModalOpen && (
                <div
                    className="fixed inset-0 w-full h-full bg-black/85 z-[99999] backdrop-blur-md flex items-center justify-center transition-opacity duration-300"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-[#111] border border-[#333] p-6 md:p-10 rounded-xl max-w-2xl w-[90%] text-center relative shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                        >
                            &times;
                        </button>
                        
                        <h2 className="text-white mt-0 mb-8 text-xl md:text-2xl uppercase tracking-wider font-bold">
                            Wybierz lokalizację
                        </h2>
                        
                        <div className="flex flex-col md:flex-row gap-5 justify-center">
                            {/* KAFELEK BOCHNIA */}
                            <a
                                href="https://booksy.com/pl-pl/118318_mento-barber-shop_barber-shop_10189_bochnia#ba_s=seo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[200px] bg-[#1a1a1a] border-2 border-[#222] p-8 rounded-lg transition-all duration-300 text-white flex flex-col items-center cursor-pointer hover:border-[#f97316] hover:-translate-y-1 no-underline"
                            >
                                <div className="text-4xl mb-4">📍</div>
                                <h3 className="m-0 mb-2 text-[#f97316] text-xl uppercase font-bold">Bochnia</h3>
                                <p className="m-0 text-sm text-gray-400">Rezerwacja przez Booksy</p>
                            </a>

                            {/* KAFELEK SUŁKOWICE */}
                            <a
                                href="TUTAJ_WKLEJ_LINK_DO_NOWEGO_SYSTEMU"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[200px] bg-[#1a1a1a] border-2 border-[#222] p-8 rounded-lg transition-all duration-300 text-white flex flex-col items-center cursor-pointer hover:border-[#f97316] hover:-translate-y-1 no-underline"
                            >
                                <div className="text-4xl mb-4">📍</div>
                                <h3 className="m-0 mb-2 text-[#f97316] text-xl uppercase font-bold">Sułkowice</h3>
                                <p className="m-0 text-sm text-gray-400">Nasz autorski system</p>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;