import AboutHero from "@/sections/about/Hero"
import Story from "@/sections/about/Story"
import AboutBlock from "@/sections/about/AboutBlock"
import { aboutBlocks } from "@/data/about"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />

      {aboutBlocks.map((block, i) => (
        <AboutBlock key={i} {...block} />
      ))}
    </>
  )
}