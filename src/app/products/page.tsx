import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { products } from "@/lib/products"
import { ProductViewer3D } from "@/components/ui/product-viewer-3d"

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const p = await searchParams;
    const categoryFilter = p.category as string | undefined

    // Product filtering
    const filteredProducts = categoryFilter
        ? products.filter(prod => prod.category === categoryFilter)
        : products

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-8 py-12">
                <header className="mb-12 text-center">
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">
                        {categoryFilter === "WOMEN" ? "Bộ Sưu Tập Nữ" : categoryFilter === "MEN" ? "Bộ Sưu Tập Nam" : categoryFilter === "NICHE" ? "Bộ Sưu Tập Độc Bản" : categoryFilter === "GIFT_SET" ? "Bộ Quà Tặng" : "Tất Cả Hương Thơm"}
                    </h1>
                    <p className="mt-4 text-primary/60 font-light max-w-2xl mx-auto">
                        Khám phá bộ sưu tập nước hoa cao cấp được tuyển chọn tỉ mỉ của chúng tôi.
                        Lọc theo nhóm hương, nồng độ và thương hiệu để tìm ra mùi hương đặc trưng của bạn.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 shrink-0 space-y-8">
                        <div>
                            <h3 className="font-serif text-lg font-semibold mb-4 text-primary border-b border-primary/10 pb-2">Danh mục</h3>
                            <ul className="space-y-2 text-sm text-primary/70">
                                <li><Link href="/products" className={!categoryFilter ? "font-bold text-accent" : "hover:text-accent"}>Tất cả</Link></li>
                                <li><Link href="/products?category=WOMEN" className={categoryFilter === "WOMEN" ? "font-bold text-accent" : "hover:text-accent"}>Nước Hoa Nữ</Link></li>
                                <li><Link href="/products?category=MEN" className={categoryFilter === "MEN" ? "font-bold text-accent" : "hover:text-accent"}>Nước Hoa Nam</Link></li>
                                <li><Link href="/products?category=UNISEX" className={categoryFilter === "UNISEX" ? "font-bold text-accent" : "hover:text-accent"}>Unisex</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-serif text-lg font-semibold mb-4 text-primary border-b border-primary/10 pb-2">Nhóm Hương</h3>
                            <ul className="space-y-2 text-sm text-primary/70">
                                <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-accent" /> Hương Hoa (Floral)</label></li>
                                <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-accent" /> Hương Gỗ (Woody)</label></li>
                                <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-accent" /> Hương Phương Đông (Oriental)</label></li>
                                <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-accent" /> Hương Tươi Mát (Fresh)</label></li>
                            </ul>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-primary/60">Hiển thị {filteredProducts.length} kết quả</span>
                            <select className="border border-primary/20 bg-transparent text-sm p-2 outline-none focus:border-accent">
                                <option>Sắp xếp: Nổi bật</option>
                                <option>Giá: Thấp đến Cao</option>
                                <option>Giá: Cao đến Thấp</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <Link href={`/products/${product.id}`} key={product.id}>
                                    <Card className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-md transition-all bg-white">
                                        <div className="aspect-[4/5] w-full bg-[#f9f9f9] flex justify-center items-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100 z-10 pointer-events-none" />
                                            <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                                                <ProductViewer3D modelUrl={product.modelUrl} listMode={true} />
                                            </div>
                                        </div>
                                        <CardContent className="p-5 text-center">
                                            <h3 className="font-serif text-lg font-medium text-primary mb-1 group-hover:text-accent transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-primary/50 font-light mb-2">{product.scentFamily} • Eau de Parfum</p>
                                            <p className="text-primary font-medium">${product.price.toFixed(2)}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
