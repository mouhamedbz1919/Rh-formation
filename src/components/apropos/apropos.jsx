import imgs from "./image.jpg";
import img1 from "./admini.png";
import img2 from "./chat.jpg";
import img3 from "./membre.jpg";
import "./apropos.css"
export function Apropos()
{
    return (
      <main>
              <div className="apropos">
            <div className="container">
      <div className="section1">
        <img src={imgs} alt="myimage" className="left-image"/>
        <div className="section2">   
          <div className="frame">
            <div className="content">
              <h1>Notre mission</h1>
              <h4>Solution pour tous vos besoins RH :</h4>
              <p>Nous sommes spécialisés dans la fourniture de solutions RH personnalisées, allant du recrutement à la gestion des talents, en passant par le conseil stratégique en ressources humaines. </p>
            </div>
          </div>
          <div className="frame">
            <div className="content">
              <h1>Notre vision</h1>
              <h4>Vos objectifs  sont notre priorité absolue :</h4>
              <p>Les motivations principales derrière ce projet incluent l'amélioration des processus internes de gestion des ressources humaines, la réponse aux besoins croissants d’une gestion plus agile des talents, ainsi que la création de solutions adaptées à un marché en rapide transformation. Ce projet vise également à exploiter de nouvelles opportunités sur un marché où l'innovation dans les services RH devient un facteur de compétitivité majeur. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="beigeframe">
          <div className="content">
            <h1>Notre engagement</h1>
            <div className="section2">
              <div className="section1">
                <div className="framel">
                <h3>Entreprise</h3>
                </div>
                <div className="framel">
                <h3>Innovation</h3>
                </div>
                <div className="framel">
                <h3>Responsabilité</h3>
                </div>
              </div>
              <div className="section1">
                <div className="card">
                  <img src={img1} alt="img1" className="logo" />
                  <h2>Automatisation des processus administratifs</h2>
                  <h5>Transférer des données à propos la gestion de pv, les formations et le recrutement </h5>
                </div>
                <div className="card">
                  <img src={img2} alt="logo" className="logo" />
                <h2>Communication interne</h2>
                <h5>Les membres peuvent communiquer avec le bureau </h5>
                </div>
                <div className="card">
                  <img src={img3} alt="" className="logo" />
                <h2> Gestion des membres  </h2>
                <h5>Le suivi des membres et leurs taches</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

      </div>

      </main>
    )
}

