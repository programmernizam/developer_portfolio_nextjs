import Image from "next/image"

export default function ReviewCard({ item }) {
    const { name, designation, img, review, ratting } = item
    return (
        <div className="p-6 bg-base-100 rounded-xl">
            <div className="flex items-center gap-4">
                <div className="relative inline-flex">
                    <div className="w-16 rounded-full">
                        <Image src={img} alt={name} />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-heading">{name}</h3>
                    <p className="text-sm text-paragraph">{designation}</p>
                </div>
            </div>
            <p className="mt-6 text-base text-paragraph">{review}</p>
        </div>
    )
}
