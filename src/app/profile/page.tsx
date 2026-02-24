import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Package, MapPin, LogOut, Heart } from "lucide-react"

export default async function ProfilePage() {
    // In a real app we'd fetch the session. For layout display we mock it if empty so we don't block the demo.
    let session = await getServerSession()

    // MOCK DATA for purely visual purposes if no database data is seeded yet
    const user = session?.user || {
        name: "Alexandre Dupont",
        email: "alexandre@example.com",
        role: "CUSTOMER"
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Sidebar */}
                    <aside className="w-full md:w-64 shrink-0">
                        <div className="bg-primary/5 p-6 mb-8 border border-primary/10">
                            <div className="h-16 w-16 bg-primary text-secondary rounded-full flex items-center justify-center font-serif text-2xl mb-4">
                                {user.name?.[0] || 'U'}
                            </div>
                            <h2 className="font-serif text-xl font-bold text-primary">{user.name}</h2>
                            <p className="text-sm text-primary/60 mb-1">{user.email}</p>
                            {(user as any).role === "ADMIN" && (
                                <span className="inline-block bg-accent text-primary text-[10px] uppercase tracking-widest px-2 py-1 font-bold mt-2">Quản Trị</span>
                            )}
                        </div>

                        <nav className="space-y-1">
                            <a href="/profile" className="flex items-center gap-3 px-4 py-3 bg-primary text-secondary text-sm font-medium uppercase tracking-widest">
                                <Package className="h-4 w-4" /> Đơn Hàng
                            </a>
                            <a href="/profile" className="flex items-center gap-3 px-4 py-3 text-primary/70 hover:bg-primary/5 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest">
                                <MapPin className="h-4 w-4" /> Địa Chỉ
                            </a>
                            <a href="/profile" className="flex items-center gap-3 px-4 py-3 text-primary/70 hover:bg-primary/5 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest">
                                <Heart className="h-4 w-4" /> Danh Sách Yêu Thích
                            </a>
                            {(user as any).role === "ADMIN" && (
                                <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-accent hover:bg-primary/5 transition-colors text-sm font-bold uppercase tracking-widest">
                                    Bảng Điều Khiển
                                </Link>
                            )}
                            <a href="/" className="flex items-center gap-3 px-4 py-3 text-red-600/70 hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium uppercase tracking-widest mt-8 border-t border-primary/10">
                                <LogOut className="h-4 w-4" /> Đăng Xuất
                            </a>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <h1 className="font-serif text-3xl font-bold tracking-tight text-primary border-b border-primary/10 pb-6 mb-8">
                            Lịch Sử Đơn Hàng
                        </h1>

                        {/* Mock Order */}
                        <div className="border border-primary/10 bg-white mb-6">
                            <div className="bg-primary/5 px-6 py-4 flex flex-wrap justify-between items-center border-b border-primary/10">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/50 mb-1">Ngày Đặt</p>
                                    <p className="text-sm font-medium text-primary">12 Tháng 10, 2023</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/50 mb-1">Tổng Tiền</p>
                                    <p className="text-sm font-medium text-primary">$490.00</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/50 mb-1">Đơn #</p>
                                    <p className="text-sm font-medium text-primary">ORD-98234-A</p>
                                </div>
                                <div>
                                    <Button variant="outline" size="sm" className="h-8 text-[10px] px-3 uppercase tracking-widest">Xem Chi Tiết</Button>
                                </div>
                            </div>

                            <div className="p-6 flex items-center justify-between">
                                <div className="flex gap-6 items-center">
                                    <div className="h-20 w-16 bg-[#f9f9f9] flex items-center justify-center border border-primary/10">
                                        <span className="font-serif text-[8px] uppercase">Maison</span>
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-medium text-primary">Élégance N°1 & Oud Mystique</h3>
                                        <p className="text-xs text-primary/60 mt-1">2 sản phẩm</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block border border-green-200 bg-green-50 text-green-700 text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                                        Đã Giao
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center py-12">
                            <Button variant="outline" className="uppercase tracking-widest text-xs">Tải Thêm Đơn Hàng</Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
