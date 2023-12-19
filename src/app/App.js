import './App.css';
import LandingPage from '../pages/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from '../components/Navbar/Navbar.js';
import AboutPage from "../pages/AboutPage/AboutPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
        <div className={"app-container"}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default App;