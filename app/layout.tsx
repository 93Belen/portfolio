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
    <html className={`${montserrat.variable}`} lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
