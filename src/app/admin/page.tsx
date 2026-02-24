import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Package, ShoppingCart, Settings } from "lucide-react"

export default function AdminDashboardPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-12">
                {/* Admin Sidebar */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="bg-primary/5 p-6 mb-8 border border-primary/10">
                        <span className="text-[10px] bg-accent px-2 py-1 font-bold text-primary tracking-widest uppercase mb-2 inline-block">Maison Quản Trị</span>
                        <h2 className="font-serif text-xl font-bold text-primary">Bảng Điều Khiển</h2>
                    </div>

                    <nav className="space-y-1 text-sm font-bold uppercase tracking-widest text-primary/70">
                        <a href="/admin" className="flex items-center gap-3 px-4 py-3 bg-primary text-secondary">
                            <LayoutDashboard className="h-4 w-4" /> Tổng Quan
                        </a>
                        <a href="/admin" className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
                            <Package className="h-4 w-4" /> Sản Phẩm
                        </a>
                        <a href="/admin" className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
                            <ShoppingCart className="h-4 w-4" /> Đơn Hàng
                        </a>
                        <a href="/admin" className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
                            <Users className="h-4 w-4" /> Khách Hàng
                        </a>
                        <a href="/admin" className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors border-t border-primary/10 mt-6">
                            <Settings className="h-4 w-4" /> Cài Đặt
                        </a>
                    </nav>
                </aside>

                {/* Dashboard Content */}
                <div className="flex-1">
                    <div className="flex justify-between items-end border-b border-primary/10 pb-6 mb-8">
                        <div>
                            <h1 className="font-serif text-3xl font-bold tracking-tight text-primary">Tổng Quan</h1>
                            <p className="text-sm text-primary/60 font-light mt-1">Chào mừng trở lại. Dưới đây là hoạt động hôm nay.</p>
                        </div>
                        <Button size="sm" className="uppercase tracking-widest">Thêm Sản Phẩm</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white border border-primary/10 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-primary/50">Tổng Doanh Thu</span>
                                <span className="text-green-600 text-xs font-bold">+12%</span>
                            </div>
                            <p className="text-3xl font-serif text-primary font-medium">$24,890.00</p>
                        </div>

                        <div className="bg-white border border-primary/10 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-primary/50">Đơn Hàng Đang Xử Lý</span>
                                <span className="text-primary text-xs font-bold">42 chờ</span>
                            </div>
                            <p className="text-3xl font-serif text-primary font-medium">156</p>
                        </div>

                        <div className="bg-white border border-primary/10 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-primary/50">Sản Phẩm Tồn Kho Thấp</span>
                                <span className="text-red-500 text-xs font-bold">Cần xác nhận</span>
                            </div>
                            <p className="text-3xl font-serif text-primary font-medium">8 <span className="text-sm text-primary/50 font-sans tracking-tight">sản phẩm</span></p>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-serif text-xl font-bold tracking-tight text-primary mb-6">Đơn Hàng Gần Đây</h2>
                        <div className="border border-primary/10 bg-white">
                            <table className="w-full text-left font-sans">
                                <thead>
                                    <tr className="bg-primary/5 text-[10px] text-primary/60 uppercase tracking-widest border-b border-primary/10">
                                        <th className="px-6 py-4 font-bold">Mã Đơn Hàng</th>
                                        <th className="px-6 py-4 font-bold">Khách Hàng</th>
                                        <th className="px-6 py-4 font-bold">Ngày</th>
                                        <th className="px-6 py-4 font-bold">Trạng Thái</th>
                                        <th className="px-6 py-4 font-bold text-right">Tổng Của Đơn</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-primary/5">
                                    {[
                                        { id: "#ORD-8921", cust: "Alex Dupont", date: "Oct 24, 2023", stat: "Pending", amt: "$450.00" },
                                        { id: "#ORD-8920", cust: "Chloe Martin", date: "Oct 23, 2023", stat: "Processing", amt: "$245.00" },
                                        { id: "#ORD-8919", cust: "Jean Bernard", date: "Oct 22, 2023", stat: "Shipped", amt: "$1,290.00" },
                                        { id: "#ORD-8918", cust: "Sophie Laurent", date: "Oct 20, 2023", stat: "Delivered", amt: "$320.00" }
                                    ].map(row => (
                                        <tr key={row.id} className="hover:bg-primary/5 transition-colors">
                                            <td className="px-6 py-4 font-medium text-primary">{row.id}</td>
                                            <td className="px-6 py-4 text-primary/80">{row.cust}</td>
                                            <td className="px-6 py-4 text-primary/60 text-xs">{row.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 ${row.stat === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    row.stat === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                        row.stat === 'Shipped' ? 'bg-purple-100 text-purple-700' :
                                                            'bg-green-100 text-green-700'
                                                    }`}>
                                                    {row.stat === 'Pending' ? 'Chờ Xử Lý' :
                                                        row.stat === 'Processing' ? 'Đang Xử Lý' :
                                                            row.stat === 'Shipped' ? 'Đang Giao Hàng' : 'Đã Giao'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-primary text-right">{row.amt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
