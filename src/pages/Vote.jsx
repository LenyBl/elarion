import {motion} from "framer-motion";
import Leaderboard from "../components/VoteComponents/Leaderboard.jsx";
import VoteCard from "../components/VoteComponents/VoteCard.jsx";

export default function Vote() {
    return (
        <div className="container mx-auto relative flex flex-col items-center justify-center w-full h-screen">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="mb-8 w-80"
            >
                <VoteCard/>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="bg-gray-900 p-6 rounded-lg shadow-lg w-full"
            >
                <Leaderboard/>
            </motion.div>
        </div>
    );
}
