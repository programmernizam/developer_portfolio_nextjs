import person from '@/assets/person.png';
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="max-h-[492px] bg-base-100 p-6 sm:p-10 xl:p-16 rounded-xl flex items-center justify-center md:justify-between" id='home'>
      <div className='w-full md:max-w-[260px] lg:max-w-[460px]'>
        <h1 className='text-3xl xl:text-5xl font-semibold text-center text-heading md:text-start leading-9 xl:leading-[56px]'>I design products that delight and inspire people.
        </h1>
        <p className="mt-4 mb-6 xl:my-6 text-paragraph xl:text-lg text-base-content/60 text-center md:text-start leading-6 xl:leading-7">A Product Designer and Visual Developer in SF. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
        <button className='flex justify-center md:justify-start items-center mx-auto md:mx-0 bg-primary pl-6 py-1.5 rounded-full pr-1.5'>
          <Link href="#" className="mr-4 font-medium">LETS TALK
          </Link>
          <span className='p-2 bg-heading rounded-full'>
            <FaArrowRightLong className='text-primary' />
          </span>
        </button>
      </div>
      <div className='hidden md:block flex-none'>
        <Image width={350} height={492} className='h-full' src={person} alt="Person" />
      </div>
    </div>
  )
}
