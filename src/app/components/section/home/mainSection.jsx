"use client"

import BackgroundImage from "@/app/assets/bg-main-section.png";
import TextMainSection from "@/app/components/molecules/textMainSection";
import ButtonMainSection from "@/app/components/molecules/buttonMainSection";
import Excess from "@/app/components/molecules/excess";
import ImageMainSection from "@/app/components/molecules/imageMainSection";

export default function MainSection() {
    return (
        <section className="relative flex justify-center p-5 bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
            <div className="w-full max-w-[1200px]">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 py-10">
                    <div className="flex flex-col items-center md:items-start space-y-6 text-white">
                        <TextMainSection />
                        <ButtonMainSection />
                        <Excess />
                    </div>

                    <ImageMainSection />
                </div>
            </div>
        </section>
    );
}