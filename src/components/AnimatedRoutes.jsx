import React from 'react'
import {Route,Routes,useLocation} from 'react-router-dom'
import LandingPage from './LandingPage'
import Side from './Side'

const AnimatedRoutes = () => {
    const location=useLocation()
  return (
    <div>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/side' element={<Side/>}/>
    </Routes>
    </div>
  )
}

export default AnimatedRoutes