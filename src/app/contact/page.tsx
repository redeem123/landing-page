import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 md:px-8 max-w-4xl pt-32">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-primary mb-8 text-center">Liên Hệ</h1>
                <div className="h-px w-24 bg-accent mx-auto mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-serif text-2xl font-bold text-primary mb-6">Dịch vụ khách hàng</h2>
                        <div className="space-y-4 text-primary/80 font-light">
                            <p><strong>Email:</strong> support@maisondeparfum.com</p>
                            <p><strong>Điện thoại:</strong> +33 1 23 45 67 89</p>
                            <p><strong>Giờ làm việc:</strong> Thứ Hai - Thứ Sáu, 9:00 SA - 6:00 CH (CET)</p>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Tên của bạn</label>
                            <input type="text" className="w-full border border-primary/20 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Email</label>
                            <input type="email" className="w-full border border-primary/20 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Tin nhắn</label>
                            <textarea rows={4} className="w-full border border-primary/20 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"></textarea>
                        </div>
                        <button type="button" className="w-full bg-primary text-secondary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors">
                            Gửi Tin Nhắn
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
