import React from 'react'
import '../index.css'
import {Main} from '../Context/context'
import {motion} from 'framer-motion'
import Side from './Side'

const LandingPage = () => {
const {values}=Main()
  console.log(values)
  const box=false
  return (
  <>
    <motion.div className='bg
     flex justify-center items-center h-screen'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <h1 className='text-4xl lg:text-7xl text-white'>Welcome To C  C C C</h1>

    </motion.div>
    <div className='side2'>
         {box?<Side/>:''}
    </div>
    <div >
        <h1><Side/></h1>
    </div>
  </>
  )
}

export default LandingPage