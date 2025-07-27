import TitleDesc from "@/app/components/atoms/titleDesc";
import CardLists from "@/app/components/molecules/cardLists";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MenuSection() {
    return (
        <div className="mt-10 flex justify-center p-5">
            <div className="w-full max-w-[1200px]">
                <TitleDesc
                    title="Menu Kami"
                    description="Temukan beragam pilihan hidangan lezat kami, mulai dari makanan pembuka, utama, hingga penutup yang menggugah selera."
                />
                <CardLists />
                <div className="flex justify-center mt-5">
                    <Link
                        href="/menu"
                        className="flex items-center gap-2 group py-2 px-4 bg-gradient-to-br from-[#FCE700] to-[#F67111] font-semibold rounded-tr-2xl rounded-bl-2xl text-white"
                    >
                        <span>Lihat Menu Lainnya</span>
                        <ArrowRight className="mt-1 group-hover:translate-x-2 duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
