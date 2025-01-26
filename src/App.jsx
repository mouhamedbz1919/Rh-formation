import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import {Home} from './components/home/home'
import { Footer } from "./components/footer/Footer"
import Service from "./components/service/Service"
import Chat from "./components/chat/Chat"
import Nav from "./components/nav/nav"
import Pv from './components/pv/pv'
import Suivi from "./components/suivi/Suivi"
import Anniversaire from "./components/anniversaire/anniversaire"
import Formations from './components/formations/formations'
import User from './components/user/user'
import Course from './components/course/course'
// import Course from './components/course/course'
export default function App(){
    return(
            <BrowserRouter>
                <Nav/>
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/accueil" element={<Home/>} />
                        <Route path="/services" element={<Service/>} />
                        <Route path="services/suivi" element={<Suivi/>} />
                        <Route path="services/pv" element={<Pv/>} />
                        <Route path="services/anniversaire" element={<Anniversaire/>} />
                        <Route path="services/formation" element={<Formations/>} />
                        <Route path="services/formation/course" element={<Course/>} />
                        <Route path="/calendrier" element={<Service/>} />
                        <Route path="/chat" element={<Chat/>} />
                        <Route path="/apropos" element={<Service/>} />
                        <Route path="/user" element={<User/>} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                <Footer/>
            </BrowserRouter>
    )
}