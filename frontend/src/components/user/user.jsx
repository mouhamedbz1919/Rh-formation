import ecje from "../../assets/ecje.png"
import ecje2 from "../../assets/ecje2.png"
import search from '../../assets/search.png'
import apple from '../../assets/apple.png'
import '../user/user.css'
import React, { useState } from "react";


export default function User() {
    const [isLoginForm, setIsLoginForm] = useState(true); // State to toggle between forms
    return (
        <div className="main-container">
        <div className="image-container">
            <img src={ecje2} alt="Cher Junior Entrepreneur" />
        </div>
        <div className="form-container">
            <div className="form-content">
            {isLoginForm ? (
                <div id="login-form">
                <h2>Cher Junior Entrepreneur</h2>
                <p>Entrez vos identifiants pour accéder à votre compte</p>
                <form>
                    {/* <label htmlFor="email">Adresse e-mail</label> */}
                    <input type="email" id="email" placeholder="entrez votre adresse" required />

                    {/* <label htmlFor="password">Mot de passe</label> */}
                    <input type="password" id="password" placeholder="mot de passe" required />
                    <a href="#" className="forgot-password">
                    mot de passe oublié
                    </a>

                    <div className="remember">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Se souvenir pendant 30 jours</label>
                    </div>

                    <button type="submit">Login</button>
                </form>
                {/* <div className="divider">ou</div> */}
                <div className="social-login">
                    <button className="google">
                    <img src={search} alt="Google" className="icon" /> Sign in with Google
                    </button>
                    <button className="apple">
                    <img src={apple} alt="Apple" className="icon" /> Sign in with Apple
                    </button>
                </div>
                <p className="signup">
                    Vous n'avez pas de compte?{" "}
                    <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsLoginForm(false);
                    }}
                    >
                    Sign Up
                    </a>
                </p>
                </div>
            ) : (
                <div id="signup-form">
                <h2>Cher Junior Entrepreneur</h2>
                <p>Inscrivez-vous pour accéder à votre compte</p>
                <form>
                    <input type="text" placeholder="Nom complet" required />
                    <input type="email" placeholder="Adresse e-mail" required />
                    <input type="password" placeholder="Mot de passe" required />
                    <input type="password" placeholder="Confirmer le mot de passe" required />
                    <button type="submit">S'inscrire</button>
                </form>
                <div className="divider">ou</div>
                <div className="social-login">
                    <button className="google">
                    <img src={search} alt="Google" className="icon" /> Sign up with Google
                    </button>
                    <button className="apple">
                    <img src={apple} alt="Apple" className="icon" /> Sign up with Apple
                    </button>
                </div>
                <p className="login">
                    Vous avez déjà un compte ?{" "}
                    <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsLoginForm(true);
                    }}
                    >
                    Se connecter
                    </a>
                </p>
                </div>
            )}
            </div>
        </div>
        </div>
    );

  }
    