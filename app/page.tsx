import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}
