import { cn } from '@/utils/cn'
import { getTree } from '@/utils/source'
import { Code2Icon, SmileIcon, WorkflowIcon, LibraryIcon } from 'lucide-react'
import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
const { version } = require('../../../package.json')

export default async function Layout({ params, children }: { params: { mode: string }; children: ReactNode }) {
    const tree = getTree(params.mode)

    let Icon
    let title
    let description

    if (params.mode === 'users') [Icon, title, description] = [SmileIcon, `User Guides - `, 'Guides and information']
    else if (params.mode === 'devs')
        [Icon, title, description] = [Code2Icon, `Dev Docs - `, 'API docs and usage guides']
    else if (params.mode === 'npm')
        [Icon, title, description] = [LibraryIcon, `NPM Docs - `, 'Documentation for our npm modules']
    else [Icon] = [WorkflowIcon]

    return (
        <main
            className={cn(
                params.mode === 'users' && '[--primary:213_94%_68%]',
                params.mode === 'devs' && '[--primary:270_95%_75%]',
                params.mode === 'npm' && '[--primary:700_94%_68%]'
            )}
        >
            <div id="docs-gradient" className="absolute right-0 top-0 overflow-hidden z-[-1] sm:right-[20vw]">
                <div className="bg-gradient-radial-top mx-auto h-[700px] w-[1500px] from-primary/20 to-80%" />
            </div>
            <DocsLayout
                tree={tree}
                nav={false}
                sidebarBanner={
                    <div className="flex flex-row gap-2 items-center p-2 rounded-lg border bg-card text-card-foreground transition-colors shadow-lg shadow-background hover:bg-muted">
                        <Icon className="w-9 h-9 p-1 shrink-0 border rounded-md text-primary bg-background" />
                        <div>
                            <p className="font-medium text-sm">
                                {title}
                                <a href="https://github.com/CordXApp/API/releases">v{version}</a>
                            </p>
                            <p className="text-muted-foreground text-xs">{description}</p>
                        </div>
                    </div>
                }
            >
                {children}
            </DocsLayout>
        </main>
    )
}

export function generateStaticParams() {
    return [
        {
            mode: 'users'
        },
        {
            mode: 'devs'
        },
        {
            mode: 'npm'
        }
    ]
}
