import Image from "next/image"
import StarRatings from "react-star-ratings"

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
            <p className="my-6 text-base text-paragraph">{review}</p>
            <StarRatings
                starRatedColor="#EA7C2B"
                rating={ratting}
                starDimension="18px"
                starSpacing="4px"
            />
        </div>
    )
}
