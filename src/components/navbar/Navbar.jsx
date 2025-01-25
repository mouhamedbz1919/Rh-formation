import star from '../../assets/star.png'
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import '../base.css'
function Navbar(){
    return(
        <nav>
            <div className="container">
                <div className="logo">
                    <Link to='/home'>
                        <img src={logo} alt="" />
                    </Link>
                    {/* <a href="#"><img src={logo} alt="" /></a> */}
                </div>
                <ul className="list">
                    {/* <li><a href="#">Accueil</a></li> */}
                    {/* <li><Link to='/accueil'></Link>Accueil'</li> */}
                    <li><img src={star} alt="" /></li>

                    {/* <li><Link to="/services">Services<i className="fa-solid fa-chevron-down"></i></Link></li> */}
                    <li><img src={star} alt="" /></li>

                    {/* <li><a href="#">Calendrier</a></li> */}
                    {/* <li><Link to='/calendrier'>Calendrier</Link></li> */}
                    <li><img src={star} alt="" /></li>

                    {/* <li><a href="#">Chat</a></li> */}
                    {/* <li><Link to='/chat'>Chat</Link></li> */}
                    <li><img src={star} alt="" /></li>

                    {/* <li><a href="#">A propos</a></li> */}
                    {/* <li><Link to='apropos'>A propos</Link></li> */}
                    <li><img src={star} alt="" /></li>
                   
                </ul>
                <div className="user">
                    {/* <a href="#"><img src={user} alt="" /></a> */}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;