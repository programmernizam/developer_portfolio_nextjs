import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function BlogCard({ blog }) {
    const { title, description, img } = blog;
    return (
        <div className="bg-base-100 rounded-xl">
            <Image className="w-full rounded-xl" width={324} height={216} src={img} alt="title" />
            <div className="p-6">
                <h3 className="text-lg font-semibold text-heading hover:text-primary hover:duration-300 transition">{title}</h3>
                <p className="mt-2 mb-4 text-base text-paragraph">{description}</p>
                <Link href={"#"} className="text-primary text-sm font-semibold flex items-center gap-3 hover:opacity-80 transition hover:duration-300">
                    Read More
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}
