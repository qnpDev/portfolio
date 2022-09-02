import "aos/dist/aos.css"
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Static from './components'
import Project from './components/project'
import About from './components/about';
import Contact from './components/contact';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Static/>}>
        <Route index element={<Home/>}/>
        <Route path='projects/*' element={<Project/>}/>
        <Route path='about/*' element={<About/>}/>
        <Route path='contact/*' element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
