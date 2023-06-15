import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amaraa in the world',
  description: 'galsaa ahd zoriulaw',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <head/>
      <body className={inter.className}>
      <h1>main header</h1>
        {children}
        
        </body>
    </html>
  )
}
