import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Privacy from './pages/Privacy';

import Jobs from './pages/Jobs';

function App() {
  return (
    <>
   <BrowserRouter basename="/SDWOT-clone">
      <Routes>
     

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/signin" element={<Signin />} />
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
