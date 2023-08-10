import { getTree } from '@/utils/page-tree'
import { allDocs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { MDXContent } from 'next-docs-ui/mdx'
import { DocsPage } from 'next-docs-ui/page'
import { getPageUrl } from 'next-docs-zeta/contentlayer'
import { findNeighbour, getTableOfContents } from 'next-docs-zeta/server'
import { notFound } from 'next/navigation'
import { DocumentBody } from './body'

type Param = {
    mode: string
    slug?: string[]
}

export default async function Page({ params }: { params: Param }) {
    const tree = getTree(params.mode)
    const path = [params.mode, ...(params.slug ?? [])].join('/')
    const page = allDocs.find(page => page.slug === path)

    if (page == null) {
        notFound()
    }

    const toc = await getTableOfContents(page.body.raw)
    const url = getPageUrl(page.slug.split('/'), '/docs')
    const neighbours = findNeighbour(tree, url)

    return (
        <DocsPage
            toc={toc}
            footer={neighbours}
            tocContent={
                <div className="mt-4 border-t pt-4">
                    <a
                        href={`https://github.com/CordXApp/Documentation/blob/master/content/${page._raw.sourceFilePath}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-muted-foreground hover:text-foreground text-xs font-medium"
                    >
                        Edit this Page -&gt;
                    </a>
                </div>
            }
        >
            <MDXContent>
                <div className="nd-not-prose mb-12">
                    <h1 className="text-foreground mb-4 text-3xl font-semibold sm:text-4xl">{page.title}</h1>
                    <p className="text-muted-foreground sm:text-lg">{page.description}</p>
                </div>
                <DocumentBody code={page.body.code} />
            </MDXContent>
        </DocsPage>
    )
}

export function generateMetadata({ params }: { params: Param }): Metadata {
    const path = [params.mode, ...(params.slug ?? [])].join('/')
    const page = allDocs.find(page => page.slug === path)

    if (page == null) return {}

    const description =
        page.description ?? 'Documentation for all of the CordX services. Including our restful api and user guides!'

    return {
        title: page.title,
        description,
        openGraph: {
            url: 'https://help.cordx.lol',
            title: page.title,
            description,
            images: '/banner.png',
            siteName: 'CordX Docs'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@HeyCordX',
            title: page.title,
            description,
            images: '/banner.png'
        }
    }
}

export function generateStaticParams() {
    return allDocs.map(docs => {
        const [mode, ...slugs] = docs.slug.split('/')

        return {
            slug: slugs,
            mode
        }
    })
}
