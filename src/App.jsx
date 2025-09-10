import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from './layouts/appLayout'
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Project from './pages/project'
import Contact from './pages/contact'
import './App.css'

function App() {

  return (
    <AppLayout>
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </AppLayout>
  )
}

export default App
