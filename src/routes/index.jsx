import WebLayout from '@/layouts/web'
import About from '@/pages/about'
import Empty from '@/pages/empty'
import Home from '@/pages/home'
import ErrorPage from '@/pages/error-page'
import {createBrowserRouter} from 'react-router-dom'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <WebLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/hakkimizda',
        element: <About />,
      },
      {
        path: '/empty',
        element: <Empty />,
      },
    ],
  },
])
export default routes
