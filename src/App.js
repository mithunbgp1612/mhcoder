import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BannerTop from './components/navbar/BannerTop';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';
import AllProject from './components/projectpage/AllProject';
import Contact from './components/Contact';
import ProgrammingPage from './components/TutorialPage/ProgrammingPage';
import TutorialPage from './components/TutorialPage/TutorialPage';
import InterviewPage from './components/TutorialPage/InterviewPage';
import RoadmapPage from './components/TutorialPage/RoadmapPage';

function App() {
  return (
   <BrowserRouter>
   <BannerTop/>
   <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/all-project' element={<AllProject/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/tutorialPage' element={<ProgrammingPage/>}/>
      <Route path="/tutorials" element={<TutorialPage />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
