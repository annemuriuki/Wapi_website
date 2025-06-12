import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solution';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Layout from './components/Layout'; // Adjust path
import Signup from './pages/Signup'
import Blog from './pages/Blog'; // Adjust path
import SignupForm from './pages/Signupform';
import Signin from './pages/Signin'

function App() {
  return (
    <BrowserRouter>
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
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;