'use client'

import { useEffect, useState } from "react";
import { FaInstagram, FaXTwitter, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
    { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
    { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
    { icon: <FaXTwitter className="w-4 h-4" />, href: "#" },
    { icon: <FaYoutube className="w-5 h-5" />, href: "#" },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: "#" },
];

export default function Footer() {
    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="flex justify-center px-5 pt-10 pb-5 mt-10 bg-black">
            <div className="w-full max-w-[1200px]">
                <div className="flex flex-col items-center space-y-3">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-xl font-bold">
                        Langit Saji
                    </h3>
                    <p className="text-white text-center">Hidangan Lokal yang Menghadirkan Rasa Rumah Sejati</p>
                    <p className="text-gray-400 text-center">JL.Danau Tamblingan 119, Sanur - Bali 82113</p>
                    <div className="flex justify-center flex-wrap gap-3 mt-5">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#393E46] hover:bg-[#393E46]/70 text-white"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <hr className="border border-gray-800 my-5 w-full" />
                    {year && (
                        <h5 className="text-white">
                            Copyright © {year} by Langit Saji
                        </h5>
                    )}
                </div>
            </div>
        </footer>
    )
}
