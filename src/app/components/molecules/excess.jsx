import { Truck, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Excess() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-5"
            >
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#F67111] rounded-full">
                        <Truck className="text-white text-xl" />
                    </div>
                    <div className="text-start">
                        <h3 className="text-lg font-bold">Layanan Cepat</h3>
                        <h4 className="text-sm">Gratis untuk pengiriman apa pun</h4>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#F67111] rounded-full">
                        <Leaf className="text-white text-xl" />
                    </div>
                    <div className="text-start">
                        <h3 className="text-lg font-bold">Menjaga kualitas</h3>
                        <h4 className="text-sm">100% Sehat dan Halal</h4>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}