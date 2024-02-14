import { FaBookOpen, FaBriefcase, FaFileAlt } from "react-icons/fa";
import { HiHome, HiMiniCodeBracketSquare } from "react-icons/hi2";
import { IoChatboxEllipses } from "react-icons/io5";




export default function Menu() {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <span className="p-4 hover:bg-primary rounded-lg">
                <HiHome className="text-[24px] text-paragraph" />
            </span>
            <span className="p-4 hover:bg-primary rounded-lg">
                <HiMiniCodeBracketSquare className="text-[24px] text-paragraph" />
            </span>
            <span className="p-4 hover:bg-primary rounded-lg">
                <FaBookOpen className="text-[24px] text-paragraph" />
            </span>
            <span className="p-4 hover:bg-primary rounded-lg">
                <FaBriefcase className="text-[24px] text-paragraph" />
            </span>
            <span className="p-4 hover:bg-primary rounded-lg">
                <FaFileAlt className="text-[24px] text-paragraph" />
            </span>
            <span className="p-4 hover:bg-primary rounded-lg">
                <IoChatboxEllipses className="text-[24px] text-paragraph" />
            </span>
        </div>
    )
}
