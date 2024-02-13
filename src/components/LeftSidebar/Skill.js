import Link from "next/link";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Skill({ data }) {
    return (
        <div className="mt-5">
            <hr />
            <h3 className="mt-5">Major Skill</h3>
            <div className="mt-5">
                {data.skills.map(skill => <div key={skill.id} className="mb-5">
                    <div className="flex justify-between mb-1">
                        <span className="font-medium text-heading text-[14px]">{skill.title}</span>
                        <span className="text-sm font-medium text-paragraph text-[12px]">{skill.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-primary h-1 rounded-full" style={{ width: `${skill.value}%` }}></div>
                    </div>
                </div>)}
            </div>
            <hr />
            <h3 className="mt-5">Extra Skill</h3>
            <div className="my-5 flex flex-wrap gap-1">
                {data.extraSkill.map(item => <span key={Math.random()} className="py-[2px] text-[12px] px-[10px] hover:bg-secondary text-center rounded-xl">{item}</span>)}
            </div>
            <hr />
            <Link href={data.resume} className="bg-primary px-8 py-4 mt-5 rounded-xl font-medium uppercase flex items-center justify-between">Download My CV <IoCloudDownloadOutline />
            </Link>
        </div>
    )
}
