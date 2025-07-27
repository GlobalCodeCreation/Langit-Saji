import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getMenuBySlug, getSimilarMenus, slugify } from "@/app/data/menuData";
import Footer from "@/app/components/global/footer";

export default function DetailMenu({ params }) {
    const { slug } = params;
    const item = getMenuBySlug(slug);

    if (!item) return notFound();

    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case "pembuka":
                return "bg-yellow-400";
            case "utama":
                return "bg-orange-500";
            case "penutup":
                return "bg-red-500";
            default:
                return "bg-gray-400";
        }
    };

    const similarItems = getSimilarMenus(item.category, slug);

    return (
        <div>
            <div className="flex justify-center p-5">
                <div className="w-full max-w-[1200px]">
                    <div className="mt-3">
                        <Link href="/" className="flex items-center gap-3 group">
                            <ArrowLeft className="group-hover:-translate-x-1 duration-300" />
                            <h5 className="text-xl font-semibold">Detail Menu</h5>
                        </Link>

                        <div className="flex items-center gap-2 group mt-2">
                            <Link href="/" className="text-sm text-orange-500">Beranda</Link>
                            <h5 className="text-sm text-orange-500">/</h5>
                            <Link href="/menu" className="text-sm text-orange-500">Menu</Link>
                            <h5 className="text-sm text-orange-500">/</h5>
                            <h5 className="text-sm font-semibold">Detail Menu</h5>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start gap-8 mt-5">
                        <div className="w-full lg:w-[70%] space-y-3">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[400px] object-cover rounded-xl mb-5"
                            />
                            <h1 className="text-3xl font-bold">{item.title}</h1>
                            <div className="flex items-center gap-5">
                                <div className={`${getCategoryColor(item.category)} text-sm capitalize px-4 py-2 rounded-full text-white`}>
                                    {item.category}
                                </div>
                                <div className="text-xl font-bold">Rp. {item.price}</div>
                            </div>
                            <p className="mt-4 text-gray-700">{item.description}</p>
                            <button className="bg-orange-500 hover:bg-orange-600 py-3 px-5 rounded-lg text-center text-white cursor-pointer w-full">Beli Sekarang</button>
                        </div>

                        <div className="w-full lg:w-[30%] space-y-4">
                            <h2 className="text-lg font-bold mb-2">Kategori menu yang serupa</h2>
                            {similarItems.map((menu) => (
                                <Link
                                    key={menu.id}
                                    href={`/detail-menu/${slugify(menu.title)}`}
                                    className="flex items-start gap-4 hover:bg-gray-100 p-2 rounded-md transition"
                                >
                                    <img
                                        src={menu.image}
                                        alt={menu.title}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <div>
                                        <h3 className="text-md font-semibold">{menu.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">{menu.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
