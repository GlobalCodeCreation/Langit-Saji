import LineDevider from "@/app/components/molecules/lineDevider";

export default function TitleDesc({ title, description }) {
    return (
        <div className="flex flex-col items-center text-center">
            <LineDevider />
            <h1 className="text-3xl font-bold mt-2">{title}</h1>
            <p className="w-full max-w-[600px] mt-2 text-gray-600">{description}</p>
        </div>
    )
}