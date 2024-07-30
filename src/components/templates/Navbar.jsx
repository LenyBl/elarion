import {Link} from "react-router-dom";
import LogoServ from "../../assets/img/logo.png";
import Burger from "./Burger.jsx";
import {motion} from "framer-motion";
import {useState} from "react";
import {FaChevronDown} from "react-icons/fa6";
import {FaChevronUp} from "react-icons/fa6";

export default function Navbar({menuOpen, setMenuOpen}) {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <nav className="fixed bg-gray-900 text-white h-20 w-full z-50">
                <div className="container mx-auto flex justify-between items-center py-4 h-20">
                    <div className="md:flex ml-4">
                        <Link to={"/"} className="">
                            <img src={LogoServ} alt="Logo du serveur" width={120} height={120}/>
                        </Link>
                    </div>
                    <ul className="hidden md:flex space-x-10 text-xl">
                        {[{nav: "Accueil", link: "/"},
                            {nav: "Voter", link: "/voter"},
                            {nav: "Boutique", link: "/boutique"},
                            {nav: "Contact", link: "/contact"},
                            {nav: "Discord", link: "https://discord.gg/PJ8Uu4qE"}].map((item, index) => (
                            <motion.li
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                key={index} className="group relative">
                                <Link to={item.link}>{item.nav}</Link>
                                <span
                                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-0 group-hover:animate-underlineExpand"></span>
                            </motion.li>
                        ))}
                        <li>
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={() => setDropdown(!dropdown)} className="flex items-center group relative">
                                Informations
                                <div className="ml-4">
                                    {dropdown ? <FaChevronUp/> : <FaChevronDown/>}
                                </div>
                            </motion.button>
                            <span
                                className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-0 group-hover:animate-underlineExpand"></span>
                            {dropdown && (
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5}}
                                    exit={{opacity: 0, transition: {duration: 0.5}}}
                                    className="absolute mt-8 bg-gray-900 shadow-lg rounded-md text-white py-2 w-40">
                                    <Link to={"/cgv"} className="block px-4 py-2 hover:bg-gray-700">CGV</Link>
                                    <Link to={"/cgu"} className="block px-4 py-2 hover:bg-gray-700">CGU</Link>
                                </motion.div>
                            )}
                        </li>
                    </ul>
                    <div className="hidden md:flex space-x-4">
                        <Link to={"/login"}
                              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full hover:scale-105 transition">Connexion</Link>
                        <Link to={"/register"}
                              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full hover:scale-105 transition">Inscription</Link>
                    </div>
                    <div className="md:hidden me-4">
                        <Burger isOpen={menuOpen} setOpen={() => setMenuOpen(!menuOpen)}/>
                    </div>
                    {menuOpen && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            exit={{opacity: 0}}
                            className="md:hidden fixed top-20 left-0 w-full bg-gray-900 z-40"
                        >
                            <ul className="flex flex-col space-y-4 text-center py-4 text-xl">
                                {[{nav: "Accueil", link: "/"},
                                    {nav: "Voter", link: "/voter"},
                                    {nav: "Boutique", link: "/boutique"},
                                    {nav: "Contact", link: "/contact"},
                                    {nav: "Discord", link: "https://discord.gg/PJ8Uu4qE"}].map((item, index) => (
                                    <motion.li
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
                                        key={index}>
                                        <Link to={item.link}>{item.nav}</Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    key={5}
                                >
                                    <div className="flex justify-center items-center ml-8">
                                        <button onClick={() => setDropdown(!dropdown)}>Informations</button>
                                        <div className="ml-4">
                                            {dropdown ? <FaChevronUp/> : <FaChevronDown/>}
                                        </div>
                                    </div>
                                </motion.li>
                                {dropdown && (
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.5}}
                                        exit={{opacity: 0, transition: {duration: 0.5}}}
                                        className="flex flex-col space-y-4 text-center py-4 text-xl">
                                        <motion.div
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.9}}>
                                            <Link to={"/cgv"}>CGV</Link>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                        >
                                            <Link to={"/cgu"}>CGU</Link>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </ul>
                            <div className="flex justify-center space-x-4 py-4">
                                <Link to={"/login"}
                                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full hover:scale-105 transition">Connexion</Link>
                                <Link to={"/register"}
                                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full hover:scale-105 transition">Inscription</Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </nav>
        </div>
    );
}
