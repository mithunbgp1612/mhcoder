import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BannerTop from './components/navbar/BannerTop';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';

function App() {
  return (
   <BrowserRouter>
   <BannerTop/>
   <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
