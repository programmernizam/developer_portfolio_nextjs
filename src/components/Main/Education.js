import { education } from "@/utils/data";
import Card from "./Card";
import CommonTitle from "./CommonTitle";

export default function Education() {
    return (
        <section id="about">
            <CommonTitle title={"Education"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
            <div className="p-6 md:p-10 bg-base-100 rounded-xl flex flex-col gap-8 md:gap-10 mt-10 xl:mt-12">
                {education.map((item, index) => <Card key={item.id} item={item} data={education} index={index} />)}
            </div>
        </section>
    )
}
