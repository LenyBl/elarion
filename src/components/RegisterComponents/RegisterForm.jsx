import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";

export default function RegisterForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const passwordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);

    useEffect(() => {
        document.title = "Register - Elarion";

        if (passwordInputRef.current) {
            passwordInputRef.current.type = passwordVisible ? "text" : "password";
        }

        if (confirmPasswordInputRef.current) {
            confirmPasswordInputRef.current.type = confirmPasswordVisible ? "text" : "password";
        }

        return () => {
            if (passwordInputRef.current) {
                passwordInputRef.current.type = "password";
            }
            if (confirmPasswordInputRef.current) {
                confirmPasswordInputRef.current.type = "password";
            }
            document.title = "Elarion";
        };
    }, [passwordVisible, confirmPasswordVisible]);

    return (
        <div className="relative z-10 flex items-center justify-center h-full">
            <motion.form
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="backdrop-blur-sm p-20 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-8 flex justify-center items-center text-neutral-300">Inscription</h2>
                <div className="mb-8">
                    <label className="block mb-2 text-neutral-300">Pseudo :</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border-blue-500 rounded text-blue-500"
                    />
                </div>
                <div className="mb-8">
                    <label className="block mb-2 text-neutral-300">Email :</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border-blue-500 rounded text-blue-500"
                    />
                </div>
                <div className="mb-8 relative">
                    <label className="block mb-2 text-neutral-300">Mot de passe :</label>
                    <div className="flex items-center">
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded text-blue-500 pr-10"
                            autoComplete="password"
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
                <div className="mb-8 relative">
                    <label className="block mb-2 text-neutral-300">Confirmer le mot de passe :</label>
                    <div className="flex items-center">
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded text-blue-500 pr-10"
                            autoComplete="confirm-password"
                            ref={confirmPasswordInputRef}
                        />
                        <motion.div
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer mt-8"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        >
                            {confirmPasswordVisible ? (
                                <FaEye size={20} className="text-blue-500"/>
                            ) : (
                                <FaEyeSlash size={20} className="text-blue-500"/>
                            )}
                        </motion.div>
                    </div>
                </div>
                <div className="mb-8 flex justify-center items-center">
                    <Link to={"/login"} className="text-blue-500 hover:underline">Tu as déja un compte ?</Link>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-900">
                    S'inscrire
                </button>
            </motion.form>
        </div>
    );
}
