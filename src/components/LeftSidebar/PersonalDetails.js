import person from '@/assets/profile.jpg';
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function PersonalDetails({ data }) {

    return (
        <div>
            {/* Profile Avatar Image */}
            <div class="relative w-fit mx-auto">
                <Image width={100} height={100} src={person} alt="person" class="rounded-full object-contain" />
                <span class="bottom-0 right-3 border-primary border-2 absolute  w-5 h-5 bg-green-500 rounded-full"></span>
            </div>
            {/* Profile Info */}
            <div className='my-5'>
                <h2 className='text-xl font-semibold text-center'>{data.name}</h2>
                <p className=' mt-3 text-center'><span className='text-[14px] bg-secondary/15 inline-block px-5 text-primary rounded-full font-medium'>{data.designation}</span></p>
            </div>
            {/* Social Media */}
            <div className='flex items-center justify-center gap-4'>
                <FaFacebookF className='text-paragraph text-[16px] hover:text-secondary cursor-pointer' />
                <AiFillInstagram className='text-paragraph text-[16px] hover:text-secondary cursor-pointer' />
                <FaTwitter className='text-paragraph text-[16px] hover:text-secondary cursor-pointer' />
                <FaLinkedinIn className='text-paragraph text-[16px] hover:text-secondary cursor-pointer' />
                <FaGithub className='text-paragraph text-[16px] hover:text-secondary cursor-pointer' />
            </div>
            <div className='mt-5'>
                {data.info.map(item => <ul key={item.id} className='flex justify-between items-center mt-3'>
                    <li className='text-[14px] font-normal text-heading'>
                        {item.name}:
                    </li>
                    <li className='text-[14px] font-light text-paragraph'>
                        {item.title}
                    </li>
                </ul>)}
            </div>
        </div>
    )
}
