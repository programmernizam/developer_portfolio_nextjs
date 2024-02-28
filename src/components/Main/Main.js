import Blogs from "./Blogs";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonial from "./Testimonial";

export default function Main() {
    return (
        <>
            <main>
                <Hero />
                <Services />
                <Education />
                <Experience />
                <Portfolio />
                <Testimonial />
                <Blogs />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
