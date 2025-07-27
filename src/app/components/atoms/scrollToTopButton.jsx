"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const specialPromoElement = document.getElementById('special-promo');
            if (specialPromoElement) {
                const rect = specialPromoElement.getBoundingClientRect();
                const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsVisible(isInViewport || rect.top < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const mainElement = document.getElementById('main');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#FCE700] to-[#F67111] text-black p-3 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 z-40"
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
        </button>
    );
}