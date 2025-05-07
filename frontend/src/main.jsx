import './index.css';
import ReactDom from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
