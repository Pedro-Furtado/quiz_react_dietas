import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const abrirMenu = () => {
    setMenuOpen(true)
  }
  const fecharMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='containerApp'>
      <Home abrirMenu={abrirMenu}/>
      <Menu fecharMenu={fecharMenu} menuOpen={menuOpen}/>
    </div>
  )
}

export default App
