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

const npmTree = buildPageTree(ctx, {
    root: 'docs/npm'
})

export function getTree(mode: 'users' | 'devs' | 'npm' | string): PageTree {
    if (mode === 'users') return uiTree
    else if (mode === 'devs') return headlessTree
    else if (mode === 'npm') return npmTree
    return headlessTree
}

export const { getPage, getPageUrl } = createUtils(ctx)
