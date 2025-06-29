import React from 'react';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        
        <AnimatedSection>
          <Education />
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="projects-intro">
            <h3>💡 Hover over project cards to explore documentation!</h3>
          </div>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;