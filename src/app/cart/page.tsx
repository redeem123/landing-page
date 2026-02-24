"use client"

import { useCart } from "@/store/useCart"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
    const { items, removeItem, updateQuantity, getTotal } = useCart()

    const handleCheckout = async () => {
        // Basic stripe checkout integration would call /api/checkout here
        alert("Proceeding to secure checkout via Stripe...")
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-8 py-16">
                <h1 className="font-serif text-4xl font-bold tracking-tight text-primary mb-10">Giỏ Hàng Của Bạn</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-primary/20 rounded-lg bg-primary/5">
                        <h2 className="text-xl font-serif mb-4 text-primary">Giỏ hàng của bạn đang trống</h2>
                        <p className="text-primary/60 mb-8 max-w-md mx-auto">
                            Khám phá bộ sưu tập nước hoa Pháp chính hãng độc quyền của chúng tôi và tìm ra hương thơm đặc trưng của bạn.
                        </p>
                        <Link href="/products">
                            <Button size="lg" className="uppercase tracking-widest px-8">Tiếp Tục Mua Sắm</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Cart Items */}
                        <div className="flex-1 space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-6 border-b border-primary/10 pb-6">
                                    {/* Mock Image */}
                                    <div className="w-24 h-32 bg-[#f9f9f9] border border-primary/5 flex items-center justify-center shrink-0">
                                        <div className="h-16 w-8 rounded-t-xl bg-white border border-[#dedede] shadow-sm flex items-center justify-center">
                                            <span className="text-[6px] font-serif uppercase">M</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="font-serif font-medium text-lg text-primary">{item.name}</h3>
                                                <p className="text-sm text-primary/60">Eau de Parfum • {item.size}ml</p>
                                            </div>
                                            <p className="font-medium text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-primary/20 bg-transparent">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-primary/5 transition-colors"
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-primary/5 transition-colors"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-sm text-primary/50 hover:text-red-600 transition-colors uppercase tracking-widest flex items-center gap-1"
                                            >
                                                <Trash2 className="h-4 w-4" /> Xóa
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="w-full lg:w-96 shrink-0">
                            <div className="bg-primary/5 border border-primary/10 p-8">
                                <h2 className="font-serif text-2xl font-bold mb-6 text-primary border-b border-primary/10 pb-4">Tóm Tắt Đơn Hàng</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-sm text-primary/70">
                                        <span>Tổng phụ</span>
                                        <span>${getTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-primary/70">
                                        <span>Vận chuyển</span>
                                        <span>Miễn phí</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-primary/70">
                                        <span>Thuế</span>
                                        <span>Tính khi thanh toán</span>
                                    </div>
                                </div>

                                <div className="flex justify-between font-bold text-lg border-t border-primary/10 pt-4 mb-8 text-primary">
                                    <span>Tổng Ước Tính</span>
                                    <span>${getTotal().toFixed(2)}</span>
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full uppercase tracking-widest font-bold"
                                    onClick={handleCheckout}
                                >
                                    Thanh Toán An Toàn
                                </Button>

                                <p className="text-center mt-4 text-xs text-primary/50 flex items-center justify-center gap-2">
                                    <span>Secure transactions verified by</span>
                                    <span className="font-bold">stripe</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}
