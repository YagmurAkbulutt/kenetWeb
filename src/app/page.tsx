import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import DesignImplementation from "@/components/DesignImplementation";
import Licensing from "@/components/Licensing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <DesignImplementation />
        <Licensing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
