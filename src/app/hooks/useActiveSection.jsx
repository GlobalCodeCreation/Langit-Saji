"use client";
import { useState, useEffect } from "react";

export const UseActiveSection = () => {
    const [activeSection, setActiveSection] = useState("main");

    useEffect(() => {
        const sections = ["main", "menu", "about", "contact"];
        const navHeight = 80;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + navHeight + 100;
            let current = "main";

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && scrollPosition >= el.offsetTop) {
                    current = id;
                }
            }

            setActiveSection((prev) => (prev !== current ? current : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return activeSection;
};
