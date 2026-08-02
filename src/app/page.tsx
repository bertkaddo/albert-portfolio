import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="relative overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
