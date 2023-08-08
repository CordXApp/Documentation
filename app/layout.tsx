import { Nav } from '@/components/nav'
import { RootProvider } from 'next-docs-ui/provider'
import { Inter } from 'next/font/google'
import 'next-docs-ui/style.css'
import './style.css'

export const metadata = {
    title: {
        template: '%s | CordX Docs',
        default: 'CordX Docs'
    },
    description: 'Documentation for all of the CordX services. Including our restful api and user guides!',
    openGraph: {
        url: 'https://help.cordx.lol',
        title: {
            template: '%s | CordX Docs',
            default: 'CordX Docs'
        },
        description: 'Documentation for all of the CordX services. Including our restful api and user guides!',
        images: '/banner.png',
        siteName: 'CordX Docs'
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@HeyCordX',
        title: {
            template: '%s | CordX Docs',
            default: 'CordX Docs'
        },
        description: 'Documentation for all of the CordX services. Including our restful api and user guides!',
        images: '/banner.png'
    },
    metadataBase: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`
}

const inter = Inter({
    subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body className="relative flex min-h-screen flex-col">
                <RootProvider
                    search={{
                        links: [
                            ['Home', '/'],
                            ['User Guides', '/docs/users'],
                            ['Developer Docs', '/docs/devs']
                        ]
                    }}
                >
                    <Nav />
                    {children}
                </RootProvider>
            </body>
        </html>
    )
}
