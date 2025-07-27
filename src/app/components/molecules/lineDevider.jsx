import { ChefHat } from "lucide-react";

export default function LineDevider () {
    return (
        <div className="flex items-center gap-3">
            <div className="border-1 border-[#F67111] w-10 rounded-lg" />
            <ChefHat className="text-lg text-[#F67111]" />
            <div className="border-1 border-[#F67111] w-10 rounded-lg" />
        </div>
    )
}