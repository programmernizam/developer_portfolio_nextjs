import { blogs } from "@/utils/data";
import BlogCard from "./BlogCard";
import CommonTitle from "./CommonTitle";

export default function Blogs() {
    return (
        <section id="blogs">
            <CommonTitle title={"Latest Blog"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 xl:mt-12">
                {blogs.map(blog => <BlogCard key={blog.id} blog={blog}/>)}
            </div>
        </section>
    )
}
