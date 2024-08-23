
import { BrowserRouter, Navigate, Route, Routes, redirect } from 'react-router-dom'
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

import { AlgoSearch } from './pages/AlgoSearch/AlgoSearch.jsx'
import { AlgoSearchAccount } from './pages/AlgoSearch/pages/Account/Account.jsx'
import { AlgoSearchSettings } from './pages/AlgoSearch/pages/Settings/Settings.jsx'
import { AlgoSearchSearch } from './pages/AlgoSearch/pages/Search/Search.jsx'

import { PaletaDownloads } from './pages/Paleta/pages/Downloads/Downloads.jsx'
import { PaletaSignUp } from './pages/Paleta/pages/Signup/Signup.jsx'
import { PaletaPlans } from './pages/Paleta/pages/Plans/Plans.jsx'
import { PaletaAppSearch } from './pages/Paleta/pages/App/pages/Search/Search.jsx'
import { PaletaAppFavorites } from './pages/Paleta/pages/App/pages/Favorites/Favorites.jsx'
import { PaletaAppAccount } from './pages/Paleta/pages/App/pages/Account/Account.jsx'
import { SearchContextProvider } from './pages/AlgoSearch/contexts/SearchContext.jsx'
import { PaletaAppNotifications } from './pages/Paleta/pages/App/pages/Notifications/Notifications.jsx'
import { PaletaAppLibrary } from './pages/Paleta/pages/App/pages/Library/Library.jsx'
import { LibraryContextProvider } from './pages/Paleta/contexts/LibraryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LibraryContextProvider>
    <SearchContextProvider>
    <BrowserRouter>
      <Routes>

        <Route path='/developers' element={ <DeskDevelopers /> }/>
        {/* <Route path='/Glaucia' element={ <Glaucia /> } /> */}
        <Route path='/Desk' element={ <Desk /> } />
        <Route path='/talisson' element={ <Talisson /> } />

        {/* Algo Search */}
        <Route path='/' element={ <AlgoSearch />} />
        <Route path='/search' element={ <AlgoSearchSearch /> } />
        <Route path='/account' element={ <AlgoSearchAccount />} />
        <Route path='/settings' element={ <AlgoSearchSettings />} />

        {/* Desk */}
        <Route path='/Desk/services' element={ <Services /> } />
        <Route path='/Desk/careers' element={ <Careers /> } />
        <Route path='/Desk/contactus' element={ <ContactUs /> } />
        <Route path='/Desk/edge' element={ <Edge /> } />
        <Route path='/Desk/store' element={ <DeskStore /> } />
        <Route path='/Desk/projects' element={ <Projects /> } />

        {/* Paleta */}
        <Route path='/paleta' element={ <Navigate to={"/dist/index.html"} />} />
        <Route path='/paleta/downloads' element={ <PaletaDownloads /> } />
        <Route path='/paleta/entrar' element={ <PaletaSignUp /> } />
        <Route path='/paleta/planos' element={ <PaletaPlans /> } />
        <Route path='/paleta/search' element={ <PaletaAppSearch />}/>
        <Route path='/paleta/favorites' element={ <PaletaAppFavorites /> } />
        <Route path='/paleta/account' element={ <PaletaAppAccount /> } />
        <Route path='/paleta/notifications' element={ <PaletaAppNotifications /> } />
        <Route path='/paleta/library' element={ <PaletaAppLibrary /> } />
      </Routes>
    </BrowserRouter>

    </SearchContextProvider>
    </LibraryContextProvider>
  </React.StrictMode>
)
