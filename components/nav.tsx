'use client'

import { cn } from '@/utils/cn'
import { GithubIcon } from 'lucide-react'
import { Nav as OriginalNav } from 'next-docs-ui/components'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function Nav() {
    const { mode } = useParams()

    return (
        <OriginalNav
            enableSidebar={mode === 'devs' || mode === 'users' || mode === 'npm'}
            links={[
                {
                    icon: <GithubIcon aria-label="Github" className="h-5 w-5" />,
                    href: 'https://github.com/CordXApp',
                    external: true
                }
            ]}
        >
            <Link href="/" className="whitespace-nowrap font-medium hover:text-muted-foreground">
                CordX Docs
            </Link>
            <div className="max-sm:absolute max-sm:left-[50%] max-sm:top-[50%] max-sm:translate-x-[-50%] max-sm:translate-y-[-50%]">
                <div className="border-input bg-secondary/50 rounded-md border p-1 text-sm">
                    <Link
                        href="/docs/devs"
                        className={cn(
                            'px-2 py-1 rounded-md text-muted-foreground transition-colors hover:text-accent-foreground',
                            mode === 'headless' && 'bg-accent text-accent-foreground'
                        )}
                    >
                        Devs
                    </Link>
                    <Link
                        href="/docs/users"
                        className={cn(
                            'px-2 py-1 rounded-md text-muted-foreground transition-colors hover:text-accent-foreground',
                            mode === 'ui' && 'bg-accent text-accent-foreground'
                        )}
                    >
                        Users
                    </Link>
                </div>
            </div>
        </OriginalNav>
    )
}
