"use client";

import { useState } from "react";
import BackgroundImage from "@/app/assets/bg-special-promo.png";
import { FaInstagram, FaXTwitter, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { ChevronDownIcon } from "lucide-react";

const layananList = ["Keluhan", "Saran", "Konsultasi", "Lainnya"];

const contactInfo = [
    {
        title: "Alamat",
        details: ["JL.Danau Tamblingan 119, Sanur - Bali 82113"],
    },
    {
        title: "Kontak",
        details: ["Email: example@gmail.com", "Telepon: +62 000 000"],
    },
    {
        title: "Jam Buka",
        details: ["Senin - Sabtu: 10:00 - 22:00"],
    },
];

const socialLinks = [
    { icon: <FaInstagram className="w-6 h-6" />, href: "#" },
    { icon: <FaFacebook className="w-6 h-6" />, href: "#" },
    { icon: <FaXTwitter className="w-5 h-5" />, href: "#" },
    { icon: <FaYoutube className="w-6 h-6" />, href: "#" },
];

const formFields = [
    {
        label: "Nama*",
        name: "nama",
        type: "text",
        placeholder: "Masukan nama anda",
    },
    {
        label: "Email*",
        name: "email",
        type: "email",
        placeholder: "Masukan email anda",
    },
    {
        label: "Telepon*",
        name: "telepon",
        type: "tel",
        placeholder: "Masukan no telepon anda",
    },
    {
        label: "Layanan*",
        name: "layanan",
        type: "dropdown",
    },
];


function DropdownLayanan() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <div className="relative mt-1">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="border border-gray-200 rounded-md h-[40px] w-full p-2 flex items-center justify-between cursor-pointer bg-white"
            >
                <span className="text-gray-700">{selected || "Pilih layanan"}</span>
                <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>
            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                    {layananList.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                setSelected(item);
                                setIsOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ContactSection() {
    return (
        <div className="flex justify-center p-5 mt-10">
            <div className="w-full max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-5">
                    <div
                        className="w-full h-[500px] lg:h-screen lg:max-w-[40%] p-10 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
                    >
                        <div className="flex flex-col space-y-5 justify-between h-full text-white">
                            {contactInfo.map((section, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-2xl">{section.title}</h3>
                                    {section.details.map((line, idx) => (
                                        <h4 key={idx} className="text-gray-300">
                                            {line}
                                        </h4>
                                    ))}
                                </div>
                            ))}

                            <div>
                                <h3 className="font-semibold text-2xl">Tetap Terhubung</h3>
                                <div className="flex flex-wrap gap-3 mt-5">
                                    {socialLinks.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#393E46] hover:bg-[#393E46]/70"
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[60%] mt-5 lg:mt-0">
                        <h2 className="text-lg text-gray-700">// Kontak Kami</h2>
                        <h1 className="text-3xl font-bold mt-2">
                            Butuh bantuan?{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                Hubungi kami!
                            </span>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            {formFields.map((field, idx) => (
                                <div key={idx}>
                                    <p className="text-gray-600 font-medium">{field.label}</p>

                                    {field.type === "dropdown" ? (
                                        <DropdownLayanan />
                                    ) : (
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            className="border border-gray-200 rounded-md h-[40px] w-full mt-1 p-2 outline-none"
                                            placeholder={field.placeholder}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <p className="text-gray-600 font-medium">Pesan*</p>
                            <textarea
                                className="w-full h-[200px] border border-gray-200 rounded-md outline-none p-2 resize-none mt-1"
                                placeholder="Masukan pesan anda"
                            />
                        </div>

                        <button className="text-center py-2 px-5 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white rounded-full w-full mt-5">
                            Kirim Pesan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
