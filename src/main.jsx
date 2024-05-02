import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Campeonatos from './components/campeonatos'
import Jogos from './components/jogos'
import './index.css'
import Favoritos from './components/favoritos/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/campeonato/:nome",
    element: <Jogos />,
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
