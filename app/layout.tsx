import { Nav } from '@/components/nav'
import { Inter } from 'next/font/google'
import 'next-docs-ui/style.css'
import 'katex/dist/katex.min.css'
import './style.css'
import { createMetadata } from '@/utils/metadata'
import { Provider } from './provider'

export const metadata = createMetadata({
    title: {
        template: '%s | CordX Docs',
        default: 'CordX Docs'
    },
    description: 'Documentation for all of the CordX services. Including our restful api and user guides!',
    metadataBase:
        process.env.NODE_ENV === 'development' ? new URL('http://localhost:3000') : new URL(`https://help.cordx.lol`)
})

const inter = Inter({
    subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body className="relative flex min-h-screen flex-col">
                <Provider>
                    <Nav />
                    {children}
                </Provider>
            </body>
        </html>
    )
}
