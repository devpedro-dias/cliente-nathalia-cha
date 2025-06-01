import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'Chá Secreto',
    description:
        'Chá Secreto para emagrecimento e melhoria de qualidade de vida',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={`${poppins.variable} antialiased h-screen`}>
                {children}
            </body>
        </html>
    )
}
