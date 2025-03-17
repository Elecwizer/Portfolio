import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Academics from './components/Academics';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//end of imports

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;