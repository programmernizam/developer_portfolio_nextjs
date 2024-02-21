"use client"
import { portfolio } from "@/utils/data";
import { useState } from "react";
import CommonTitle from "./CommonTitle";

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredPortfolio = selectedCategory === 'all'
        ? portfolio
        : portfolio.filter(project => project.category === selectedCategory);
    return (
        <section id="portfolio">
            <CommonTitle title={"Portfolio"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
            <div className="mt-8 xl:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 cursor-pointer">
                <button onClick={() => setSelectedCategory('all')} className="text-base font-medium text-base-content/60 hover:text-primary hover:duration-300 transition">All</button>
                <button onClick={() => setSelectedCategory('Web Templates')} className="text-base font-medium text-base-content/60 hover:text-primary hover:duration-300 transition">Web Templates</button>
                <button onClick={() => setSelectedCategory('UI Design')} className="text-base font-medium text-base-content/60 hover:text-primary hover:duration-300 transition">UI Design</button>
                <button onClick={() => setSelectedCategory('Branding')} className="text-base font-medium text-base-content/60 hover:text-primary hover:duration-300 transition">Branding</button>
                <button onClick={() => setSelectedCategory('Logo')} className="text-base font-medium text-base-content/60 hover:text-primary hover:duration-300 transition">Logo</button>
            </div>
            
        </section>
    )
}
