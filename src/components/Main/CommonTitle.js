export default function CommonTitle({ title, description }) {
    return (
        <div className="mt-16 md:mt-24 xl:mt-28">
            <h2 className="text-2xl md:text-3xl xl:text-5xl text-base-content font-bold text-center">{title}</h2>
            <p className="md:max-w-[438px] text-center text-base text-paragraph mx-auto mt-4">{description}</p>
        </div>
    )
}
