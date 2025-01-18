import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { Home } from './home'
import { Formations } from './formations'
import { Course } from './course'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    {/* < Home /> */}
    {/* <Formations/> */}
    <Course/>
    <Footer/>
  </StrictMode>,
)
