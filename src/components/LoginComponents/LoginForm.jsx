import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

export default function LoginForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const passwordInputRef = useRef(null);

    useEffect(() => {
        document.title = "Login - Elarion";

        if (passwordInputRef.current) {
            passwordInputRef.current.type = passwordVisible ? "text" : "password";
        }

        return () => {
            if (passwordInputRef.current) {
                passwordInputRef.current.type = "password";
            }
            document.title = "Elarion";
        };
    }, [passwordVisible]);

    return (
        <div className="relative z-10 flex items-center justify-center h-full">
            <motion.form
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="backdrop-blur-sm p-20 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-8 flex justify-center items-center">Se connecter</h2>
                <div className="mb-8">
                    <label className="block mb-2">Email :</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border-blue-500 rounded text-blue-500"
                        autoComplete="email"
                    />
                </div>
                <div className="mb-8 relative">
                    <label className="block mb-2">Mot de passe :</label>
                    <div className="flex items-center">
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded text-blue-500 pr-10"  // Add pr-10 to ensure space for the icon
                            id="password"
                            autoComplete="current-password"
                            ref={passwordInputRef}
                        />
                        <motion.div
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer mt-8"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? (
                                <FaEye size={20} className="text-blue-500"/>
                            ) : (
                                <FaEyeSlash size={20} className="text-blue-500"/>
                            )}
                        </motion.div>
                    </div>
                </div>
                <div className="mb-8 flex justify-center items-center">
                    <Link to={"/register"} className="text-blue-500 hover:underline">Créer un compte</Link>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-900">
                    Se connecter
                </button>
            </motion.form>
        </div>
    );
}
