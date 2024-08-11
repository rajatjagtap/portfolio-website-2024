import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'; // Adjust the path if your CSS is in a different directory
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <React.StrictMode>
          <Router>
               <App />
          </Router>
     </React.StrictMode>
)