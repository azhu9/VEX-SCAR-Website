import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Volunteering from './pages/Volunteering';
import Test from './pages/Test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/volunteering" element={<Volunteering/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;