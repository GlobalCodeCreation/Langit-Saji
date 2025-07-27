import Image from "next/image";
import ImageMain from "@/app/assets/food.png";
import { motion } from "framer-motion";

export default function ImageMainSection() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            <Image
                src={ImageMain}
                alt="Hidangan khas Langit Saji"
                className="w-full h-auto mx-auto md:mx-0"
            />
        </motion.div>
    )
}