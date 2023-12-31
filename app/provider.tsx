'use client'

import { RootProvider } from 'next-docs-ui/provider'
import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

const SearchDialog = dynamic(() => import('@/components/search'))

export function Provider({ children }: { children: ReactNode }) {
    return (
        <RootProvider
            search={{
                SearchDialog,
                links: [
                    ['Home', '/'],
                    ['User Docs', '/docs/users'],
                    ['Developer Docs', '/docs/devs'],
                    ['NPM Docs', '/docs/npm']
                ]
            }}
        >
            {children}
        </RootProvider>
    )
}
