export default function ContactInfoCard({ info }) {
    const { icon, title1, title2, title3, name1, name2, name3 } = info;
    return (
        <div className="rounded-xl bg-base-100 p-3 lg:p-6 w-full">
            <span className="flex items-center justify-center bg-primary rounded-full w-10 h-10 mx-auto p-3 mb-6">
                {icon}
            </span>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-base-content">{name1}</p>
                    <span className="text-sm text-paragraph">{title1}</span>
                </div>
            </div>
        </div>
    )
}
