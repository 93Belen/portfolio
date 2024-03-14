import Link from "next/link";
import Chip from "./Chip";




export default function Card(props: {info:{name: String, description: String, link: String, tech: string[]}}){
    const info = props.info;
    const chips:  React.ReactNode[]  = [];
    info.tech.forEach(techElement => {
        chips.push(<Chip name={techElement} />)
    })
    



    return (
        <Link target="_blank" href={info.link as string} className='flex flex-col lg:flex-row gap-[12px] md:gap-[2rem] lg:gap-[176px] pt-[40px] lg:max-h-[25rem] mb-[40px] lg:p-5'>
            <div  className='lg:w-[50%] h-[400px] md:h-[600px] lg:h-[300px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.50)]'>
            <iframe scrolling='no' className='w-full h-[400px] md:h-[600px] lg:h-[300px]' src={info.link as string} />
            </div>
            <div className='flex flex-col gap-[12px] h-full justify-around lg:w-[50%]'>
                <h2 className='text-white text-md font-bold'>{info.name}</h2>
                <p className='text-white text-sm'>
                {info.description}
                </p>
                <div id='chipsgrid' className='gap-[12px] flex flex-wrap flex-row'>
                    {chips}
                </div>

            </div>
        </Link>
    )
}