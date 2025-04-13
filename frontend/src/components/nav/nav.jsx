import { Link, useNavigate } from "react-router-dom";
import star from '../../assets/star.png'
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import "../base.css"
import { useEffect, useState } from "react";
import axios from "axios";
function Nav() {
    const [isloggedin, setIsloggedin] = useState(false)
    const [getStorageItem, setGetStorageItem] = useState(localStorage.getItem('isloggedin'))
    console.log(isloggedin)
    useEffect(() => {
        if (getStorageItem !== null) {
            setIsloggedin(true)
        }
    }, [isloggedin])

    // Logout
    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("token");

            await axios.post(
                "http://127.0.0.1:8000/api/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Clear local storage
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("isloggedin");

            // Redirect to login
        } catch (error) {
            console.error("Logout failed:", error);
            setError("Failed to log out.");
        }
    };


    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <Link to='/accueil'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="list">
                    {/* <li><a href="#">Accueil</a></li> */}
                    <li><Link to='/accueil'>Accueil</Link></li>
                    <li><img src={star} alt="" /></li>

                    {isloggedin &&
                        (
                            <>
                                <li><Link to="/services">Services</Link></li>
                                <li><img src={star} alt="" /></li>

                                <li><Link to='/calendrier'>Calendrier</Link></li>
                                <li><img src={star} alt="" /></li>

                                <li><Link to='/chat'>Chat</Link></li>
                                <li><img src={star} alt="" /></li>
                            </>)}
                    {/* <li><a href="#">A propos</a></li> */}
                    <li><Link to='/apropos'>A propos</Link></li>
                    <li><img src={star} alt="" /></li>
                </ul>
                <div className="user">
                    {/* <a href="#"><img src={user} alt="" /></a> */}
                    {!isloggedin ? (<Link to='user'><img src={user} alt="" /></Link>) : (<Link to='accueil'><i onClick={() => {
                        localStorage.removeItem("isloggedin");
                        handleLogout; window.location.reload()
                    }} className="fa-solid fa-right-from-bracket" style={{ color: 'white', fontSize: '35px' }}></i></Link>)}
                </div>
            </div>
        </nav>
    )
}
export default Nav;