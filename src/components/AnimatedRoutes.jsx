import React from 'react'
import {Route,Routes,useLocation} from 'react-router-dom'
import LandingPage from './LandingPage'
import Side from './Side'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location=useLocation()
  return (
<AnimatePresence>
    <Routes locaton={location} key={location.pathname}>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/side' element={<Side/>}/>
    </Routes>
</AnimatePresence>
  )
}

export default AnimatedRoutes