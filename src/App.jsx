import react from 'react'
import "./index.css";
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import Projects from './components/Projects';
import Qualification from './components/Qualification.';


function App() {
 

  return (
    <>
    <ToastContainer />
      <Nav/>
      <Header/>
      <About/>
      <Qualification/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
