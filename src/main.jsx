import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Chat from './components/chat/Chat';
import {Navbar} from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/home';
import { Formations } from './components/formations/formations';
import { Course } from './components/course/course';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    {/* <Formations/> */}
    <Course/>
    <Footer/>
  </StrictMode>,
)
