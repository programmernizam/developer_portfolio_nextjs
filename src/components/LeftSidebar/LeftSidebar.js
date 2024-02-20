import { personalData } from '@/utils/data';
import PersonalDetails from "./PersonalDetails";
import Skill from "./Skill";

export default function LeftSidebar() {
    return (
        <div className="rounded-xl bg-base-100 p-6 overflow-y-auto  h-[calc(100vh-2rem)] scrollBarStyle">
            <PersonalDetails data={personalData} />
            <Skill data={personalData} />
        </div>
    )
}
