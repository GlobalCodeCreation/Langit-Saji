import Logo1 from "@/app/assets/logo/logo1.png"
import Logo2 from "@/app/assets/logo/logo2.png"
import Logo3 from "@/app/assets/logo/logo3.png"
import Logo4 from "@/app/assets/logo/logo4.png"
import Logo5 from "@/app/assets/logo/logo5.png"
import Logo6 from "@/app/assets/logo/logo6.png"
import Logo7 from "@/app/assets/logo/logo7.png"
import Image from "next/image"

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7]

export default function Sponsored() {
    const repeatedLogos = [...logos, ...logos, ...logos]

    return (
        <div className="overflow-hidden py-5 bg-white mt-5">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="whitespace-nowrap animate-slide flex items-center w-max gap-10">
                    {repeatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`logo-${index}`}
                                className="w-full max-w-[80px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
