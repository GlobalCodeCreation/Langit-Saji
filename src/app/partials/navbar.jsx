"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LinkLists from "@/app/components/molecules/linkLists";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-5 fixed top-0 left-0 w-full z-50">
            <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
                <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-xl font-bold">
                    Langit Saji
                </Link>
                <div className="hidden sm:flex">
                    <LinkLists />
                </div>
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="cursor-pointer">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            <div
                className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#212121] rounded-lg mt-2 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <LinkLists isMobile={true} />
            </div>
        </nav>
    );
}
