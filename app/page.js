import HeroSection from "./components/herosection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-0 py-0">
      <NavBar/>
      <div className="container mx-auto px-12 py-14 ">
        <HeroSection/>
        <Achievements/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
    </main>
  )
}
