import ContactInfoCard from "./ContactInfoCard";

export default function ContactInfo() {
    return (
        <div className="lg:col-span-2 space-y-6 mt-6 md:mt-0 w-full">
            <ContactInfoCard />
            <ContactInfoCard />
            <ContactInfoCard />
        </div>
    )
}
