export default function Chip({name}: {name: string}){
    return (
        <div className='h-[2rem] flex justify-center items-center rounded-md border-white border-[1px] w-[125px] bg-gray text-white'>
            <p className='text-[1rem]'>{name}</p>
        </div>
    )
}