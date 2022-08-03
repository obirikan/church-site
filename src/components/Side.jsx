import React from 'react'
import {motion} from 'framer-motion'
import '../index.css'
const Side = () => {
  return (
    <motion.div
     className='flex justify-center items-center h-full side'
     initial={{x:-100}}
     animate={{x:0}}
     transition={{duration:2,type:'spring'}}
    //  exit={{opacity:0}}
    >
        <ul className='m-10'>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </ul>
    </motion.div>
  )
}

export default Side