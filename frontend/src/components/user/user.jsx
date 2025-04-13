import ecje from "../../assets/ecje.png";
import ecje2 from "../../assets/ecje2.png";
import search from "../../assets/search.png";
import apple from "../../assets/apple.png";
import "../user/user.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function User() {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isloggedin") === "true";
        setIsLoggedin(loggedInStatus);
    }, []);

    useEffect(() => {
        if (isLoggedin) {
            localStorage.setItem("isloggedin", "true");
        }
    }, [isLoggedin]);

    // Register
    async function handleRegisterSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register", {
                name,
                email,
                password,
            });

            console.log("Réponse d'inscription:", response.data);
            setSuccess("Inscription réussie ! Veuillez vous connecter.");
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err.response) {
                const errors = err.response.data.errors;
                const firstError = errors ? Object.values(errors)[0][0] : err.response.data.message;
                setError(firstError || "L'inscription a échoué. Veuillez réessayer.");
            } else {
                setError("Une erreur est survenue. Veuillez réessayer.");
            }
        }
    }

    // Login
    async function handleLoginSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email,
                password,
            });

            console.log("Full login response:", response);
            console.log("Data:", response.data);

            if (response.data.token && response.data.user) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setIsLoggedin(true);
                setError("");
                setSuccess("Connexion réussie !");
                setLoading(false);

                setTimeout(() => {
                    navigate("/accueil");
                    window.location.reload()
                }, 2000);
            } else {
                setSuccess("");
                setError("Connexion invalide. Veuillez réessayer.");
                setLoading(false);
            }
        } catch (err) {
            setSuccess("");
            setLoading(false);
            console.error("Login error:", err);

            if (err.response) {
                setError(err.response.data.error || "Échec de la connexion. Veuillez réessayer.");
            } else {
                setError("Une erreur est survenue. Veuillez réessayer.");
            }
        }
    }
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
                            {error && <div className="error mt-3">{error}</div>}
                            {success && <div className="success mt-3">{success}</div>}
                            <form onSubmit={handleLoginSubmit}>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    placeholder="entrez votre adresse"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="mot de passe"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <a href="#" className="forgot-password">
                                    mot de passe oublié
                                </a>
                                <div className="remember">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Se souvenir pendant 30 jours</label>
                                </div>
                                <button type="submit" disabled={loading}>
                                    {loading ? "Connexion..." : "Se Connecter"}
                                </button>
                            </form>
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
                                        setError("");
                                        setSuccess("");
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
                            {error && <div className="error mt-3">{error}</div>}
                            {success && <div className="success mt-3">{success}</div>}
                            <form onSubmit={handleRegisterSubmit}>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    placeholder="Nom complet"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    placeholder="Adresse e-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="Mot de passe"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <p style={{ color: 'red' }}>Le mot de passe doit être composé de 8 caractères</p>
                                <button type="submit" disabled={loading}>
                                    {loading ? "Inscription..." : "S'inscrire"}
                                </button>
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
                                        setError("");
                                        setSuccess("");
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
