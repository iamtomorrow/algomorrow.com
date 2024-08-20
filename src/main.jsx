
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { DeskDevelopers } from '../src/pages/DeskDevelopers';
import { Glaucia } from '../src/pages/Glaucia';
import { Talisson } from './pages/Talisson';
import { Desk } from './pages/Desk';
import { Paleta } from './pages/Paleta/index.jsx'

import { Services } from './pages/Desk/pages/Services/Services';
import { ContactUs } from './pages/Desk/pages/ContactUs/ContactUs';

import { Careers } from './pages/Desk/pages/Careers/Careers';
import { Edge } from './pages/Desk/pages/Edge/Edge';
import { DeskStore } from './pages/Desk/pages/DeskStore/DeskStore';
import { Projects } from './pages/Desk/pages/Projects/Projects';

import { PaletaDownloads } from './pages/Paleta/pages/Downloads/Downloads.jsx'
import { PaletaSignUp } from './pages/Paleta/pages/Signup/Signup.jsx'
import { PaletaPlans } from './pages/Paleta/pages/Plans/Plans.jsx'
import { AlgoSearch } from './pages/AlgoSearch/AlgoSearch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />} />
        <Route path='/developers' element={ <DeskDevelopers /> }/>
        <Route path='/Glaucia' element={ <Glaucia /> } />
        <Route path='/Desk' element={ <Desk /> } />
        <Route path='/talisson' element={ <Talisson /> } />

        {/* Algo Search */}
        <Route path='/search' element={ <AlgoSearch /> } />

        {/* Desk */}
        <Route path='/Desk/services' element={ <Services /> } />
        <Route path='/Desk/careers' element={ <Careers /> } />
        <Route path='/Desk/contactus' element={ <ContactUs /> } />
        <Route path='/Desk/edge' element={ <Edge /> } />
        <Route path='/Desk/store' element={ <DeskStore /> } />
        <Route path='/Desk/projects' element={ <Projects /> } />

        {/* Paleta */}
        <Route path='/paleta' element={ <Paleta /> } />
        <Route path='/paleta/downloads' element={ <PaletaDownloads /> } />
        <Route path='/paleta/entrar' element={ <PaletaSignUp /> } />
        <Route path='/paleta/planos' element={ <PaletaPlans /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
