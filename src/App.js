import MenuBar from './component/MenuBar';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Intro from './sections/Intro/Intro';
import Main from './sections/Main';
import Projects from './sections/Projects/Projects';
import TechStacks from './sections/TechStacks/TechStacks';
import './styles/common.scss';

function App() {
  return (
    <>
      <Main/>
      <MenuBar/>
      <Intro/>
      <TechStacks/>
      <Projects/>
      <Education/>
      <Contact/>
    </>
  );
}

export default App;
