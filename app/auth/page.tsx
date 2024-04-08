import About from "@/components/about";
import Auth from "@/components/auth";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function auth() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
       */}
      <Auth />

    </main>
  );
}
