import Menu from './components/Menu'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      {/* Aqui teremos o cabecalho do nosso site */}
      <Menu/>

      {/* Aqui teremos o corpo do nosso site (seção) */}
      <Outlet/>

      {/* Aqui teremos o rodapé do nosso site */}

    </>
  )
}

export default App
