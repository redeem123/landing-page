import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 md:px-8 max-w-4xl pt-32">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-primary mb-8 text-center">Điều Khoản Dịch Vụ</h1>
                <div className="h-px w-24 bg-accent mx-auto mb-16" />

                <div className="space-y-8 text-sm text-primary/80 font-light leading-relaxed">
                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">1. Chấp Nhận Điều Khoản</h2>
                        <p>Bằng cách truy cập và sử dụng trang web Maison de Parfum, bạn đồng ý bị ràng buộc bởi các Điều Khoản Dịch Vụ này và tất cả các luật và quy định hiện hành.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">2. Sản Phẩm & Tính Chính Xác</h2>
                        <p>Chúng tôi cố gắng mô tả các sản phẩm nước hoa của mình một cách chính xác nhất có thể. Tuy nhiên, chúng tôi không đảm bảo rằng mô tả sản phẩm, hình ảnh 3D, hoặc các nội dung khác là hoàn toàn chính xác, đầy đủ, đáng tin cậy, cập nhật hoặc không có lỗi. Đặc biệt, màu sắc và cảm nhận mùi hương có thể khác nhau tùy thuộc vào thiết bị và đặc điểm cá nhân.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">3. Giá Cả & Thanh Toán</h2>
                        <p>Tất cả giá trị được niêm yết có thể thay đổi mà không cần thông báo trước. Thanh toán được xử lý một cách an toàn thông qua nền tảng thanh toán của bên thứ ba (Stripe). Chúng tôi không lưu trữ thông tin thẻ tín dụng của bạn trên máy chủ của chúng tôi.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">4. Chính Sách Hoàn Trả</h2>
                        <p>Vì lý do vệ sinh và bảo toàn chất lượng nước hoa cao cấp, chúng tôi chỉ chấp nhận đổi trả trong vòng 14 ngày kể từ ngày nhận hàng với điều kiện sản phẩm còn nguyên seal, chưa mở hộp và chưa sử dụng.</p>
                    </section>

                    <p className="mt-12 text-xs italic text-primary/50">Cập nhật lần cuối: 23 Tháng 2, 2026</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
