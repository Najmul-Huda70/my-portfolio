import About from "@/components/About";
import AchievementSection from "@/components/AchievementSection";
import Hero from "@/components/Horo";
import ProjectSection from "@/components/Projects";
import SkillsSection from "@/components/techStack";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <ProjectSection />
      <AchievementSection />
      <About />
    </>
  );
}
