import Link from "next/link";
import Chip from "./Chip";




export default function Card(props: {info:{name: String, description: String, link: String, tech: string[]}}){
    const info = props.info;
    const chips:  React.ReactNode[]  = [];
    info.tech.forEach(techElement => {
        chips.push(<Chip name={techElement} />)
    })
    



    return (
        <Link href={info.link as string} className='flex flex-col lg:flex-row gap-[12px] md:gap-[2rem] 3xl:gap-[10rem] pt-[40px] lg:max-h-[25rem] mb-[40px] lg:p-5'>
            <div  className='w-full h-[400px] md:h-[600px] lg:h-[300px] lg:w-[50vw] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.50)]'>
            <iframe scrolling='no' className='w-full h-[400px] md:h-[600px] lg:h-[300px] lg:w-[50vw]' src={info.link as string} />
            </div>
            <div className='flex flex-col gap-[12px] h-full justify-around lg:w-[50vw]'>
                <h2 className='text-white text-md font-bold'>{info.name}</h2>
                <p className='text-white text-sm'>
                {info.description}
                </p>
                <div className='grid gap-[12px] md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5'>
                    {chips}
                </div>

            </div>
        </Link>
    )
}