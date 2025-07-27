import CardItem from "@/app/components/atoms/cardItem";
import { menuData } from "@/app/data/menuData";

export default function CardLists() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
            {menuData.map((item) => (
                <CardItem key={item.id} {...item} />
            ))}
        </div>
    );
}