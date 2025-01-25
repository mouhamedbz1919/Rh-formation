import React from 'react';
import { Link } from "react-router-dom";
import '../service/Service.css';
import groupe from '../../assets/groupe.png'
function Service() {
  return (
    <div className="Service">
      <div className="big-card">
        <Link to='suivi'><div className="small-card">Suivi de membre
          <img src="src/assets/groupe.png" alt="icon" />
        </div></Link>
        <Link to='pv'>
          <div className="small-card">Espace PV
            <img src="src/assets/commenter.png" alt="" />
          </div>
        </Link>
        <Link to='anniversaire'>
          <div className="small-card">Anniversaires
            <img src="src/assets/calendrier (1).png" alt="" />
          </div>
        </Link>
        <div className="small-card">Recrutement
        <img src="src/assets/recrutement (1).png" alt="" />

        </div>
        <Link to='formation'>
          <div className="small-card">Espace Formation
          <img src="src/assets/commenter.png" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Service;
