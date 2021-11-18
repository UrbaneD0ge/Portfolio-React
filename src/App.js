import './App.css';
import AboutMe from './components/aboutMe';
import Work from './components/Work';
import { useState } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderPage = () => {
    if (currentSection === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentSection === 'Work') {
      return <Work />;
    }
  }

  return (
    <div className="App">
      <nav>
          <header>
              <h1>Kipling C. Dunlap</h1>
          </header>
          <ul className="right">
              <li><button className="btn" onClick={() => {setCurrentSection('AboutMe')}}>About Me</button></li>
              <li><button className="btn" onClick={() => {setCurrentSection('Work')}}>Work</button></li>
              <li><a className="btn" href="https://docs.google.com/document/d/1vkpMSKmEacOYjhZEVyZuvSriz0JI9MmWvxPNrwSwGog/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
      </nav>
      <img src="./assets/simit cover.jpg" alt="cover" id="cover"/>
      {renderPage()}
    </div>
  );
}

export default App;
