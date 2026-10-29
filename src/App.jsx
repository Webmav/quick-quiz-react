import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

import HomePage from './assets/pages/HomePage'
import MainLayout from './assets/layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
      <Analytics />
    </>
  )
}

//Add footer style 
//Add nav style
//toast
//responsive
//json to card (questions)