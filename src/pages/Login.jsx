import Fond from "../assets/img/fond-hero.png";
import LoginForm from "../components/LoginComponents/LoginForm.jsx";
import OldPageButton from "../components/OldPageButton.jsx";

export default function Login() {
    return (
        <div className="overflow-x-hidden antialiased relative flex flex-col w-full h-screen text-neutral-300">
                <div className="absolute w-full h-screen bg-elarion-home">
                    <img src={Fond} alt="Fond Elarion" className="w-full h-screen object-cover"/>
                </div>
                <OldPageButton/>
                <LoginForm/>
        </div>
    )
}
