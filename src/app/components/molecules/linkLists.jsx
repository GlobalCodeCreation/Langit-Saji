"use client";
import LinkItem from "@/app/components/atoms/linkItem";

export default function LinkLists({ isMobile = false }) {
    return (
        <div className={`flex ${isMobile ? "flex-col gap-3 p-5" : "items-center gap-5"}`}>
            <LinkItem href="/" label="Beranda" sectionId="main" />
            <LinkItem href="#menu" label="Menu" sectionId="menu" />
            <LinkItem href="#about" label="Tentang Kami" sectionId="about" />
            <LinkItem href="#contact" label="Kontak" sectionId="contact" />
        </div>
    );
}
