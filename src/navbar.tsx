import star from './assets/star.png'
import user from './assets/user.png'
import logo from './assets/logo.png'
export function Navbar(){
    return(
        <nav>
            <div className="container">
                <div className="logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <ul className="list">
                    <li><a href="#">Accueil</a></li>
                    <li><img src={star} alt="" /></li>

                    <li><a href="#">Services<i className="fa-solid fa-chevron-down"></i></a></li>
                    <li><img src={star} alt="" /></li>

                    <li><a href="#">Calendrier</a></li>
                    <li><img src={star} alt="" /></li>

                    <li><a href="#">Chat</a></li>
                    <li><img src={star} alt="" /></li>

                    <li><a href="#">A propos</a></li>
                    <li><img src={star} alt="" /></li>
                   
                </ul>
                <div className="user">
                    <a href="#"><img src={user} alt="" /></a>
                </div>
            </div>
        </nav>
    )
}