import CommonTitle from "./CommonTitle";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="mb-16 mb:mt-24 xl:mb-28">
            <CommonTitle title={"Get In Touch"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
            <div className="flex flex-wrap md:flex-nowrap lg:grid lg:grid-cols-7 md:gap-6 mt-12">
                <ContactForm />
            </div>
        </section>
    )
}
