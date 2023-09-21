import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='global--container'>
      <header className='header--container'>
        <div className='logo--container'>
          <p id='logo'>algomorrow</p>
        </div>
      </header>
      <main className='main--container'>
        {/* <span className='main-message'>Waiting...</span> */}
      </main>
    </div>
  )
}

export default App
