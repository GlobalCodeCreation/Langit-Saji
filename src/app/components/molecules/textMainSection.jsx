import { motion } from "framer-motion";

export default function TextMainSection() {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-wider leading-15"
            >
                Hidangan Lokal<br />
                yang Menghadirkan<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Rasa Rumah Sejati
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="w-full max-w-[600px] tracking-wide"
            >
                Langit Saji menyuguhkan pengalaman kuliner Nusantara dengan sentuhan khas rumahan. Dari aroma dapur tradisional hingga penyajian penuh kehangatan.
            </motion.p>
        </div>
    )
}