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
import NotFound from './pages/NotFound';
import ProfileSettings from './pages/ProfileSettings';
import UserManagement from './pages/UserManagement';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';

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
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup-form" element={<SignupForm />} />
          <Route path="signin" element={<Signin />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="profile-settings" element={<ProfileSettings />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
