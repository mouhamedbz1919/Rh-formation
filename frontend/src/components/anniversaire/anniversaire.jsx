import React, { useState } from "react";
import user from "../../assets/user.jpeg"
import '../anniversaire/anniversaire.css'
const BirthdayCard = ({ date, photo, name }) => {
  const [counters, setCounters] = useState([0, 0, 0, 0, 0]);
  const [comments, setComments] = useState("");
  const [showCommentSection, setShowCommentSection] = useState(false);

  const handleIconClick = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);

    if (index === 4) {
      setShowCommentSection(true);
    }
  };

  const handleCommentSubmit = () => {
    if (comments.trim() !== "") {
      alert(`Commentaire soumis : ${comments}`);
      setComments("");
      setShowCommentSection(false);
    } else {
      alert("Veuillez écrire un commentaire avant de soumettre.");
    }
  };

  return (
    <div className="anniversaire-birthday-card">
      <div className="birthday-date">{date}</div>
      <div className="card-content">
        <div className="photo-space">
          <img src={user} alt={`Photo de ${name}`} className="photo" />
        </div>
        <div className="message">
          <p>🎉 Joyeux Anniversaire <span className="name">{name}</span> ! 🎉✨</p>
          <p>Que cette journée soit remplie de sourires 😊, de rires 😂, et de moments inoubliables ! 🎈🎂</p>
          <p>Profite à fond de ta journée, c’est la tienne ! 🎉🎊</p>
          <p>Avec toute mon amitié ❤️</p>
        </div>
      </div>
      <div className="icons-bar">
        {['❤️', '🥳', '🎉', '🎁', '💬'].map((icon, index) => (
          <div className="icon-container" key={index}>
            <span className="icon" onClick={() => handleIconClick(index)}>{icon}</span>
            <span className="counter">{counters[index]}</span>
          </div>
        ))}
      </div>

      {showCommentSection && (
        <div className="comment-section">
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Écris ton commentaire ici..."
          />
          <button onClick={handleCommentSubmit}>Soumettre le commentaire</button>
        </div>
      )}
    </div>
  );
};

const Anniversaire = () => {
  const birthdayCards = [
    {
      date: "01/01/2025",
      photo: {user},
      name: "[Nom]",
    },
    {
      date: "15/12/2024",
      photo: {user},
      name: "[Nom]",
    },
    {
      date: "10/12/2024",
      photo: {user},
      name: "[Nom]",
    },
    {
      date: "25/01/2025",
      photo: {user},
      name: "[Nom]",
    },
  ];

  return (
    <div className="anniversaire-container">
      <h1>Espace Anniversaire 🎂</h1>
      {birthdayCards.map((card, index) => (
        <BirthdayCard
          key={index}
          date={card.date}
          photo={card.photo}
          name={card.name}
        />
      ))}
    </div>
  );
};

export default Anniversaire ;


