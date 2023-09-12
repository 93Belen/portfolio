import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: "swap",
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Belen Garcia Martinez',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${montserrat.variable} bg-black`} lang="en">
      <body>
        <Header/>
        <main className='px-[24px] md:px-[80px] bg-black text-white'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
