"use client";

import { useState } from "react";
import CardItem from "@/app/components/atoms/cardItem";
import Footer from "@/app/components/global/footer";
import { searchMenus } from "@/app/data/menuData";
import LineDevider from "@/app/components/molecules/lineDevider";

export default function MenuPage() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredItems = searchMenus(search, selectedCategory);

    return (
        <div>
            <div className="flex justify-center p-5">
                <div className="w-full max-w-[1200px]">
                    <div className="text-center space-y-3 flex flex-col items-center mt-5">
                        <LineDevider />
                        <h1 className="text-4xl font-bold">
                            Temukan Menu
                            <br /> Favoritmu di Sini!
                        </h1>
                        <p className="w-full max-w-[650px]">
                            Kami telah menyiapkan berbagai macam menu pilihan, mulai dari yang gurih, manis, pedas, sampai yang segar dan ringan. Semua dibuat dengan penuh perhatian dan bahan-bahan pilihan yang fresh setiap hari.
                        </p>
                    </div>

                    <div className="flex justify-center mt-5 w-full">
                        <div className="w-full max-w-[550px] flex flex-col gap-3">
                            <div className="hidden md:flex bg-white h-[70px] p-2 rounded-l-3xl rounded-br-3xl w-full items-center justify-between gap-2 border border-gray-300">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-[70%] h-full p-2 outline-none text-black placeholder:text-gray-500 placeholder:font-medium"
                                    placeholder="Masukan nama menu"
                                />
                                <button className="bg-[#FCE700] hover:bg-[#FCE700]/80 px-5 py-2 rounded-l-2xl rounded-br-3xl w-[30%] text-black h-full cursor-pointer font-medium">
                                    Cari Menu
                                </button>
                            </div>

                            <div className="flex flex-col md:hidden w-full gap-3">
                                <div className="bg-white h-[70px] p-2 rounded-l-3xl rounded-br-3xl w-full flex items-center border border-gray-300">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full h-full p-2 outline-none text-black placeholder:text-gray-500 placeholder:font-medium"
                                        placeholder="Masukan nama menu"
                                    />
                                </div>
                                <button className="bg-[#FCE700] hover:bg-[#FCE700]/80 w-full py-4 rounded-l-2xl rounded-br-3xl text-black font-medium">
                                    Cari Menu
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-10">
                        {["Pembuka", "Utama", "Penutup"].map((category) => (
                            <button
                                key={category}
                                onClick={() =>
                                    setSelectedCategory(category === selectedCategory ? "" : category)
                                }
                                className={`border px-4 py-2 rounded-md hover:bg-gray-50 cursor-pointer ${selectedCategory === category
                                    ? "bg-gray-100 border-gray-500"
                                    : "border-gray-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {filteredItems.length === 0 ? (
                        <div className="text-center mt-10 text-gray-500 text-lg">
                            Menu tidak ditemukan. Silakan coba kata kunci atau kategori lain.
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
                            {filteredItems.map((item) => (
                                <CardItem key={item.id} {...item} />
                            ))}
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    );
}