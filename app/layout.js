import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ReduxProvider } from '@/ReduxProvider'
import ToastProvider from '@/components/ToastContainer'

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
        <main className='lg:max-w-[80rem] mx-auto'>
          <ToastProvider>
            <ReduxProvider>
              <Navbar />

              {children}
            </ReduxProvider>
          </ToastProvider>
        </main>
      </body>
    </html>
  )
}
