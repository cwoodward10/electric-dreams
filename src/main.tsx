import './index.css'
import './assets/styles/components.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './components/pages/ErrorPage'
import TheLandingPage from './components/pages/TheLandingPage'
import TheGenerator from './components/pages/TheGenerator'
import TheAboutPage from './components/pages/TheAboutPage'

export const routeConstants = {
  HOME: '/',
  GENERATOR: '/generator',
  ABOUT: '/about',
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routeConstants.HOME,
        element: <TheLandingPage />
      },
      {
        path: routeConstants.GENERATOR,
        element: <TheGenerator />
      },
      {
        path: routeConstants.ABOUT,
        element: <TheAboutPage />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
