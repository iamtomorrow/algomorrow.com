
import { DeskDevelopers } from '../src/pages/DeskDevelopers';
import { Glaucia } from '../src/pages/Glaucia';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />} />
        <Route path='/developers' element={ <DeskDevelopers /> }/>
        <Route path='/Glaucia' element={ <Glaucia /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
