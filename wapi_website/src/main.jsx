import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // If you have an App component
// import Home from './components/Home'; // If Home is your main view

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Or <Home /> if Home is your main view */}
  </React.StrictMode>
);