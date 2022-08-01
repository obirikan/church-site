import React from 'react'
import '../index.css'
import {Main} from '../Context/context'

const LandingPage = () => {
const {values}=Main()
  console.log(values)
  return (
    <div className='bg
    flex justify-center items-center h-screen
    '>
      <h1 className='text-4xl lg:text-7xl text-white'>Welcome To C  C C C</h1>
    </div>
  )
}

export default LandingPage