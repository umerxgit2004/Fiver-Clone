import { useEffect, useState } from 'react'
import './navbar.scss'
import {Link, useLocation} from 'react-router-dom'
const Navbar = () => {


    const [active,setActive] = useState(false)
    const [open,setOpen] = useState(false)
    const {pathname} = useLocation()

    
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }


    useEffect(() =>{
        // to execue a function when user scrolls
        window.addEventListener("scroll",isActive)
    }, [])

    const currentUser = {
        id:1,
        username : "Umer",
        isSeller : "true"
    }


  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
        <div className="left">
            <Link to='/' className='link'>
            <span className='text'>Fiverr</span>
            </Link>
           
            <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span> }
            {!currentUser && <button>Join</button>}
            {
                currentUser && (
                    <div className="user" onClick={() => setOpen(!open)}>
                        <img src="https://images.pexels.com/photos/1383775/pexels-photo-1383775.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                        <span>{currentUser?.username}</span>
           {        open &&     <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                    <Link to='/mygigs' className='link'>Gigs</Link>
                                    <Link to ='/add' className='link'>Add New Gig</Link>
                                  
                                    </>
                                )
                            }
                            <Link to='/orders' className='link'>Orders</Link>
                            <Link to ='/messages' className='link'>Messages</Link>
                            <Link to ='/' className='link'>Logout</Link>
                        </div>}
                   
                    </div>
                )
            }
        </div>
        </div>
        <hr/>
     { (active || pathname !=="/" ) &&
        <>
        <div className="menu">
            <span>Test 1</span>
            <span>Test 2</span>
        </div>  
        </>
        }
    </div>
  )
}

export default Navbar
