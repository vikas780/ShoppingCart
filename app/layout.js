import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trendify',
  description:
    'Shop the latest trends in fashion, electronics, and home essentials at Trendify. Discover top-quality products at unbeatable prices. Elevate your shopping experience with Trendify today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='lg:max-w-[88rem] mx-auto'>
          <Navbar />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  )
}
