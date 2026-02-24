"use client"

import Link from "next/link"
import { ShoppingBag, User, Search, Menu } from "lucide-react"
import { useCart } from "@/store/useCart"
import { useEffect, useState } from "react"

export function Navbar() {
    const { items } = useCart()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const itemCount = items.reduce((total, item) => total + item.quantity, 0)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/5 bg-background/60 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
                {/* Mobile menu */}
                <button className="md:hidden text-primary/70 hover:text-primary transition-colors">
                    <Menu className="h-5 w-5" />
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-serif text-2xl font-normal tracking-[0.15em] uppercase text-primary group-hover:opacity-80 transition-opacity">
                        Maison <span className="text-accent italic tracking-normal ml-1">de</span> Parfum
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-12 text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70">
                    <Link href="/products?category=WOMEN" className="transition-all duration-300 hover:text-accent hover:tracking-[0.3em]">
                        Nữ
                    </Link>
                    <Link href="/products?category=MEN" className="transition-all duration-300 hover:text-accent hover:tracking-[0.3em]">
                        Nam
                    </Link>
                    <Link href="/products?category=NICHE" className="transition-all duration-300 hover:text-accent hover:tracking-[0.3em]">
                        Độc Bản
                    </Link>
                    <Link href="/products?category=GIFT_SET" className="transition-all duration-300 hover:text-accent hover:tracking-[0.3em]">
                        Quà Tặng
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6 text-primary/70">
                    <button className="hidden sm:flex transition-all hover:text-primary hover:scale-110">
                        <Search className="h-4 w-4 stroke-[1.5]" />
                    </button>
                    <Link href="/profile" className="transition-all hover:text-primary hover:scale-110">
                        <User className="h-4 w-4 stroke-[1.5]" />
                    </Link>
                    <Link href="/cart" className="transition-all hover:text-primary hover:scale-110 relative group">
                        <ShoppingBag className="h-4 w-4 stroke-[1.5]" />
                        {isMounted && itemCount > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] text-primary font-bold shadow-sm group-hover:scale-110 transition-transform">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}
