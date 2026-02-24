"use client"

import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react"
import { useCart } from "@/store/useCart"
import { useState, use } from "react"
import { ProductViewer3D } from "@/components/ui/product-viewer-3d"

import { products } from "@/lib/products"

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const resolvedParams = use(params);
    const productId = resolvedParams.id;
    const { addItem } = useCart()
    const [selectedSize, setSelectedSize] = useState<number>(50)
    const [activeModel, setActiveModel] = useState<'BOTTLE' | 'BOX'>('BOTTLE')

    const product = products.find(p => p.id === productId)

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Sản phẩm không tồn tại</h1>
                    <Link href="/products" className="text-accent hover:underline">Quay lại danh sách</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />

            <main className="flex-1">
                <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
                    {/* Breadcrumbs */}
                    <nav className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 mb-16 flex gap-4 items-center">
                        <Link href="/" className="hover:text-primary transition-colors">Yuh</Link>
                        <span className="h-px w-4 bg-primary/20" />
                        <Link href="/products" className="hover:text-primary transition-colors">Nước Hoa</Link>
                        <span className="h-px w-4 bg-primary/20" />
                        <span className="text-primary tracking-[0.3em]">{product.name}</span>
                    </nav>

                    <div className="flex flex-col max-w-6xl mx-auto gap-12 lg:gap-20">
                        {/* 3D Model Gallery - Top Center */}
                        <div className="w-full h-[70vh] relative">
                            {/* 3D Model Viewer */}
                            <ProductViewer3D modelUrl={activeModel === 'BOX' && product.boxModelUrl ? product.boxModelUrl : product.modelUrl} />

                            {/* Model Switcher */}
                            {product.boxModelUrl && (
                                <div className="flex justify-center gap-4 mt-2">
                                    <button
                                        onClick={() => setActiveModel('BOTTLE')}
                                        className={`text-[9px] uppercase font-bold tracking-[0.2em] px-8 py-4 border transition-all duration-300 ${activeModel === 'BOTTLE' ? 'border-primary bg-primary text-secondary' : 'border-primary/20 text-primary/60 hover:text-primary hover:border-primary/40'}`}
                                    >
                                        Chai Nước Hoa
                                    </button>
                                    <button
                                        onClick={() => setActiveModel('BOX')}
                                        className={`text-[9px] uppercase font-bold tracking-[0.2em] px-8 py-4 border transition-all duration-300 ${activeModel === 'BOX' ? 'border-primary bg-primary text-secondary' : 'border-primary/20 text-primary/60 hover:text-primary hover:border-primary/40'}`}
                                    >
                                        Hộp Đựng
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Product Info - Bottom Center */}
                        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 w-full">
                            <h1 className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-primary mb-4 text-balance">
                                {product.name}
                            </h1>
                            <p className="text-sm text-primary/50 font-sans tracking-[0.3em] uppercase mb-8 font-bold">bởi {product.brand}</p>

                            <div className="flex items-center gap-1 text-accent mb-8">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="h-3 w-3 fill-current" />
                                ))}
                                <span className="text-[10px] text-primary/40 ml-4 uppercase tracking-[0.2em] font-bold">124 Đánh Giá</span>
                            </div>

                            <p className="text-3xl font-serif text-primary mb-12">${product.price.toFixed(2)}</p>

                            <div className="space-y-8 mb-12">
                                <p className="text-sm leading-[2] text-primary/70 font-light text-balance">
                                    {product.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-primary/10">
                                    <div>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/40 block mb-2">Hương Đầu</span>
                                        <span className="text-[12px] font-medium text-primary leading-relaxed inline-block">{product.topNotes}</span>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/40 block mb-2">Hương Giữa</span>
                                        <span className="text-[12px] font-medium text-primary leading-relaxed inline-block">{product.middleNotes}</span>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/40 block mb-2">Hương Cuối</span>
                                        <span className="text-[12px] font-medium text-primary leading-relaxed inline-block">{product.baseNotes}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-primary/10 my-10" />

                            {/* Size Selector */}
                            <div className="mb-10 w-full flex flex-col items-center">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 block mb-6">Dung Tích</span>
                                <div className="flex justify-center gap-4">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`h-14 w-24 border text-xs font-bold tracking-[0.1em] transition-all duration-300 ${selectedSize === size
                                                ? "border-primary bg-primary text-secondary"
                                                : "border-primary/20 bg-transparent text-primary hover:border-primary hover:bg-primary/5"
                                                }`}
                                        >
                                            {size} ml
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="w-full max-w-md h-16 mb-12 flex items-center justify-center gap-3 bg-primary text-secondary hover:bg-accent hover:text-primary transition-colors duration-500 font-bold tracking-[0.2em] uppercase text-xs rounded-none"
                                onClick={() => {
                                    addItem({
                                        id: `${product.id}-${selectedSize}`,
                                        productId: product.id,
                                        name: product.name,
                                        price: product.price,
                                        size: selectedSize,
                                        quantity: 1,
                                    })
                                }}
                            >
                                <ShoppingBag className="h-4 w-4" />
                                Thêm Vào Giỏ
                            </Button>

                            <div className="grid grid-cols-2 gap-8 text-[9px] tracking-[0.2em] font-bold text-primary/50 uppercase border-t border-primary/10 pt-10 w-full mb-12">
                                <div className="flex flex-col items-center gap-3">
                                    <Truck className="h-5 w-5 text-accent" />
                                    Giao Hàng Hỏa Tốc
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <ShieldCheck className="h-5 w-5 text-accent" />
                                    Bảo Đảm Chính Hãng
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
