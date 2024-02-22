import Contact from "@/components/Contact"
import HeroSection from "@/components/HeroSection"
import PortfolioSection from "@/components/PortfolioSection"
import Review from "@/components/Review"
import SkillSection from "@/components/SkillSection"
import TypesOfWork from "@/components/TypesOfWork"


function Home() {
  return (
    <div>
        <HeroSection />
        <TypesOfWork />
        <PortfolioSection />
        <SkillSection />
        <Review />
        <Contact />
    </div>
  )
}

export default Home