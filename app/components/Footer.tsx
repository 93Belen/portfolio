import Link from 'next/link'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FaMeetup } from 'react-icons/fa'
export default function Footer(){
    return (
        <section className='bg-black text-white py-[40px] px-[24px] md:px-[80px] flex flex-col gap-[12px] border-t-2 border-t-[#5B5B5B] mt-7 w-screen ml-[-24px] md:ml-[-80px]'>
            <h2 className='font-bold text-md'>Belen Garcia Martinez</h2>
            <p className='text-sm md:max-w-[80%] lg:max-w-[50%] md:text-[1rem]'>Front-end developer crafting web designs into pixel-perfect reality, one line of code at a time.</p>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-[0.75rem]'>
                    <Link target='_blank' href='https://www.instagram.com/evil_belencita/'><AiFillInstagram className='text-[2rem]'/></Link>
                    <Link target='_blank' href='https://www.linkedin.com/in/93belen/'><AiFillLinkedin className='text-[2rem]'/></Link>
                    <Link target='_blank' href='https://github.com/93Belen'><AiFillGithub className='text-[2rem]' /></Link>
                    <Link target='_blank' href='https://www.meetup.com/hispanos-y-amigos-tech-kc/'><FaMeetup className='text-[2rem]' /></Link>
                </div>
            <p className='hidden md:block justify-self-end self-end'>@Belen Garcia Martinez 2023</p>
            </div>
        </section>
    )
}