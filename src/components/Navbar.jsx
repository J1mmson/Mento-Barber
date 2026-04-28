import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/mento_logo.webp";
import BurgerMenu from "../assets/burgerMenu.svg";

const Navbar = () => {
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
        <nav className='fixed top-0 left-0 w-full z-50 px-4 md:px-[98px] py-5 md:py-6 bg-black/85 backdrop-blur-md shadow-lg'>
            <div className='flex justify-between items-center relative w-full'>
                
                <div className='hidden md:flex space-x-[32px] uppercase text-lg font-light'>
                    {menus.map((menu, i) => (
                        <a
                            key={i}
                            href={`#${menu.ids ? menu.ids[0] : menu.id}`}
                            onClick={() => navigate(`/#${menu.ids ? menu.ids[0] : menu.id}`)}
                            className={`cursor-pointer flex items-center transition-colors duration-300 hover:text-prime ${
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
                    <a href='/#about'>
                        <img
                            src={Logo}
                            alt='Mento Barber Bochnia - Strona Główna'
                            width="300"
                            height="280"
                            className='logo cursor-pointer h-[45px] md:h-[65px] object-contain'
                        />
                    </a>
                </div>

                <div className='hidden md:flex space-x-[32px] uppercase text-lg font-light'>
                    <Link to='/blog'>
                        <p
                            className={`cursor-pointer flex items-center transition-colors duration-300 hover:text-prime ${
                                location.pathname.includes("/blog")
                                    ? "text-prime"
                                    : "text-textPrimary"
                            }`}>
                            {location.pathname.includes("/blog") && (
                                <span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
                            )}
                            blog
                        </p>
                    </Link>
                    <Link to='/training'>
                        <p
                            className={`cursor-pointer flex items-center transition-colors duration-300 hover:text-prime ${
                                location.pathname === "/training"
                                    ? "text-prime"
                                    : "text-textPrimary"
                            }`}>
                            {location.pathname === "/training" && (
                                <span className='w-2 h-2 bg-prime rounded-full mr-2'></span>
                            )}
                            szkolenia
                        </p>
                    </Link>
                    <p className='text-prime cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity'>
                        <span>{`>`}</span>
                        <span>
                            <a
                                href='https://booksy.com/pl-pl/118318_mento-barber-shop_barber-shop_10189_bochnia#ba_s=seo'
                                target='_blank'
                                rel='noopener noreferrer'>
                                zarezerwuj
                            </a>
                        </span>
                        <span>{`<`}</span>
                    </p>
                </div>

                <div className='md:hidden z-20 ml-auto'>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='text-3xl text-prime focus:outline-none'
                        aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu nawigacji"}>
                        {isMobileMenuOpen ? (
                            <AiOutlineClose style={{ color: "#FFFFFF" }} aria-hidden="true" />
                        ) : (
                            <img src={BurgerMenu} style={{ height: "20px" }} alt="Menu" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-85 backdrop-blur-md flex flex-col justify-center items-center text-lg font-light uppercase z-10'>
                    <ul className='flex flex-col gap-8 text-center text-white text-[18px]'>
                        <li
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                navigate("/#about");
                            }}>
                            <a href='#about' className='cursor-pointer'>
                                o nas
                            </a>
                        </li>
                        <li
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                navigate("/#pricing");
                            }}>
                            <a href='#pricing' className='cursor-pointer'>
                                cennik
                            </a>
                        </li>
                        <li
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                navigate("/#barbers");
                            }}>
                            <a href='#barbers' className='cursor-pointer'>
                                barberzy
                            </a>
                        </li>
                        <li
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                navigate("/#works");
                            }}>
                            <a href='#works' className='cursor-pointer'>
                                nasze prace
                            </a>
                        </li>
                        <li>
                            <Link to='/blog' onClick={() => setIsMobileMenuOpen(false)}>
                                blog
                            </Link>
                        </li>
                        <li>
                            <Link to='/training' onClick={() => setIsMobileMenuOpen(false)}>
                                szkolenia
                            </Link>
                        </li>
                        <li>
                            <p className='text-prime font-bold flex justify-center items-center gap-2'>
                                <span>{`>`}</span>
                                <span>
                                    <a
                                        href='https://booksy.com/pl-pl/118318_mento-barber-shop_barber-shop_10189_bochnia#ba_s=seo'
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        zarezerwuj
                                    </a>
                                </span>
                                <span>{`<`}</span>
                            </p>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;