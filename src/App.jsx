import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Educational from './pages/Educational';
import EducationalDetail from './pages/EducationalDetail';

function App() {
  return (
    <Router basename='/zavrsni_aplikacija'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="educational" element={<Educational />} />
          <Route path="educational/:id" element={<EducationalDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;