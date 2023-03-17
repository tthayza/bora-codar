import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import NewPassword from './pages/NewPassword';
import SignUp from './pages/SignUp';
// import Routes from './components/Routes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
