import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Projects from './pages/Projects';
import Button from './components/ui/Button';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div
          className="min-h-screen flex flex-col selection:bg-[var(--accent)] selection:text-white"
          style={{
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
          }}
        >
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/work/:id" element={<CaseStudy />} />
              <Route
                path="*"
                element={
                  <div className="min-h-[70vh] flex items-center justify-center px-6">
                    <div className="text-center p-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] max-w-md">
                      <span className="font-mono text-5xl font-bold text-[var(--accent)] block mb-2">
                        404
                      </span>
                      <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                        Page not found
                      </h2>
                      <p className="text-sm text-[var(--text-muted)] mb-6 font-light">
                        The page you are looking for does not exist or has been relocated.
                      </p>
                      <Button variant="primary" href="/">
                        Return to Homepage
                      </Button>
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
