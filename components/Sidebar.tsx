'use client'
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Code, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { FreeCounter } from "./free-counter"

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] })

const routes = [
    {
        label: "Dashboard",
        Icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        Icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        Icon: ImageIcon,
        href: "/image",
        color: "text-pink-700"
    },
    {
        label: "Video Generation",
        Icon: VideoIcon,
        href: "/video",
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        Icon: MusicIcon,
        href: "/music",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        Icon: Code,
        href: "/code",
        color: "text-green-700"
    },
    {
        label: "Settings",
        Icon: Settings,
        href: "/settings",
    },
]

const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
}: {
    apiLimitCount: number;
    isPro: boolean;
}) => {
    const pathname = usePathname()
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href={'/dashboard'} className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Genius
                    </h1>
                </Link>
                <div className="space-y-1"></div>
                {routes.map((route) => (
                    <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg hover:bg-white/10 hover:text-white transition", pathname === route.href ? 'text-white bg-white/10' : "text-zinc-400")}
                    >
                        <div className="flex items-center flex-1">
                            <route.Icon className={cn("h-5 w-5 mr-3", route.color)} />
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
            <FreeCounter
                apiLimitCount={apiLimitCount}
                isPro={isPro}
            />
        </div>
    )
}

export default Sidebar