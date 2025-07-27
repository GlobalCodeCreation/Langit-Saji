import BgExcessSection from "@/app/assets/bg-excess-section.png"

export default function ExcessSection() {
    return (
        <div className="flex justify-center p-5 mt-10">
            <div 
                className="w-full max-w-[1200px] bg-cover bg-center p-5 rounded-2xl" 
                style={{backgroundImage: `url(${BgExcessSection.src})`}}
            >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-5">
                    <div className="flex flex-col items-center space-y-3 bg-white rounded-tr-3xl rounded-bl-3xl p-5 text-center">
                        <h3 className="text-xl font-bold mb-2 text-[#F67111]">Bahan Segar</h3>
                        <p className="text-sm text-gray-700">Kami menggunakan bahan lokal segar, langsung dari petani dan pasar tradisional.</p>
                    </div>

                    <div className="flex flex-col items-center space-y-3 bg-white rounded-tr-3xl rounded-bl-3xl p-5 text-center">
                        <h3 className="text-xl font-bold mb-2 text-[#F67111]">Pengantaran Cepat</h3>
                        <p className="text-sm text-gray-700">Makanan diantar dalam 30–60 menit, hangat dan siap dinikmati.</p>
                    </div>

                    <div className="flex flex-col items-center space-y-3 bg-white rounded-tr-3xl rounded-bl-3xl p-5 text-center">
                        <h3 className="text-xl font-bold mb-2 text-[#F67111]">Cita Rasa Lokal</h3>
                        <p className="text-sm text-gray-700">Masakan khas daerah yang autentik, bikin kamu kangen kampung halaman.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://wa.me/62XXXXXXXXXX"
                        target="_blank"
                        className="rounded-full px-5 py-2 bg-[#F67111] hover:scale-105 duration-300 text-white mt-5"
                    >
                        Pesan Sekarang via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}
