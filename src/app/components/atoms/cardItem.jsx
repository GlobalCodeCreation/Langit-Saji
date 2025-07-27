"use client";

import Image from "next/image";
import Link from "next/link";

const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

export default function CardItem({ image, category, title, description, price }) {
    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case "pembuka":
                return "bg-yellow-400";
            case "utama":
                return "bg-[#F67111]";
            case "penutup":
                return "bg-red-500";
            default:
                return "bg-gray-400";
        }
    };

    return (
        <Link href={`/detail-menu/${slugify(title)}`}>
            <div className="border border-gray-200 p-5 rounded-lg group cursor-pointer hover:shadow-lg duration-200">
                <div className="relative overflow-hidden rounded-md">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover group-hover:scale-110 duration-300"
                    />
                    <div className={`absolute top-2 left-0 ${getCategoryColor(category)} text-white text-xs px-3 py-1 rounded-r-full capitalize`}>
                        {category}
                    </div>
                </div>
                <div className="mt-3">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="text-gray-600 text-sm">{description}</p>
                    <h2 className="font-bold mt-1">Rp. {price}</h2>
                </div>
            </div>
        </Link>
    );
}
