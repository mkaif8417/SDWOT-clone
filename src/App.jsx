import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Job from './pages/Job';
import Signin from './pages/Signin';
import Privacy from './pages/Privacy';
import Middle from './components/Middle';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/job" element={<Job />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      
    </>
  );
}

export default App;
