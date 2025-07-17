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
      duration: 1200,   // 애니메이션 지속 시간(ms)
      once: true,      // 한 번만 실행
      offset: 300,     // 요소가 뷰포트 하단에서 300px 정도 올라왔을 때 애니메이션 시작
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
