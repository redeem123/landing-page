import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-primary/10 bg-primary text-secondary">
            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl tracking-wider uppercase">Maison de Parfum</h3>
                        <p className="text-sm text-secondary/70 leading-relaxed font-light">
                            Nước hoa Pháp chính hãng được chế tác bởi các nghệ nhân hàng đầu. Khám phá hương thơm đặc trưng của bạn.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-wider mb-6 text-accent">Cửa Hàng</h4>
                        <ul className="space-y-3 text-sm font-light text-secondary/80">
                            <li><Link href="/products?category=WOMEN" className="hover:text-accent transition-colors">Nước Hoa Nữ</Link></li>
                            <li><Link href="/products?category=MEN" className="hover:text-accent transition-colors">Nước Hoa Nam</Link></li>
                            <li><Link href="/products?category=NICHE" className="hover:text-accent transition-colors">Bộ Sưu Tập Độc Bản</Link></li>
                            <li><Link href="/products?category=GIFT_SET" className="hover:text-accent transition-colors">Bộ Quà Tặng</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-wider mb-6 text-accent">Về Chúng Tôi</h4>
                        <ul className="space-y-3 text-sm font-light text-secondary/80">
                            <li><Link href="/about" className="hover:text-accent transition-colors">Câu Chuyện</Link></li>
                            <li><Link href="/stores" className="hover:text-accent transition-colors">Cửa Hàng</Link></li>
                            <li><Link href="/sustainability" className="hover:text-accent transition-colors">Sự Bền Vững</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Liên Hệ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-wider mb-6 text-accent">Nhận Bản Tin</h4>
                        <p className="text-sm text-secondary/70 mb-4 font-light">
                            Đăng ký để nhận thông tin cập nhật, ưu đãi độc quyền và nhiều hơn thế.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full bg-transparent border-b border-secondary/30 px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                            />
                            <button
                                type="submit"
                                className="ml-2 uppercase text-xs font-bold tracking-wider text-accent hover:text-accent-light transition-colors whitespace-nowrap"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/50 font-light">
                    <p>© {new Date().getFullYear()} Maison de Parfum. Đóng dấu bản quyền.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-secondary">Bảo Mật</Link>
                        <Link href="/terms" className="hover:text-secondary">Điều Khoản</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
