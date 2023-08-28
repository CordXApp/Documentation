import type { Metadata } from 'next/types'

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            url: 'https://help.cordx.lol',
            images: '/banner.png',
            siteName: 'Next Docs',
            ...override.openGraph
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@HeyCordX',
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            images: '/banner.png',
            ...override.twitter
        }
    }
}
