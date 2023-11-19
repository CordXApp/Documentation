import { NextResponse, type NextRequest } from 'next/server'

const allowed = ['users', 'devs', 'npm']

export default function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    if (pathname.startsWith('/docs/') && !allowed.includes(pathname.split('/')[2])) {
        const url = new URL('/docs/devs/' + pathname.slice('/docs/'.length), req.url)

        return NextResponse.redirect(url)
    }

    if (pathname === '/docs') {
        return NextResponse.redirect(new URL('/docs/devs', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/docs/:path*']
}
