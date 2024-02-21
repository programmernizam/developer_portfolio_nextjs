"use client"
import CommonTitle from "./CommonTitle";

import { testimonial } from '@/utils/data';
import ReviewCard from './ReviewCard';

export default function Testimonial() {
    return (
        <section>
            <CommonTitle title={"Testimonials"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
            <div className="mt-10 xl:my-12">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {testimonial.map(item =>
                        <ReviewCard item={item} key={item.id} />
                    )}
                </div>
            </div>
        </section >
    )
}
