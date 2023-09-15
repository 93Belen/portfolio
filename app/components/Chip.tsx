export default function Chip({name}: {name: string}){
    return (
        <div className='h-[2rem] flex justify-center items-center rounded-md border-purple border-[1px] w-fit py-[6px] px-[12px] bg-[rgba(122,110,215,0.20)] text-purple'>
            <p className='text-[1rem] w-full'>{name}</p>
        </div>
    )
}