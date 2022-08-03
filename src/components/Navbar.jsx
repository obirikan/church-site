import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import '../index.css'
const Navbar = () => {
  const navigate=useNavigate()


  const route=()=>{

  }
  return (
    <>
<nav className='flex justify-between items-center shadow-md h-16 text-black pos'>
    <div className='pl-5'>
        logo
    </div>
     <div className='flex justify-between items-center m-auto px-45 pr-5 md:flex hidden'>
        <p className='pr-7'><Link to='/side'>side</Link></p>
        <p className='pr-7'>Event</p>
        <p className='pr-7'>Family</p>
        <p className='pr-7'>Who we are</p>
        <p className='pr-7'>Contact</p>
     </div>
      <div className='pr-5 md:hidden'>
      <Link to='/side'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      </Link>
      </div>
</nav>
    </>
  )
}

export default Navbar