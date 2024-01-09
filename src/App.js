import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';
import Footer from './componentes/section/Footer';
import Background from './componentes/section/Background';

function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
      
    </div>
  );
}

export default App;
