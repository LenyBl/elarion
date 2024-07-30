import {motion} from "framer-motion";
import LogoServ from "../../assets/img/logo.png";
import {FaInstagram, FaTiktok, FaX, FaDiscord, FaYoutube} from "react-icons/fa6";
import {Link} from "react-router-dom";
import ButtonIp from "../ButtonIp";
import GlobeIcon from "../../assets/gif/wired-outline-27-globe.gif";

export default function Hero({menuOpen}) {
    const iconVariants = (duration) => ({
        initial: {
            y: -20,
        },
        animate: {
            y: [10, -20],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });

    return (
        <div
            className="relative flex flex-col sm:flex justify-center items-center h-lvh space-y-8 sm:space-y-0">
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className={`text-5xl mb-8 ${menuOpen ? 'z-0' : 'z-10'}`}
            >
                <img src={LogoServ} alt="Logo du serveur" width={200} height={200}/>
            </motion.div>
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold">Bienvenue sur Elarion</h1>
                </div>
                <div
                    className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 mb-8 space-y-4 sm:space-y-0">
                    <ButtonIp/>
                    <p className="text-2xl">Version 1.20.6</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 mb-8 space-y-4 sm:space-y-0">
                    <img src={GlobeIcon} alt="GlobeIcon" width={30} height={30}/><p className="font-bold">Rejoignez les <span className="text-blue-500">30</span> joueurs connectés !</p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    {[
                        {icon: FaDiscord, color: "#7289da", link: ""},
                        {icon: FaInstagram, color: "#e1306c", link: ""},
                        {icon: FaYoutube, color: "#ff0000", link: ""},
                        {icon: FaTiktok, color: "#FFFFFF", link: ""},
                        {icon: FaX, color: "#FFFFFF", link: ""},
                    ].map((social, index) => (
                        <motion.div
                            key={index}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="rounded-full border-2 border-amber-50 p-2 bg-gray-900"
                        >
                            <Link to={social.link}>
                                <social.icon size={30} color={social.color}/>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
