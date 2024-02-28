import Link from "next/link";

export default function Footer() {
    return (
        <footer className='p-5 bg-base-100 rounded-xl container mx-auto text-base text-paragraph text-center mb-8'>
            © 2023 <Link href={"https://www.linkedin.com/in/programmernizam/"}>ProgrammerNizam</Link>. All Rights Reserved.
        </footer>
    )
}
