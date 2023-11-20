import { getPageUrl } from '@/utils/source'
import { allDocs } from 'contentlayer/generated'
import { createSearchAPI } from 'next-docs-zeta/server'

export function getTag(path: any) {
    let tag

    if (path.startsWith('docs/users')) tag = 'users'
    else if (path.startsWith('docs/devs')) tag = 'devs'
    else if (path.startsWith('docs/npm')) tag = 'npm'
    else tag = 'devs'

    return tag
}

export const { GET } = createSearchAPI('advanced', {
    indexes: allDocs.map(docs => ({
        id: docs._id,
        title: docs.title,
        content: docs.body.raw,
        url: getPageUrl(docs.slug),
        structuredData: docs.structuredData,
        tag: `${getTag(docs._raw.flattenedPath)}`
    })),
    tag: true
})
