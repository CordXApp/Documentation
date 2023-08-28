import { allDocs, allMeta } from 'contentlayer/generated'
import { buildPageTree, createUtils, loadContext } from 'next-docs-zeta/contentlayer'
import type { PageTree } from 'next-docs-zeta/server'
import { createElement } from 'react'

const ctx = loadContext(allMeta, allDocs, {
    resolveIcon(icon) {
        const res = require('lucide-react')
        icon = icon.trim()

        if (res[icon]) return createElement(res[icon])
        return undefined
    }
})

const uiTree = buildPageTree(ctx, {
    root: 'docs/users'
})

const headlessTree = buildPageTree(ctx, {
    root: 'docs/devs'
})

export function getTree(mode: 'users' | 'devs' | string): PageTree {
    if (mode === 'ui') {
        return uiTree
    }

    return headlessTree
}

export const { getPage, getPageUrl } = createUtils(ctx)
