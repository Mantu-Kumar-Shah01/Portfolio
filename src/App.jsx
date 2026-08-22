import "./index.css";
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import SiteParticles from './components/SiteParticles';

function App() {
  return (
    <div className="relative w-full bg-[#CBD3DC]">
      <ToastContainer />
      
      {/* Small 3D Particle Dust Field Across Entire Site */}
      <SiteParticles />

      <Nav />
      <Header />
      <About />
      <Qualification />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
