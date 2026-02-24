import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 md:px-8 max-w-4xl pt-32">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-primary mb-8 text-center">Câu Chuyện Của Chúng Tôi</h1>
                <div className="h-px w-24 bg-accent mx-auto mb-12" />

                <div className="space-y-8 text-primary/80 leading-relaxed font-light">
                    <p className="text-lg">
                        Maison de Parfum được thành lập với một tầm nhìn duy nhất: mang nghệ thuật chế tác nước hoa Pháp đích thực đến với những người sành điệu trên toàn thế giới.
                    </p>
                    <p>
                        Mỗi mùi hương trong bộ sưu tập của chúng tôi đều được chế tác thủ công bằng cách sử dụng các nguyên liệu thô tinh khiết nhất có nguồn gốc từ Grasse, thủ phủ nước hoa của thế giới. Các nhà chế tác nước hoa bậc thầy của chúng tôi dành hàng tháng trời để hoàn thiện từng công thức, đảm bảo mọi giọt nước hoa đều kể một câu chuyện về sự thanh lịch, đam mê và di sản.
                    </p>
                    <p>
                        Chúng tôi tin rằng nước hoa không chỉ là một mùi hương; nó là một phần mở rộng trong tính cách của bạn, một dấu ấn vô hình đọng lại trong trí nhớ rất lâu sau khi bạn rời đi.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
