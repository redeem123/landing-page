import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function StoresPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 md:px-8 max-w-5xl pt-32">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-primary mb-8 text-center">Cửa Hàng Của Chúng Tôi</h1>
                <div className="h-px w-24 bg-accent mx-auto mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Paris Flagship */}
                    <div className="border border-primary/10 bg-white p-8">
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">Paris Flagship</h3>
                        <p className="text-accent text-[10px] uppercase font-bold tracking-widest mb-4">Trụ Sở Chính</p>
                        <div className="space-y-2 text-sm text-primary/70 font-light mb-6">
                            <p>15 Rue de la Paix</p>
                            <p>75002 Paris, Pháp</p>
                            <p>+33 1 42 61 12 34</p>
                        </div>
                        <button className="text-xs uppercase font-bold tracking-widest border-b border-primary hover:text-accent hover:border-accent transition-colors pb-1">
                            Xem Bản Đồ
                        </button>
                    </div>

                    {/* London Boutique */}
                    <div className="border border-primary/10 bg-white p-8">
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">London Boutique</h3>
                        <p className="text-transparent text-[10px] uppercase font-bold tracking-widest mb-4 invisible">-</p>
                        <div className="space-y-2 text-sm text-primary/70 font-light mb-6">
                            <p>45 New Bond Street</p>
                            <p>London W1S 2SQ, Vương Quốc Anh</p>
                            <p>+44 20 7123 4567</p>
                        </div>
                        <button className="text-xs uppercase font-bold tracking-widest border-b border-primary hover:text-accent hover:border-accent transition-colors pb-1">
                            Xem Bản Đồ
                        </button>
                    </div>

                    {/* New York Studio */}
                    <div className="border border-primary/10 bg-white p-8">
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">New York Studio</h3>
                        <p className="text-transparent text-[10px] uppercase font-bold tracking-widest mb-4 invisible">-</p>
                        <div className="space-y-2 text-sm text-primary/70 font-light mb-6">
                            <p>5th Avenue, 12th Floor</p>
                            <p>New York, NY 10022, Hoa Kỳ</p>
                            <p>+1 212-555-0199</p>
                        </div>
                        <button className="text-xs uppercase font-bold tracking-widest border-b border-primary hover:text-accent hover:border-accent transition-colors pb-1">
                            Xem Bản Đồ
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
