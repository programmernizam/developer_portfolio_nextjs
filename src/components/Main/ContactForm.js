export default function ContactForm() {
    return (
        <div className="lg:col-span-5 bg-base-100 p-6 lg:p-10 rounded-xl w-full">
            <h3 className="text-xl font-bold pb-6">Leave a Message</h3>
            <form action="">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
                    <div className="w-full">
                        <p className="text-sm text-paragraph pb-2">Name</p>
                        <input type="text" className="w-full bg-base-200 rounded-lg outline-none px-4 h-12" />
                    </div>
                    <div className="w-full">
                        <p className="text-sm text-paragraph pb-2">Email</p>
                        <input type="email" className="w-full bg-base-200 rounded-lg outline-none px-4 h-12" />
                    </div>
                </div>
                <div className="w-full py-5">
                    <p className="text-sm text-base-paragraph pb-2">
                        Subject
                    </p>
                    <input type="text" className="w-full bg-base-200 rounded-lg outline-none px-4 h-12" />
                </div>
                <div className="w-full"></div>
            </form>
        </div>
    )
}
