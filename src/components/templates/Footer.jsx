import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDiscord, FaInstagram, FaTiktok, FaX, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 py-4 bottom-0 w-full h-auto">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row justify-between my-8 space-y-8 sm:space-y-0">
                    <div className="flex-1">
                        <h2 className="text-white text-center mb-4 text-2xl">Elarion</h2>
                        <p className="text-center text-wrap max-w-xs mx-auto break-words">
                            Elarion est un serveur Minecraft en constante évolution. Nous proposons une expérience de jeu unique et
                            personnalisée à nos joueurs. Rejoignez-nous dès maintenant !
                        </p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-white text-center mb-4 text-2xl">Réseaux Sociaux</h2>
                        <div className="flex justify-center space-x-4 mt-4">
                            {[
                                { icon: FaDiscord, color: "#7289da", link: "" },
                                { icon: FaInstagram, color: "#e1306c", link: "" },
                                { icon: FaYoutube, color: "#ff0000", link: "" },
                                { icon: FaTiktok, color: "#FFFFFF", link: "" },
                                { icon: FaX, color: "#FFFFFF", link: "" },
                            ].map((social, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="rounded-full border-2 border-amber-50 p-2"
                                >
                                    <Link to={social.link}>
                                        <social.icon size={30} color={social.color} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-white text-center mb-4 text-2xl">Menu</h2>
                        <ul className="flex flex-col space-y-4 text-center py-4 justify-center items-center ">
                            {[{ nav: "Accueil", link: "/" },
                            { nav: "Voter", link: "/voter" },
                            { nav: "Boutique", link: "/boutique" },
                            { nav: "Contact", link: "/contact" },
                            { nav: "Discord", link: "" }].map((item, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    key={index}>
                                    <Link to={item.link}>{item.nav}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <hr className="mx-3" />
                <div className="text-white text-center mt-4 ml-3">
                    <p>Elarion © 2024 - Non affilié à Mojang AB ou Microsoft. contact.elarion@gmail.com serveurs-minecraft.org</p>
                </div>
            </div>
        </footer>
    );
}
