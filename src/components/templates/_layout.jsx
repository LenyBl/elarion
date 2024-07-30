import Fond from "../../assets/img/fond-hero.png";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useState} from "react";

export default function Layout({children}) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased">
            <div className="absolute w-full h-screen bg-elarion-home">
                <img src={Fond} alt="Fond Elarion" className="w-full h-screen object-cover"/>
            </div>
            <div className="relative w-full h-screen">
                <div className="relative z-10">
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}