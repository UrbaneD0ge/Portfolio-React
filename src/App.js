import './App.css';
import AboutMe from './components/aboutMe';
import Work from './components/work';
import { useState } from 'react';

function App() {
  const [currentSection, getCurrentSection] = useState(AboutMe);

  return (
    <body className="App">
      <nav>
          <header>
              <h1>Kipling C. Dunlap</h1>
          </header>
          <ul class="right">
              <li><a href={getCurrentSection(AboutMe)}>About Me</a></li>
              <li><a href="#Work">Work</a></li>
              <li><a href="#ContactMe">Contact Me</a></li>
              <li><a href="https://docs.google.com/document/d/1vkpMSKmEacOYjhZEVyZuvSriz0JI9MmWvxPNrwSwGog/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
      </nav>
      <img src="./assets/simit cover.jpg" alt="cover" id="cover"/>
      <getCurrentSection currentSection={AboutMe} getCurrentSection={getCurrentSection} />
    </body>
  );
}

export default App;
