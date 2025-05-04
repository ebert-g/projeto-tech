import './index.css'
import ReactDom from 'react-dom/client';
import App from './App.jsx'
import React from 'react';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
