import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/ProjectShowcase";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
