import Footer from '../components/Footer'



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <main className='px-[24px] md:px-[80px] bg-black text-white'>
        {children}
        <Footer/>
        </main>
  )
}
