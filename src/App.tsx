import MainSection from "@sections/MainSection"
import ProjectsSection from "@sections/ProjectsSection"
import AboutSection from "@sections/AboutSection"
import CertificationSection from "@sections/CertificationSection"
import ContactSection from "@sections/ContactSection"

export default function App() {
  return (
    <>
      <div className="space-y-44 mt-8">
        <MainSection />
        <ProjectsSection />
        <AboutSection />
        <CertificationSection />
        <ContactSection />
      </div>
    </>
  )
}
