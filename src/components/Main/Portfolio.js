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
           
        </section>
    )
}
