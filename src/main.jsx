
import { DeskDevelopers } from '../src/pages/DeskDevelopers';
import { Glaucia } from '../src/pages/Glaucia';
import { Talisson } from './pages/Talisson';
import { Desk } from './pages/Desk';

import { Services } from './pages/Desk/pages/Services/Services';
import { ContactUs } from './pages/Desk/pages/ContactUs/ContactUs';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Careers } from './pages/Desk/pages/Careers/Careers';
import { Edge } from './pages/Desk/pages/Edge/Edge';
import { DeskStore } from './pages/Desk/pages/DeskStore/DeskStore';
import { Projects } from './pages/Desk/pages/Projects/Projects';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />} />
        <Route path='/developers' element={ <DeskDevelopers /> }/>
        <Route path='/Glaucia' element={ <Glaucia /> } />
        <Route path='/Desk' element={ <Desk /> } />
        <Route path='/talisson' element={ <Talisson /> } />

        {/* Desk */}
        <Route path='/Desk/services' element={ <Services /> } />
        <Route path='/Desk/careers' element={ <Careers /> } />
        <Route path='/Desk/contactus' element={ <ContactUs /> } />
        <Route path='/Desk/edge' element={ <Edge /> } />
        <Route path='/Desk/store' element={ <DeskStore /> } />
        <Route path='/Desk/projects' element={ <Projects /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
