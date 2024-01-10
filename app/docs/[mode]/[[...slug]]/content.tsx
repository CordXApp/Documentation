'use client'

import { ThemeSwitch } from '@/components/ThemeSwitch'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ImageZoom } from 'next-docs-ui/components/image-zoom'
import { Callout } from '@/components/callout'
import { TypeTable } from '@/components/table'
import { BlacklistedDomainTable, KeywordBlacklist } from '@/components/domains'
import defaultComponents from 'next-docs-ui/mdx'
import type { HTMLAttributes } from 'react'

const components = {
    ...defaultComponents,
    Callout,
    TypeTable,
    BlacklistedDomainTable,
    KeywordBlacklist,
    img: (props: any) => <ImageZoom {...props} />,
    pre: (props: HTMLAttributes<HTMLPreElement>) => <defaultComponents.pre {...props} className="max-h-[400px]" />,
    ThemeSwitch,
    blockquote: (props: React.QuoteHTMLAttributes<HTMLQuoteElement>) => (
        <div className="my-4 rounded-lg border px-3 text-sm shadow-md">{props.children}</div>
    )
}

export function Content({ code }: { code: string }) {
    const inject = `if (typeof process === 'undefined') {globalThis.process = { env: {} }}`
    const MDX = useMDXComponent(inject + code)

    return <MDX components={components} />
}
