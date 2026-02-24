import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 md:px-8 max-w-4xl pt-32">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-primary mb-8 text-center">Chính Sách Bảo Mật</h1>
                <div className="h-px w-24 bg-accent mx-auto mb-16" />

                <div className="space-y-8 text-sm text-primary/80 font-light leading-relaxed">
                    <p className="text-base italic mb-8">
                        Tại Maison de Parfum, chúng tôi coi trọng sự riêng tư của bạn và cam kết bảo vệ thông tin cá nhân mà bạn chia sẻ với chúng tôi.
                    </p>

                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">1. Thu Thập Thông Tin</h2>
                        <p>Chúng tôi thu thập thông tin cá nhân (như tên, địa chỉ email, địa chỉ giao hàng) khi bạn tạo tài khoản, đặt hàng, hoặc đăng ký nhận bản tin. Chúng tôi sử dụng các cookie để nâng cao trải nghiệm mua sắm của bạn trên website.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">2. Sử Dụng Thông Tin</h2>
                        <p>Thông tin của bạn được sử dụng để xử lý đơn hàng, quản lý tài khoản, liên lạc với bạn về các cập nhật mua sắm, và nếu bạn đồng ý, gửi cho bạn các thông tin, ưu đãi độc quyền về bộ sưu tập mới nhất.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">3. Chia Sẻ Thông Tin</h2>
                        <p>Chúng tôi tuyệt đối không bán hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba. Chúng tôi chỉ chia sẻ dữ liệu cần thiết với các đối tác dịch vụ đáng tin cậy (như đơn vị vận chuyển và xử lý thanh toán Stripe) để hoàn tất đơn hàng của bạn.</p>
                    </section>

                    <section>
                        <h2 className="font-serif text-xl font-bold text-primary mb-4">4. Bảo Mật</h2>
                        <p>Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn ngành (bao gồm mã hóa SSL) để bảo vệ dữ liệu của bạn khỏi việc truy cập, thay đổi hoặc phá hoại trái phép.</p>
                    </section>

                    <p className="mt-12 text-xs italic text-primary/50">Cập nhật lần cuối: 23 Tháng 2, 2026</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
