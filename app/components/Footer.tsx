import Link from 'next/link'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FaMeetup } from 'react-icons/fa'
export default function Footer(){
    return (
        <section className='bg-black text-white py-[40px] px-[24px] md:px-[80px] flex flex-col gap-[12px] border-t-2 border-t-white mt-7'>
            <h2 className='font-bold text-md'>Belen Garcia Martinez</h2>
            <p className='text-sm md:max-w-[80%] lg:max-w-[50%] md:text-[1rem]'>Software developer - add one to two sentences about self - maybe an attention grabber. Software developer - add one to two sentences about self </p>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-[0.75rem]'>
                    <Link href=''><AiFillInstagram className='text-[2rem]'/></Link>
                    <Link href=''><AiFillLinkedin className='text-[2rem]'/></Link>
                    <Link href=''><AiFillGithub className='text-[2rem]' /></Link>
                    <Link href=''><FaMeetup className='text-[2rem]' /></Link>
                </div>
            <p className='hidden md:block justify-self-end self-end'>@Belen Garcia Martinez 2023</p>
            </div>
        </section>
    )
}