import './styles/App.css'
import './styles/theme.css'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutMe from './pages/AboutMe/AboutMe';
import MyExperience from './pages/MyExperience/MyExperience';
import MySkills from './pages/MySkills/MySkills';
import Portifolio from './pages/Portifolio/Portifolio';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/SobreMim' element={<AboutMe />} />
          <Route path='/Experiencia' element={<MyExperience />} />
          <Route path='/Habilidades' element={<MySkills />} />
          <Route path='/Portifolio' element={<Portifolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
