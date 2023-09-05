import './App.css'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'
import Rodape from './components/Rodape'

export default function App(){
  return (
    <>
    <div>
      {/* Aqui teremos o cabecalho do nosso site */}
      <Menu/>

      {/* Aqui teremos o corpo do nosso site (seção) */}
      <Outlet/>

      {/* Aqui teremos o rodapé do nosso site */}
      <Rodape/>
    </div>
    </>
  )
}

