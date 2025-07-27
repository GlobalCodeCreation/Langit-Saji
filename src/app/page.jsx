"use client";
import { useEffect } from "react";
import MainSection from "@/app/components/section/home/mainSection";
import Sponsored from "@/app/components/section/home/sponsored";
import MenuSection from "@/app/components/section/home/menuSection";
import SpecialPromo from "@/app/components/section/home/specialPromo";
import AboutUsSection from "@/app/components/section/home/aboutUsSection";
import Faq from "@/app/components/section/home/faqSection";
import ExcessSection from "@/app/components/section/home/excessSection";
import ContactSection from "@/app/components/section/home/contactSectin";
import Footer from "@/app/components/global/footer";
import ScrollToTopButton from "@/app/components/atoms/scrollToTopButton";

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionId = urlParams.get("scrollTo");

    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = el.offsetTop - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <div id="main">
        <MainSection />
      </div>
      <Sponsored />
      <div id="menu">
        <MenuSection />
      </div>
      <div id="special-promo">
        <SpecialPromo />
      </div>
      <div id="about">
        <AboutUsSection />
      </div>
      <Faq />
      <ExcessSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}