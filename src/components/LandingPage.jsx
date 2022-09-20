import React from 'react'
import '../index.css'
import {Main} from '../Context/context'
import {motion} from 'framer-motion'
import Side from './Side'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'

const LandingPage = () => {
const {box}=Main()

  console.log(box)
  return (
  <>
    <motion.div className='bg
     flex justify-center items-center hi '
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <h1 className='text-4xl lg:text-7xl text-white'>Welcome To C  C C C</h1>

    </motion.div>
    <div className='side2'>
         {box?<Side/>:''}
    </div>
    {/* WHO WE ARE section */}
     <Page1/>
    {/* OUR MANDATE SECTION */}
    <Page2/>
    {/* APPRECIATION */}
    <Page3/>
  </>
  )
}

export default LandingPage