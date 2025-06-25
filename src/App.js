import { useEffect } from 'react';
import AOS from 'aos';
import MenuBar from './components/MenuBar';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Intro from './sections/Intro/Intro';
import Main from './sections/Main';
import Projects from './sections/Projects/Projects';
import TechStacks from './sections/TechStacks/TechStacks';
import 'aos/dist/aos.css';
import './styles/common.scss';

function App() {
  // 스크롤 애니메이션
  useEffect(() => {
    AOS.init({
      duration: 800,   // 애니메이션 지속 시간(ms)
      once: true,      // 한 번만 실행
    });
  }, []);

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
