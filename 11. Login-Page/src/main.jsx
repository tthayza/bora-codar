import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import NewPassword from './components/NewPassword';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App title="Acesse a Plataforma" description="Faça login para começar a construir seus projetos ainda hoje."><SignIn /></App>,
  },
  {
    path: "/new-password",
    element: <App title="Definição de Nova Senha" description="Defina aqui sua nova senha"><NewPassword /></App>,
  },
  {
    path: "/sign-up",
    element: <App title="Registre-se" description="Registre-se para começar a construir seus projetos ainda hoje."><SignUp /></App>,  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
