import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='p-5 bg-base-100 rounded-xl container mx-auto text-base text-paragraph text-center mb-8'>
            © {year} <Link href={"https://www.linkedin.com/in/programmernizam/"}>ProgrammerNizam</Link>. All Rights Reserved.
        </footer>
    )
}
