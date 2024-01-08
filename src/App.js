import './Components/Home'
import './App.css';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Animation from './Components/Animation';
import About from './Components/About';
import Education from './Components/Education';
import Skill from './Components/Skill';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Element} from 'react-scroll';
function App() {
  return (
      <>    
      <Animation/>
      <Sidebar/>
      <main className='main'>
        
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="education"><Education /></Element>
      <Element name="skills"><Skill /></Element>
      <Element name="projects"><Project /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
      </main>
      
      </>
       
  );
}

export default App;
