'use client'

import Image from "next/image"
import AboutUsImage from "@/app/assets/about-us-section.png"
import Link from "next/link"

export default function AboutUsSection() {
    return (
        <div className="flex justify-center p-5 mt-10">
            <div className="w-full max-w-[1200px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <Image
                        src={AboutUsImage}
                        alt="Tentang kami"
                        className="w-full max-w-[500px] object-contain"
                    />

                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-yellow-400 text-lg md:text-xl">Pelajari tentang Langit Saji</h2>
                        <h1 className="font-bold text-3xl md:text-4xl leading-snug">
                            Kami menyediakan makanan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                berkualitas terbaik
                            </span> untuk Anda
                        </h1>
                        <p className="text-gray-600 max-w-full md:max-w-[650px] mx-auto md:mx-0 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium quisquam itaque magnam quae nesciunt ipsa vel odit, expedita at ducimus iusto nemo porro facilis consectetur debitis odio aspernatur minus blanditiis fuga reiciendis mollitia dolores rerum molestias!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-5">
                            <a href="" className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-tr-2xl rounded-bl-2xl w-full sm:w-auto text-center">
                                Hubungi Kami
                            </a>

                            <Link href="" className="px-5 py-3 border-2 border-orange-500 hover:bg-orange-50 transition-colors text-orange-500 bg-white rounded-tr-2xl rounded-bl-2xl w-full sm:w-auto text-center">
                                Jelajahi Menu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
