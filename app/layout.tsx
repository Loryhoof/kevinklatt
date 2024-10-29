import { Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const inter = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Kevin Klatt | Loryhoof',
  description: 'Kevin Klatt | Loryhoof | Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      
      <body className={`flex h-full flex-col`}>
        
               
            <main className='grow'>{children}</main>
            {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
