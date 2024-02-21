import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './style/mediaqueries.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import './style/base.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/mkm" element={<Landing />} />
          <Route path="/o-nama" element={<AboutUs />} />
          <Route path="/usluge" element={<Services />} />
          <Route path="/projekti" element={<Projects />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
