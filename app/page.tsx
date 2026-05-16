import About from "@/components/About";
import AchievementSection from "@/components/AchievementSection";
import ContactSection from "@/components/Contact";
import Hero from "@/components/Horo";
import ProjectSection from "@/components/Projects";
import Qualification from "@/components/Qualification";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero /> <About />
      <SkillsSection />
      <Qualification />
      <ProjectSection />
      <AchievementSection />
      <ContactSection />
    </>
  );
}
