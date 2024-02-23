import Blogs from "./Blogs";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonial from "./Testimonial";

export default function Main() {
    return (
        <div>
            <Hero />
            <Services />
            <Education />
            <Experience />
            <Portfolio />
            <Testimonial />
            <Blogs />
        </div>
    )
}
