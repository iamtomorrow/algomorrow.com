
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
