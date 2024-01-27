import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Leftsider from './Leftsider'
import { useSelector } from 'react-redux'

const Home = () => {
  const {portfolioData} = useSelector((state)=> state.root)
  return (
    <div className=''>
      <Header/>
      
      {portfolioData && (<div className='bg-primary px-40 sm:px-5'>
      <Intro/>
      <About/>
      <Experience/>
      <Project/>
      <Services/>
      <Contact/>
      <Footer/>
      <Leftsider/>
      </div>)}
      
    </div>
  )
}

export default Home
