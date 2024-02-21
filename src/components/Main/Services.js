import { services } from "@/utils/data";
import CommonTitle from "./CommonTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section id="services">
            <CommonTitle title={"My Services"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
            <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {services.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
        </section>
    )
}
