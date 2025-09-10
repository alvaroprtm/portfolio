import React from 'react'
import profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className="bg-sky min-h-screen w-full relative">
      <div className='flex justify-center items-center h-screen'>
        <div className='mr-8'>
          <img src={profile} alt="Profile" className='w-48 h-70 rounded-full mx-auto mb-4' />
        </div>
        <div className='text-justify text-black'>
          <p className='text-2xl'>Welcome to my Portfolio Website!</p>
          <h1 className='text-5xl font-bold my-1'>I'm Alvaro Pratama Maharto</h1>
          <p className='text-xl'>Full-Stack Developer | Data Engineer</p>
        </div>
      </div>
      <div className="water-wave"></div>
    </div>
  )
}

export default Home