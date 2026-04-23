import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Heart, Moon, Sun } from 'lucide-react';
import HomePage from './pages/Home';
import WorkPage from './pages/Work';
import ProjectsPage from './pages/Projects';
import BlogPage from './pages/Blog';
import SocialPage from './pages/Social';
import InterestsPage from './pages/Interests';

function Navbar({ isLightMode, toggleTheme }: { isLightMode: boolean; toggleTheme: () => void }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>
            Bharath Annamaneni
          </Link>
          <div className="nav-links">
            <Link to="/" className={isActive('/')}>About</Link>
            <Link to="/work" className={isActive('/work')}>Work</Link>
            <Link to="/interests" className={isActive('/interests')}>Interests</Link>
            <Link to="/projects" className={isActive('/projects')}>Projects</Link>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            <Link to="/social" className={isActive('/social')}>Social</Link>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {isLightMode ? <Moon size={16} color="#1e293b" fill="#1e293b" /> : <Sun size={16} color="#fbbf24" fill="#fbbf24" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode(!isLightMode);

  return (
    <Router>
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/interests" element={<InterestsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/social" element={<SocialPage />} />
        </Routes>
      </main>
      <footer>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Bharath Annamaneni</p>
          <p style={{ fontSize: '0.75rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Made with <Heart size={14} fill="#ef4444" color="#ef4444" /> using Google Gemini 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2px' }}>
              <path d="M12 0L14.5 7.5L24 10L14.5 12.5L12 24L9.5 12.5L0 10L9.5 7.5L12 0Z" fill="url(#gemini-gradient)" />
              <defs>
                <linearGradient id="gemini-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4e82ee" />
                  <stop offset="50%" stopColor="#9b72cb" />
                  <stop offset="100%" stopColor="#d96570" />
                </linearGradient>
              </defs>
            </svg>
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
