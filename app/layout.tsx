import './globals.css'
import { Montserrat } from 'next/font/google'

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
      <body>{children}</body>
    </html>
  )
}
