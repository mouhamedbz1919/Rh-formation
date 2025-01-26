import { Link } from "react-router-dom";
import star from '../../assets/star.png'
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import "../base.css"
function Nav(){
    return(
        <nav>
           <div className="container">
                <div className="logo">
                    <Link to='/home'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="list">
                                       {/* <li><a href="#">Accueil</a></li> */}
                    <li><Link to='/accueil'>Accueil</Link></li>
                    <li><img src={star} alt="" /></li>

                    <li><Link to="/services">Services</Link></li>
                    <li><img src={star} alt="" /></li>

                    {/* <li><a href="#">Calendrier</a></li> */}
                    <li><Link to='not working'>Calendrier</Link></li>
                    <li><img src={star} alt="" /></li>

                    {/* <li><a href="#">Chat</a></li> */}
                    <li><Link to='/chat'>Chat</Link></li>
                    <li><img src={star} alt="" /></li>

                    {/* <li><a href="#">A propos</a></li> */}
                    <li><Link to='not working'>A propos</Link></li>
                    <li><img src={star} alt="" /></li>
                </ul>
                <div className="user">
                    {/* <a href="#"><img src={user} alt="" /></a> */}
                    <Link to='user'><img src={user} alt="" /></Link>
                </div>
           </div>
        </nav>
    )
}
export default Nav;