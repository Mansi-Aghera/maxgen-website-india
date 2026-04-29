import PortfolioHero from "@/sections/portfolio/Hero"
import PortfolioGrid from "@/sections/portfolio/PortfolioGrid"

export const metadata = {
  alternates: {
    canonical: "https://www.maxgentechnologies.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  )
}