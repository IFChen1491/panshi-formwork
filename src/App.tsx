import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Platform from './pages/Platform';
import Technology from './pages/Technology';
import ESG from './pages/ESG';
import Projects from './pages/Projects';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // 初始化滾動顯示動畫
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/esg" element={<ESG />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
