import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


//react khud ka dom banata hai
const root = ReactDOM.createRoot(document.getElementById('root'));

// ham js ke through html render kar rhe
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

