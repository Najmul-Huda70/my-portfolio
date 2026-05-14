import About from "@/components/About";
import AchievementSection from "@/components/AchievementSection";
import Hero from "@/components/Horo";
import SkillsSection from "@/components/techStack";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <AchievementSection />
      <About />
    </>
  );
}
