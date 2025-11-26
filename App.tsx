import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Careers } from './pages/Careers';

const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<><ScrollToTop /><Home /></>} />
          <Route path="/about" element={<><ScrollToTop /><About /></>} />
          <Route path="/products" element={<><ScrollToTop /><Products /></>} />
          <Route path="/careers" element={<><ScrollToTop /><Careers /></>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;