import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solution';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Layout from './components/Layout'; 
import Signup from './pages/Signup'
import Blog from './pages/Blog'; 
import SignupForm from './pages/Signupform';
import Signin from './pages/Signin'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup-form" element={<SignupForm />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
