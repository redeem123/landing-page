import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function SustainabilityPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 md:px-8 max-w-4xl pt-32">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-primary mb-8 text-center">Sự Bền Vững</h1>
                <div className="h-px w-24 bg-accent mx-auto mb-16" />

                <div className="space-y-16">
                    <section className="text-center">
                        <h2 className="font-serif text-2xl font-bold text-primary mb-4">Cam Kết Với Thiên Nhiên</h2>
                        <p className="text-primary/70 font-light leading-relaxed">
                            Thiên nhiên là nguồn cảm hứng lớn nhất và là nhà cung cấp nguyên liệu quý giá nhất cho chúng tôi. Maison de Parfum cam kết bảo vệ môi trường thông qua các phương pháp canh tác sinh thái và quy trình sản xuất thân thiện.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 border border-primary/10">
                            <h3 className="font-serif text-xl font-bold text-accent mb-4">Nguyên Liệu Nguồn Gốc Đạo Đức</h3>
                            <p className="text-sm font-light text-primary/80 leading-relaxed">
                                Chúng tôi làm việc trực tiếp với nông dân tại Grasse và trên toàn cầu, đảm bảo thương mại công bằng và hỗ trợ cộng đồng làm vườn nhằm bảo vệ đa dạng sinh học của các loài hoa quý.
                            </p>
                        </div>
                        <div className="bg-white p-8 border border-primary/10">
                            <h3 className="font-serif text-xl font-bold text-accent mb-4">Bao Bì Có Thể Tái Chế</h3>
                            <p className="text-sm font-light text-primary/80 leading-relaxed">
                                100% hộp giấy của chúng tôi được làm từ giấy tái chế đạt chứng nhận FSC. Đầu phun sương có thể tháo rời, cho phép tái chế hoàn toàn hoặc đổ đầy lại chai thủy tinh cao cấp.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
