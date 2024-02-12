import style from './App.module.css'
import Welcome from "./components/Welcome/Welcome";
import {Navbar} from './components/Navbar/Navbar';
import About from './components/About/About';
// import { Contact } from "./components/Contact/Contact";
import Projects  from "./components/Projects/Projects";
import logo from './assets/nemeslogo.png'
import me from './assets/portfolio2.jpeg'
import css from './assets/css.png'
import figma from './assets/figma.png'
import html from './assets/html.png'
import js from './assets/js.png'
import react from './assets/react.png'




function App() {

  return (
    <>
    <div className={style.welcome} >
     <Navbar logo={logo}/>
     <Welcome/>
    </div>
    <div className={style.about}>
     <About me={me} css={css} figma={figma} html={html} js={js} react={react}/>
    </div>
    {/* <Projects/> */}

    </>
  )
}

export default App