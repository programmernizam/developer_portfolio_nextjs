import Link from "next/link";
import { FaBookOpen, FaBriefcase, FaFileAlt } from "react-icons/fa";
import { HiHome, HiMiniCodeBracketSquare } from "react-icons/hi2";
import { IoChatboxEllipses } from "react-icons/io5";

const menuItems = [
    {
        id: "#home",
        icon: <HiHome />,
    },
    {
        id: "#services",
        icon: <HiMiniCodeBracketSquare />,
    },
    {
        id: "#about",
        icon: <FaBookOpen />,
    },
    {
        id: "#portfolio",
        icon: <FaBriefcase />,
    },
    {
        id: "#file",
        icon: <FaFileAlt />,
    },
    {
        id: "#chat",
        icon: <IoChatboxEllipses />,
    },
];

export default function Menu() {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            {menuItems.map((item) => (
                <Link href={item.id} key={item.id} className="p-4 hover:bg-primary rounded-lg text-[24px] text-paragraph">
                    {item.icon}
                </Link>
            ))}
        </div>
    );
}
