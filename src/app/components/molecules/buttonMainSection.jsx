import { motion } from "framer-motion";
import Link from "next/link";

export default function ButtonMainSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-5 mt-3"
        >
            <Link href="" className="py-2 px-4 bg-gradient-to-br from-[#FCE700] to-[#F67111] hover:scale-105 duration-300 font-semibold rounded-tr-2xl rounded-bl-2xl text-white tracking-wider">
                Order Sekarang
            </Link>
            <Link href="" className="py-2 px-4 border-2 border-[#FCE700] hover:scale-105 duration-300 font-semibold rounded-tr-2xl rounded-bl-2xl text-[#FCE700] tracking-wider">
                Jelajahi Menu
            </Link>
        </motion.div>
    )
}