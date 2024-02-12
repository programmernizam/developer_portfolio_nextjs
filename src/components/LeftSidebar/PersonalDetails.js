import person from '@/assets/profile.jpg';
import Image from "next/image";

const devInfo = {
    name: 'MD Nizam Uddin',
    designation: 'Fronted Developer',
    fbLink: '#',
    twLink: '#',
    ldLink: '#',
    igLink: '#',
    ghLink: '#',
    email: "info.mdnizamuddin@gmail.com",
    phone: '+880 163 8548 900',
    country: 'Bangladesh',
    city: 'Chandpur',
    age: '22',
    freelance: 'Available',
    language: 'English, Bangla'


}
export default function PersonalDetails() {
    return (
        <div>
            <div>
                <div class="relative w-fit mx-auto">
                    <Image width={100} height={100} src={person} alt="person" class="rounded-full object-contain" />
                    <span class="bottom-0 right-3 border-primary border-2 absolute  w-5 h-5 bg-green-500 rounded-full"></span>
                </div>
            </div>
        </div>
    )
}
