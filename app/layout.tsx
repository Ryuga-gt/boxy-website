import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'BOXY BuildCon - Interior Design Studio',
  description: 'Modern Interior Design Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

