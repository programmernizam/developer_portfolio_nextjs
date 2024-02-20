export default function EducationCard({ edu }) {
    const { title, university, year, description } = edu
    return (
        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
            <div className="pl-3 xl:pl-0 border-l-2 xl:border-l-0 border-paragraph/10 w-full xl:max-w-[315px]">
                <h3 className="text-lg text-heading font-semibold">{university}</h3>
            </div>
        </div>
    )
}
