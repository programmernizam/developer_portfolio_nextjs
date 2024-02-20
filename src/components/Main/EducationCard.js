export default function EducationCard({ edu, index }) {
    const { title, university, year, description } = edu
    return (
        <div className={`${index}flex flex-col gap-6 xl:flex-row xl:justify-between`}>
            <div className="pl-3 xl:pl-0 border-l-2 xl:border-l-0 border-paragraph/10 w-full xl:max-w-[315px]">
                <h3 className="text-lg text-heading font-semibold mb-2 xl:mb-3">{university}</h3>
                <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">{year}</p>
            </div>
            <div className="w-full">
                <h5 className="text-lg font-medium text-heading">{title}</h5>
                <p className="mt-2 lg:mt-4 text-paragraph">{description}</p>
            </div>
        </div>
    )
}
