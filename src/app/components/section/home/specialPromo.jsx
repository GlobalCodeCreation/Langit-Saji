'use client'

import FoodSpecialPromo from "@/app/assets/food-special-promo.png"
import BackgroundImage from "@/app/assets/bg-special-promo.png";
import Image from "next/image"

export default function SpecialPromo() {
    return (
        <div
            className="mt-10 flex justify-center px-5 py-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage.src})` }}
        >
            <div className="w-full max-w-[1200px]">
                <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-10">
                    <div className="space-y-3 text-white text-center md:text-left md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                            Dapatkan promo khusus <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                hemat Rp. 50.000
                            </span>
                        </h1>

                        <p className="w-full max-w-[550px] mx-auto md:mx-0 text-gray-300">
                            Kami menghargai dan memperhatikan dengan seksama apa yang mereka katakan dan menggunakan saran mereka untuk terus meningkatkan penawaran kami.
                        </p>

                        <div className="flex flex-col gap-3 items-center md:items-start mt-5 w-full max-w-[550px] mx-auto md:mx-0">
                            <div className="hidden md:flex bg-white h-[70px] p-2 rounded-l-3xl rounded-br-3xl w-full items-center justify-between gap-2">
                                <input
                                    type="text"
                                    className="w-[70%] h-full p-2 outline-none text-black placeholder:text-gray-500 placeholder:font-medium"
                                    placeholder="Alamat Email"
                                />
                                <button className="bg-[#FCE700] hover:bg-[#FCE700]/80 px-5 py-2 rounded-l-2xl rounded-br-3xl w-[30%] text-black h-full cursor-pointer font-medium">
                                    Berikan Saran
                                </button>
                            </div>

                            <div className="flex flex-col md:hidden w-full gap-3">
                                <div className="bg-white h-[70px] p-2 rounded-l-3xl rounded-br-3xl w-full flex items-center">
                                    <input
                                        type="text"
                                        className="w-full h-full p-2 outline-none text-black placeholder:text-gray-500 placeholder:font-medium"
                                        placeholder="Alamat Email"
                                    />
                                </div>
                                <button className="bg-[#FCE700] hover:bg-[#FCE700]/80 w-full py-4 rounded-l-2xl rounded-br-3xl text-black font-medium">
                                    Berikan Saran
                                </button>
                            </div>
                        </div>
                    </div>

                    <Image
                        className="w-full xl:max-w-[500px] lg:max-w-[400px] md:max-w-[350px]"
                        src={FoodSpecialPromo}
                        alt="Promo Image"
                    />
                </div>
            </div>
        </div>
    )
}
