import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Timeline from "./components/timeline/Timeline";
import About from "./components/About";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Timeline />
      <Education />
      <Skills />
      <Portfolio />
      <About />
      {/* <Social /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
