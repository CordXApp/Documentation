import Link from 'next/link'
import { Code2Icon, SmileIcon, InfoIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'
import Image from 'next/image'

export default function HomePage() {
    return (
        <main>
            <div className="absolute inset-x-0 top-0 h-[400px] w-full -translate-y-8 z-[-1]">
                <div className="h-full w-full mx-auto max-w-[1000px] bg-gradient-to-r from-purple-600 to-blue-800 [mask-image:radial-gradient(500px_100%_at_top_center,white,transparent)] animate-in fade-in duration-1000 dark:opacity-50" />
            </div>
            <div className="container py-20 flex flex-col items-center text-center">
                <div className="bg-gradient-to-b from-blue-500 shadow-md shadow-purple-600/50 rounded-lg mb-6">
                    <Image alt="CordX Logo" src="/logo.png" width={75} height={75} />
                </div>
                <h1 className="text-2xl font-semibold mb-4 sm:text-4xl">Welcome to CordX</h1>
                <p className="text-muted-foreground max-w-xl sm:text-lg">
                    The all-in one experience for sharing your media and files!
                </p>
                <div className="mt-14 grid grid-cols-1 max-w-4xl gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 md:grid-cols-2">
                    <Link href="/docs/devs" className="group relative overflow-hidden rounded-xl p-px z-[2] bg-border">
                        <i className="absolute opacity-0 transition-opacity top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[130%] h-auto aspect-square z-[-1] group-hover:opacity-100">
                            <div className="w-full h-full bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-400 via-pink-400 animate-infinite-rotate" />
                        </i>
                        <div className="flex flex-col items-center bg-background rounded-xl h-full bg-gradient-to-t from-purple-400/20 p-6 sm:p-12">
                            <div className="border p-3 bg-gradient-to-b from-purple-400/50 border-purple-500 shadow-xl shadow-purple-400/50 mb-6 rounded-xl">
                                <Code2Icon className="h-9 w-9 text-purple-400 dark:text-purple-200" />
                            </div>
                            <p className="mb-2 text-xl font-medium">Developers</p>
                            <p className="text-muted-foreground">
                                Everything you need to get started with our restful api
                            </p>
                        </div>
                    </Link>

                    <Link href="/docs/users" className="group relative overflow-hidden rounded-xl p-px z-[2] bg-border">
                        <i className="absolute opacity-0 transition-opacity top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[130%] h-auto aspect-square z-[-1] group-hover:opacity-100">
                            <div className="w-full h-full bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-400 via-blue-400 animate-infinite-rotate" />
                        </i>
                        <div className="flex flex-col items-center bg-background rounded-xl h-full bg-gradient-to-t from-blue-400/20 p-6 sm:p-12">
                            <div className="border p-3 bg-gradient-to-b from-blue-400/50 border-blue-500 shadow-xl shadow-blue-400/50 mb-6 rounded-xl">
                                <SmileIcon className="h-9 w-9 text-blue-400 dark:text-cyan-200" />
                            </div>
                            <p className="mb-2 text-xl font-medium">Users</p>
                            <p className="text-muted-foreground">
                                Guides and information for the CordX Users regarding website features
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="container mt-24 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="bg-background relative z-[2] flex flex-col overflow-hidden rounded-2xl border p-8">
                    <div className="relative z-[-1] mx-auto mb-20">
                        <div className="absolute inset-8 z-[-1] animate-pulse bg-purple-300/50 blur-3xl" />
                        <Rocket className="text-purple-400 dark:text-purple-200 mx-auto [mask-image:linear-gradient(to_bottom,white_50%,transparent_90%)]" />
                    </div>
                    <div className="from-background/30 absolute inset-0 flex flex-col bg-gradient-to-b from-10% to-purple-500/20 p-8">
                        <div className="mt-auto text-center">
                            <p className="mb-2 text-xl font-medium">Lightning Fast</p>
                            <p className="text-muted-foreground max-sm:text-sm">
                                With our blazing fast restful api, we will never leave you waiting
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-background relative z-[2] flex flex-col overflow-hidden rounded-2xl border p-8">
                    <div className="z-[-1] mx-auto mb-28 flex rounded-3xl border bg-gradient-to-b from-transparent to-cyan-500/30 px-24 shadow-2xl shadow-cyan-400/30">
                        <Heart className="mx-auto" />
                    </div>
                    <div className="from-background/30 absolute inset-0 flex flex-col bg-gradient-to-b from-10% to-blue-500/20 p-8">
                        <div className="mt-auto text-center">
                            <p className="mb-2 text-xl font-medium">First-class Support</p>
                            <p className="text-muted-foreground max-sm:text-sm">
                                We offer support from users based all around the world!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[-300px] h-[400px] bg-gradient-to-r from-purple-400 to-blue-400 opacity-30 [mask-image:linear-gradient(to_top,white,transparent)] lg:via-transparent lg:to-blue-400" />
            <div className="container text-center mt-20 max-w-4xl">
                <div className="mx-auto w-fit border border-blue-400 shadow-lg shadow-blue-400/50 rounded-md p-2 mb-6">
                    <InfoIcon />
                </div>
                <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 font-semibold mb-4 sm:text-4xl sm:leading-snug">
                    So what are you waiting for?
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl sm:text-lg">
                    Start using CordX today for all of these amazing features and more
                </p>
            </div>

            <div className="relative z-[-1] mt-14">
                <div className="absolute top-12 left-0 bg-gradient-to-r from-purple-400 to-blue-400 w-full [mask-image:linear-gradient(to_top,white,transparent)] lg:via-transparent lg:to-blue-400" />
            </div>

            <div className="container max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mt-10">
                <div className="border p-12 rounded-3xl text-center flex flex-col items-center bg-gradient-to-br from-background md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Custom Domains</h2>
                    <p className="text-muted-foreground">
                        We are one of the few upload services for Sharex that allow you to configure our entire website
                        and upload servers to work and respond to your personal domains using our custom cname record.
                    </p>
                </div>
                <div className="border p-12 rounded-3xl text-center flex flex-col justify-center bg-gradient-to-br from-background">
                    <h2 className="text-2xl font-semibold mb-4">User-Ready Domains</h2>
                    <p className="text-muted-foreground">
                        If you are unable to bring your own domain well don&apos;t worry we already have some configured
                        and ready for you to use!
                    </p>
                </div>
                <div className="border p-12 rounded-3xl text-center flex flex-col justify-center bg-gradient-to-br from-background">
                    <h2 className="text-2xl font-semibold mb-4">Free Forever</h2>
                    <p className="text-muted-foreground">
                        We never have and never will charge you to use our services. They are 100% free forever and
                        thats a guarantee.
                    </p>
                </div>
                <div className="border p-12 rounded-3xl text-center flex flex-col justify-center bg-gradient-to-br from-background">
                    <h2 className="text-2xl font-semibold mb-4">Advanced Dashboard</h2>
                    <p className="text-muted-foreground">
                        Our sleek and efficient dashboard allows users to easily manage and control their CordX
                        experience.
                    </p>
                </div>
                <div className="border p-12 rounded-3xl text-center flex flex-col justify-center bg-gradient-to-br from-background">
                    <h2 className="text-2xl font-semibold mb-4">Highly Configurable</h2>
                    <p className="text-muted-foreground">
                        We offer a wide variety of configuration options that can be accessed via the user profile.
                    </p>
                </div>
                <div className="col-span-full h-[300px] mt-[-300px] bg-gradient-to-r from-purple-400/50 to-cyan-400/50 z-[-1] blur-3xl" />
            </div>
        </main>
    )
}

function Rocket(props: ComponentPropsWithRef<'svg'>) {
    return (
        <svg width="200" height="200" viewBox="0 0 512 512" {...props}>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="6"
                d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5c-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180.29 180.29 0 0 0 1.1 18.3a18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3a179.91 179.91 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17c7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95ZM298.66 213.67a42.7 42.7 0 1 1 60.38 0a42.65 42.65 0 0 1-60.38 0Z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="6"
                d="M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32"
            />
        </svg>
    )
}

function Heart(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg width="178" height="159" viewBox="0 0 178 159" fill="none" {...props}>
            <g filter="url(#filter0_d_2_135)">
                <path
                    d="M52 39H76M46 45.5L80 45.5M44 51.5L84 51.5M43 57.5H135M44 63.5H134M45 69.5H133M49 75.5H129M53 81.5H125M57 87.5H121M62 93.5H116M68 99.5H110M75 105.5H103M82.5 111.5H97.5M126 39H102M132 45.5L98 45.5M134 51.5L94 51.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="animate-heart stroke-cyan-600 dark:stroke-cyan-200"
                    strokeDasharray={200}
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_2_135"
                    x="0"
                    y="0"
                    width="178"
                    height="158.5"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="21" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.7875 0 0 0 0 0.9745 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_135" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_135" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
