import React from 'react'
import Profile from './Profile/profile'
import Footer from './Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Profile />
      <Footer />
    </div>
  )
}

export default Home