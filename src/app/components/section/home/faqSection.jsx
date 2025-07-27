'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TitleDesc from "@/app/components/atoms/titleDesc";

const faqData = [
    {
        question: "Apakah ada layanan antar?",
        answer: "Ya, kami menyediakan layanan antar ke berbagai wilayah dengan estimasi waktu pengantaran 30–60 menit, tergantung lokasi kamu.",
    },
    {
        question: "Bagaimana cara memesan makanan?",
        answer: "Klik tombol 'Pesan' di website kami, lalu kamu akan diarahkan ke WhatsApp untuk melakukan pemesanan langsung dengan tim kami.",
    },
    {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer: "Kami menerima pembayaran tunai di tempat, transfer bank, dan juga e-wallet seperti OVO, DANA, dan GoPay.",
    },
    {
        question: "Apakah ada menu untuk vegetarian atau makanan sehat?",
        answer: "Ya, kami menyediakan pilihan menu vegetarian dan makanan rendah kalori. Kamu bisa melihat label khusus di setiap menu di website kami.",
    },
    {
        question: "Apakah saya bisa memesan untuk acara khusus atau dalam jumlah besar?",
        answer: "Tentu! Kami menerima pesanan untuk acara seperti ulang tahun, arisan, dan kantor. Hubungi kami melalui WhatsApp untuk informasi dan diskon khusus.",
    },
];


export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="flex justify-center p-5 mt-10">
            <div className="w-full max-w-[1200px]">
                <TitleDesc
                    title="Pertanyaan Umum"
                    description="Temukan jawaban atas pertanyaan yang sering diajukan mengenai layanan, menu, pemesanan, dan pengiriman kami."
                />

                <div className="mt-10 mx-auto max-w-[800px] space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index}>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <span
                                            className={`min-w-[24px] ${isOpen ? "text-black font-semibold" : "text-gray-700"
                                                }`}
                                        >
                                            {index + 1}.
                                        </span>
                                        <span
                                            className={`text-base ${isOpen ? "font-semibold text-black" : "text-gray-700"
                                                }`}
                                        >
                                            {item.question}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-black" : "text-gray-700"
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="mt-2 pl-10 pr-4 text-gray-700 text-sm">
                                        {item.answer}
                                    </div>
                                )}

                                <div className="border-b border-gray-200 mt-4" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
