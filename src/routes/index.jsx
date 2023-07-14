import WebLayout from '@/layouts/web'
import About from '@/pages/about'
import Home from '@/pages/home'
import {createBrowserRouter} from 'react-router-dom'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/hakkimizda',
        element: <About />,
      },
    ],
  },
])
export default routes
