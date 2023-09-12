import Link from "next/link"
import ContactForm from "../components/Contactform"
import GitHub from "../components/icons/socialmedia/github"
import Instagram from "../components/icons/socialmedia/instagram"
import Linkedin from "../components/icons/socialmedia/linkedin"
import Meetup from "../components/icons/socialmedia/meetup"
import SVGh2 from "../components/SVGh2"

export default function Contact(){
    return (
        <section className='min-h-[90vh] w-fit pb-10'>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-row'>
                    <h1 className='text-lg text-white md:text-[3rem] lg:text-xl'>contact</h1>
                    <SVGh2/>
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <p>
                    Have a project idea or need assistance with website development? Feel free to reach out if you're interested in collaborating or if you have any inquiries. 
                    </p>
                    <div className='lg:hidden flex flex-row gap-[12px] justify-around'>
                        <Link href='/'>
                            <Linkedin/>
                        </Link>
                        <Link href='/'>
                            <GitHub/>
                        </Link>
                        <Link href='/'>
                            <Instagram/>
                        </Link>
                        <Link href='/'>
                            <Meetup/>
                        </Link>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </section>
    )
}