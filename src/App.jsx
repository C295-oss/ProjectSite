import NavBar from './components/nav_bar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Projects from './components/project.jsx';
import Contact from './components/contact.jsx';

function App() {

  const componentIDs = ["Intro", "About", "Projects", "Contact"]

  return (
    <>

      <NavBar idList={componentIDs}  />
      <Intro id={'Intro'}/>
      <About id={'About'} />
      <Projects id={'Projects'} />      
      <Contact id={'Contact'} />

    </>
  )
}

export default App
