import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Project from './porjects/project1/project';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
    </Routes>
</BrowserRouter>);