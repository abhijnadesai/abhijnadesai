import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Header from "./components/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* Header section */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Projects section */}
      <Projects />

      {/* About section */}
      <About />
      
      {/* Skills section */}
      <Skills />

      {/* Contact section */}
      <Contact />

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default App;
