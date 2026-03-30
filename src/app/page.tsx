import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Screenshots } from "@/components/sections/Screenshots"
import { Download } from "@/components/sections/Download"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <FAQ />
      <CTA />
    </>
  )
}
