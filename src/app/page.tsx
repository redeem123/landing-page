"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"
import { ProductViewer3D } from "@/components/ui/product-viewer-3d"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  // Smooth parallax effect for the hero text
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-accent/30 selection:text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Cinematic Hero Section */}
        <section ref={targetRef} className="relative flex h-[95vh] w-full items-center justify-center overflow-hidden">
          {/* Deep immersive gradient mimicking studio lighting */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181817] via-[#2a2928] to-[#121110] z-0" />

          {/* Subtle noise/texture overlay for filmic quality */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />

          <motion.div
            style={{ y, opacity }}
            className="container relative z-10 mx-auto px-4 text-center md:px-8 mt-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-8 block text-[10px] font-bold uppercase tracking-[0.3em] text-accent/90"
            >
              Cộng Hưởng Sự Tinh Tế
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-8 font-serif text-6xl font-normal tracking-tight text-secondary sm:text-8xl md:text-9xl text-balance leading-[0.9]"
            >
              L'Essence de <br className="hidden sm:block" /> Paris
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.0 }}
              className="mx-auto mb-14 max-w-xl text-sm sm:text-base text-secondary/60 font-light leading-relaxed tracking-wide text-balance"
            >
              Khám phá bộ sưu tập nước hoa Pháp chính gốc độc quyền của chúng tôi.
              Được chế tác thủ công bởi các nghệ nhân nhằm khơi gợi cảm xúc, sự thanh lịch, và di sản vượt thời gian.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link href="/products?category=WOMEN">
                <Button size="lg" className="w-full sm:w-auto bg-accent text-primary hover:bg-secondary transition-all duration-500 rounded-none uppercase tracking-[0.2em] text-[11px] font-bold px-10 h-14">
                  Dành Cho Nàng
                </Button>
              </Link>
              <Link href="/products?category=MEN">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-secondary/30 text-secondary hover:bg-secondary hover:text-primary transition-all duration-500 shadow-none rounded-none uppercase tracking-[0.2em] text-[11px] font-bold px-10 h-14 backdrop-blur-sm">
                  Dành Cho Chàng
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-secondary/40 font-bold">Khám Phá</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-secondary/40 to-transparent" />
          </motion.div>
        </section>

        {/* Featured Fragrances - Editorial Layout */}
        <section className="py-32 bg-background relative z-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-24 text-center flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-bold mb-4 block">Tuyệt Tác Mùi Hương</span>
              <h2 className="font-serif text-4xl font-normal tracking-tight text-primary sm:text-5xl">
                Hương Thơm Đặc Trưng
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-y-20 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
              {[1].map((i) => (
                <Link href={i === 1 ? "/products/1" : `/products/mock-id-${i}`} key={i}>
                  <Card className="group cursor-pointer border-none shadow-none bg-transparent flex flex-col">
                    {/* Image Container with 3D Model */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f0eee9] mb-6">
                      {/* V2 Product Image Placeholder styling */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 z-20 pointer-events-none" />

                      {/* Interactive 3D Model specifically for the Aventus card */}
                      {i === 1 ? (
                        <div className="w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]">
                          <ProductViewer3D modelUrl="/models/aventus.glb" listMode={true} />
                        </div>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]">
                          {/* Fallback for other mock products */}
                          <div className="h-[60%] w-[45%] rounded-t-full rounded-b-sm border border-primary/10 shadow-xl bg-gradient-to-b from-white to-[#fcfcfc] flex flex-col items-center justify-center relative">
                            <div className="absolute top-[-10px] h-[15px] w-[30px] bg-gradient-to-r from-accent to-accent-light border border-accent/80 rounded-t-sm" />
                            <span className="font-serif text-[8px] uppercase tracking-widest text-primary/40 mb-1 scale-y-125">Maison</span>
                            <div className="h-px w-6 bg-accent/40 my-1" />
                            <span className="font-serif text-[7px] font-bold uppercase tracking-widest text-primary/50">N°{i}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Typography block */}
                    <CardContent className="p-0 text-center flex-1 flex flex-col">
                      <h3 className="font-serif text-xl font-normal text-primary mb-2 group-hover:text-accent transition-colors duration-500">
                        {i === 1 ? "Aventus" : `Bespoke N°${i}`}
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-primary/50 font-bold mb-4">Eau de Parfum</p>
                      <p className="text-sm text-primary font-medium tracking-wide mt-auto">${i === 1 ? 495 : 245 + (i * 10)}.00</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-24 text-center">
              <Link href="/products">
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-500 rounded-none uppercase tracking-[0.2em] text-[10px] font-bold px-12 h-14">
                  Xem Toàn Bộ Sưu Tập
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
