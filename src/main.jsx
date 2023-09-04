import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Index.jsx'
import Produtos from './routes/Produtos/Index.jsx'
import Error from './routes/Error/Index.jsx'
import EditarProdutos from './routes/EditarProdutos/Index.jsx'

const router = createBrowserRouter([

  {path: '/', element: <App/>,
    errorElement: <Error404/>,
    children:[
      {path: '/', element: <Home/>}, 
      {path: '/produtos', element: <Produtos/>}, 
      {path: '/editar/produtos/:id', element: <EditarProdutos/>}, 
      
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
