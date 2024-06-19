import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './global.css'
import { Home } from './pages/Home';
import { CalcJuros } from './pages/CalcJuros';
import { Estrategias } from './pages/Estrategias';
import { Recomendacoes } from './pages/Recomendacoes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/calculadora",
        element: <CalcJuros />,
      },
      {
        path: "/estrategias",
        element: <Estrategias />,
      },
      {
        path: "/recomendacoes",
        element: <Recomendacoes />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
