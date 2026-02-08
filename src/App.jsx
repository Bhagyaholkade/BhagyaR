import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import AudioPlayer from './components/AudioPlayer/AudioPlayer';

function App() {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    // [SYNC_V2]: Vertical flow restored, horizontal locked.
  }, []);

  return (
    <div className="app">
      <Navbar />
      <AudioPlayer />
      <div className="horizontal-container" ref={scrollRef}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
