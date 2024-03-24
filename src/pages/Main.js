import Header from './../mainComp/Header';
import First from './../mainComp/First';
import AboutMe from '../mainComp/AboutMe';
import Skills from '../mainComp/Skills';
import Projects from '../mainComp/Projects';
import SourceCode from '../mainComp/SourceCode';
import Contact from '../mainComp/Contact';

function Main() {
  return (
    <div className="main_container">
      <Header />
      <First />
      <AboutMe />
      <Skills />
      <Projects />
      <SourceCode />
      <Contact />
    </div>
  );
}

export default Main;
