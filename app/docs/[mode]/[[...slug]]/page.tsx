import { createMetadata } from '@/utils/metadata'
import { getPage, getPageUrl, getTree } from '@/utils/source'
import { allDocs } from 'contentlayer/generated'
import { ExternalLinkIcon } from 'lucide-react'
import type { Metadata } from 'next'
import { MDXContent } from 'next-docs-ui/mdx'
import { DocsPage } from 'next-docs-ui/page'
import { findNeighbour, getTableOfContents } from 'next-docs-zeta/server'
import { getGithubLastEdit } from '@/utils/git'
import { notFound } from 'next/navigation'
import { Content } from './content'
import { resolve } from 'url'

type Param = {
    mode: string
    slug?: string[]
}

export default async function Page({ params }: { params: Param }) {
    const tree = getTree(params.mode)
    const page = getPage([params.mode, ...(params.slug ?? [])])

    if (page == null) {
        notFound()
    }

    const toc = await getTableOfContents(page.body.raw)
    const url = getPageUrl(page.slug)
    const neighbours = findNeighbour(tree, url)
    //const time = await getGitLastEditTime('CordXApp/Documentation', 'content/' + page._raw.sourceFilePath)
    const time = await getGithubLastEdit({
        owner: 'CordXApp',
        repo: 'Documentation',
        path: resolve('content/docs', page._raw.sourceFilePath),
        token: process.env.GIT_TOKEN ? `Bearer ${process.env.GIT_TOKEN}` : undefined
    })

    return (
        <DocsPage
            toc={toc}
            footer={neighbours}
            lastUpdate={time}
            tocContent={
                <a
                    href={`https://github.com/CordXApp/Documentation/blob/master/content/${page._raw.sourceFilePath}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs inline-flex text-muted-foreground items-center hover:text-foreground"
                >
                    Edit on Github <ExternalLinkIcon className="ml-1 w-3 h-3" />
                </a>
            }
        >
            <MDXContent>
                <div className="nd-not-prose mb-12">
                    <h1 className="text-foreground mb-4 text-3xl font-semibold sm:text-4xl">{page.title}</h1>
                    <p className="text-muted-foreground sm:text-lg">{page.description}</p>
                </div>
                <Content code={page.body.code} />
            </MDXContent>
        </DocsPage>
    )
}

export function generateMetadata({ params }: { params: Param }): Metadata {
    const slugs = [params.mode, ...(params.slug ?? [])]
    const page = getPage(slugs)

    if (page == null) return {}

    const description =
        page.description ?? 'Documentation for all of the CordX services. Including our restful api and user guides!'

    return createMetadata({
        title: page.title,
        description,
        openGraph: {
            url: `https://help.cordx.lol/docs/${slugs.join('/')}`
        }
    })
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
