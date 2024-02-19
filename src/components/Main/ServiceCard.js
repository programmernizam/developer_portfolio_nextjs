import { FaArrowRight, FaFileCode, } from "react-icons/fa";

export default function ServiceCard({ service }) {
    const { title, services, des_title, description } = service
    return (
        <div className="p-6 lg:p-8 bg-base-100 rounded-xl">
            <div className="p-4 bg-base-100 rounded-xl w-fit text-heading">
                <FaFileCode className="text-[32px]" />
            </div>
            <h3 className="text-xl font-semibold text-heading mt-8">
                {title}
            </h3>
            <div className="flex flex-col gap-3 mt-6">
                {services.map(item => <div key={Math.random()} className="flex items-center gap-4">
                    <FaArrowRight className="text-[14px] text-heading" />
                    <p className="text-paragraph text-[16px]">{item}</p>
                </div>)}
            </div>
        </div>
    )
}
