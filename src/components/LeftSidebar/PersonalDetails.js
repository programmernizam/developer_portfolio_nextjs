import person from '@/assets/person.png';
import Image from "next/image";

const devInfo = {
    name: 'MD Nizam Uddin'
}
export default function PersonalDetails() {
    return (
        <div>
            <div>
                <div class="relative">
                    <Image src={person} alt="person" class="w-10 h-10 rounded-full" />
                    <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
            </div>
        </div>
    )
}
