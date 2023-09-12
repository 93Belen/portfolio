import Link from "next/link";




export default function Card(props: {info:{name: String, description: String, details: string, link: String}}){
    const info = props.info;
    return (
        <Link href={info.link as string} className='flex flex-col lg:flex-row gap-[12px] md:gap-[2rem] xl:gap-[10rem] pt-[40px] lg:max-h-[25rem] mb-[40px] lg:p-5'>
            <iframe scrolling='no' className='w-full h-[400px] md:h-[600px] lg:h-[300px] lg:w-[50vw]' src={info.link as string} />
            <div className='flex flex-col gap-[12px] h-full justify-around lg:w-[50vw]'>
                <h2 className='text-white text-md font-bold'>{info.name}</h2>
                <p className='text-white text-sm'>
                {info.description}
                </p>
                <p className='text-white text-sm' >
                    {info.details}
                </p>
            </div>
        </Link>
    )
}