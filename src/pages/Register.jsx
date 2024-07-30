import RegisterForm from '../components/RegisterComponents/RegisterForm.jsx';
import Fond from '../assets/img/fond-hero.png';
import OldPageButton from "../components/OldPageButton.jsx";

export default function Register() {
    return (
        <div className="overflow-hidden antialiased relative flex flex-col w-full h-screen">
            <div className="absolute w-full h-screen bg-elarion-home">
                <img src={Fond} alt="Fond Elarion" className="w-full h-screen object-cover"/>
            </div>
            <OldPageButton/>
            <RegisterForm/>
        </div>
    );
}