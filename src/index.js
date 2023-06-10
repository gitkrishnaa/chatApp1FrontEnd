import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from "./dashboard/dashboard.jsx"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom"
import {Routes,Route,redirect,useNavigate} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route exact path="/home/*" element={<App />} />
<Route path="/dashboard" element={<Dashboard />} />

  </Routes>
  {/* <App/> */}

  {/* <App/> */}
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
