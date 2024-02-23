import PortfolioSection from "@/components/PortfolioSection"
import SkillSection from "@/components/SkillSection"
import TypesOfWork from "@/components/TypesOfWork"


function Projects() {
  return (
    <div className="mt-[8dvh]">
        <TypesOfWork />
        <PortfolioSection />
        <SkillSection />
    </div>
  )
}

export default Projects