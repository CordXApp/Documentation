const withAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const config = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    eslint: {
        // Replaced by root workspace command
        ignoreDuringBuilds: true
    },
    env: {
        API_KEY: process.env.API_KEY,
        GIT_TOKEN: process.env.GIT_TOKEN
    }
}

const { withContentlayer } = require('next-contentlayer')

module.exports = withAnalyzer(withContentlayer(config))
