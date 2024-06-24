import './app.scss'
import Navbar from './components/navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Gigs from './pages/gigs/Gigs'
import MyGigs from './pages/myGigs/MyGigs'
import Order from './pages/orders/Order'
import Messages from './pages/messages/Messages'
import Add from './pages/add/Add'


const App = () => {

  const Layout = () =>{
    return(
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element : <Layout/>,
      children : [
        {
         path:"/",
         element : <Home/>
        },
        {
          path:"/gigs",
          element : <Gigs/>
         },
         {
          path:"/mygigs",
          element : <MyGigs/>
         },
         {
          path:"/orders",
          element : <Order/>
         },
         {
          path:"/messages",
          element : <Messages/>
         },
         {
          path:"/message/:id",
          element : <Messages/>
         },
         {
          path:"/add",
          element : <Add/>
         },
         {
          path:"/gig/:id",
          element : <Gigs/>
         },
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
