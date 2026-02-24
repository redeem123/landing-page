"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        // In a real app, you would have a register flow too. This mocks signing in.
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if (res?.error) {
            setError("Thông tin đăng nhập không hợp lệ. Vui lòng thử lại.")
        } else {
            router.push("/profile")
            router.refresh()
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />

            <main className="flex-1 flex items-center justify-center py-20 px-4">
                <div className="w-full max-w-md bg-white border border-primary/10 p-8 shadow-sm rounded-sm">
                    <div className="text-center mb-8">
                        <h1 className="font-serif text-3xl font-bold text-primary tracking-tight mb-2">Chào mừng trở lại</h1>
                        <p className="text-primary/60 text-sm">Đăng nhập vào tài khoản Maison de Parfum của bạn.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 border border-red-100 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Địa chỉ Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-b border-primary/30 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent text-primary"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Mật khẩu</label>
                                <a href="/contact" className="flex text-[10px] text-primary/50 hover:text-primary transition-colors uppercase tracking-widest">Quên?</a>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border-b border-primary/30 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent text-primary"
                                required
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full uppercase tracking-widest font-bold mt-8">
                            Đăng Nhập
                        </Button>

                        <p className="text-center text-xs text-primary/60 mt-6 font-light">
                            Chưa có tài khoản? <a href="/login" className="font-bold border-b border-primary text-primary hover:text-accent hover:border-accent transition-colors pb-0.5 ml-1">Tạo tại đây</a>
                        </p>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    )
}
