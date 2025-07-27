"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UseActiveSection } from "@/app/hooks/useActiveSection";
import { useEffect, useState } from "react";

export default function LinkItem({ label, href, sectionId }) {
    const [isMounted, setIsMounted] = useState(false);
    const activeSection = UseActiveSection();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const isActive = pathname === "/" && activeSection === sectionId;

    const handleClick = (e) => {
        if (sectionId) {
            e.preventDefault();
            if (pathname !== "/") {
                router.push(`/?scrollTo=${sectionId}`);
            } else {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offset = element.offsetTop - 80;
                    window.scrollTo({ top: offset, behavior: "smooth" });
                }
            }
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className="cursor-pointer text-sm tracking-wider text-white relative group inline-block"
        >
            {label}
            {isMounted && (
                <span
                    className={`absolute bottom-0 top-6 h-[2px] bg-gradient-to-r from-[#FCE700] to-[#F67111] transition-all duration-300 ease-out rounded-md ${isActive
                            ? "w-full left-0"
                            : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                        }`}
                ></span>
            )}
        </Link>
    );
}
