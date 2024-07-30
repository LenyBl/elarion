import {useEffect, useState} from "react";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import {motion} from "framer-motion";

export default function OldPageButton() {

    const [oldState, setOldState] = useState(false);

    useEffect(() => {
        if (oldState) {

            window.location.href = "http://localhost:5173/";

        }

    }, [oldState]);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            exit={{opacity: 0}}
            className="relative z-10 ml-8 mt-8">
                <FaArrowAltCircleLeft onClick={() => setOldState(!oldState)} size={30} className="text-neutral-300 hover:scale-110"/>
        </motion.div>
    )
}