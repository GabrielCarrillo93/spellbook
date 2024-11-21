import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import SpellPage from './components/SpellPage/SpellPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "spells/:index",
        element: <SpellPage />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
