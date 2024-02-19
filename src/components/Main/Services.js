import { services } from "@/utils/data";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section className="mt-16 md:mt-24 xl:mt-28" id="services">
            <h2 className="text-2xl md:text-3xl xl:text-5xl text-base-content font-bold text-center">My Services</h2>
            <p className="md:max-w-[438px] text-center text-base text-paragraph mx-auto mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {services.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
        </section>
    )
}
