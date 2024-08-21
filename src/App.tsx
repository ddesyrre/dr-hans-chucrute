import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre';
import Doencas from './pages/doencas/Doencas';
import Clinica from './pages/clinica/Clinica';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] space-y-16 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/doencas' element={<Doencas />} />
            <Route path='/clinica' element={<Clinica />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  );

}

export default App