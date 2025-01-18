import ecje from './assets/ecje.png'
import trianle1 from './assets/triangle-1.png'
import trianle2 from './assets/triangle-2.png'
import trianle3 from './assets/triangle-3.png'
import line from './assets/line.png'
export function Home(){
    return(
        <main>
            <div className="container">
                <div className="advertisement">
                    <div className="logo">
                        <img src={ecje} alt="" />
                    </div>
                    <p className="head-text">Rejoignez notre Équipe et Développez vos Talents !</p>
                    <p className="description">
                        Bienvenue ans notre espace dédié aux talents ! En tant que Responsable des Ressources Humaines, je suis là pour vous accompagner tout au long de votre parcours, répondre à vos questions et vous guider à chaque étape du processus. Mon objectif est de faire de votre expérience au sein de notre Junior Entreprise une véritable aventure humaine et professionnelle. Ici, vous êtes au bon endroit pour découvrir des opportunités enrichissantes et épanouissantes. Rejoignez-nous et grandissons ensemble !
                    </p>
                </div>

                <div className="posts">
                    <div className="cards">
                        <div className="card card-1">
                            <img src={trianle1} alt="" />
                            <p className="title">Première Poste</p>
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi quisquam maiores dolor quos sapiente. Minus, veritatis, molestias reiciendis soluta deserunt officiis tempora illum odit laboriosam obcaecati, voluptas vero reprehenderit.
                            </p>
                            <a className="button" href="#">Remplir Formulaire</a>
                        </div>
                        <div className="card card-2">
                            <img src={trianle2} alt="" />
                            <p className="title">Première Poste</p>
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi quisquam maiores dolor quos sapiente. Minus, veritatis, molestias reiciendis soluta deserunt officiis tempora illum odit laboriosam obcaecati, voluptas vero reprehenderit.
                            </p>
                            <a className="button" href="#">Remplir Formulaire</a>
                        </div>
                        <div className="card card-2">
                            <img src={trianle3} alt="" />
                            <p className="title">Première Poste</p>
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi quisquam maiores dolor quos sapiente. Minus, veritatis, molestias reiciendis soluta deserunt officiis tempora illum odit laboriosam obcaecati, voluptas vero reprehenderit.
                            </p>
                            <a className="button" href="#">Remplir Formulaire</a>
                        </div>
                    </div>
                    <img src={line} alt="" />
                </div>

                <div className="contact">
                    <div className="container">
                    <div className="col-1">
                        <h1>Contacter RH</h1>
                    </div>
                    <form action="" className="col-2">
                        <h2>Contact Form</h2>
                        <div className="name">
                            <input type="text" placeholder='Foulen' />
                            <input type="text" placeholder='Fouleni' />
                        </div>
                        <div className="details">
                            <input type="text" placeholder='+216-00-000-000'/>
                            <input type="text" placeholder='Foulenfouleni@email.com'/>
                        </div>
                        <div className="description">
                            <textarea name="" id="" placeholder='faregh klaybek hné'></textarea>
                        </div>
                        <div className="terms">
                            <input type="checkbox"/>
                            <label htmlFor=""><a href="#">J'accepte la déclaration des confidentialités</a></label>
                        </div>
                        <button type="submit">Envoyer <i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                    </div>
                </div>
            </div>
        </main>
    )
}