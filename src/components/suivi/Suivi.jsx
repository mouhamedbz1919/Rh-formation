import React, { useState } from "react";
import "../suivi/Suivi.css";

function Suivi() {
  const [members, setMembers] = useState([
    { id: 1, name: "Chebbi", surname: "Fares", process: "Marketing" },
    { id: 2, name: "Benmahmoud", surname: "Salim", process: "Marketing" },
    { id: 3, name: "Baklouti", surname: "Amine", process: "Projet" },
    { id: 4, name: "Dadoul", surname: "Rihem", process: "DevCo" },
    { id: 5, name: "Boughalmi", surname: "Nour", process: "DevCo" },
    { id: 6, name: "Slama", surname: "Hadil", process: "Marketing" },
    { id: 7, name: "Amen", surname: "Khlil", process: "DevCo" },
    { id: 8, name: "Bouzidi", surname: "Mouhamed", process: "Marketing" },
    { id: 9, name: "Hilali", surname: "Atta", process: "Marketing" },
    { id: 10, name: "Ammar", surname: "Arsalan", process: "Marketing" },
    { id: 11, name: "Brahmi", surname: "Oumaima", process: "Marketing" },
    { id: 12, name: "Ben Rayana", surname: "Chayma", process: "Marketing" },
    { id: 13, name: "Rifi", surname: "Bilel", process: "Marketing" },
    { id: 14, name: "Kallel", surname: "Ayoub", process: "Marketing" },
    { id: 15, name: "Hachicha", surname: "Omar", process: "Projet" },
    { id: 16, name: "Zitouni", surname: "Aymen", process: "DevCo" },
    { id: 17, name: "Ghdiri", surname: "Rabie", process: "Marketing" },
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    surname: "",
    process: "",
    birthdate: "",
    image: "",
  });

  const handleVoirPlus = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    const memberToAdd = {
      id: members.length + 1,
      ...newMember,
    };
    setMembers([...members, memberToAdd]);
    closeAddModal();
    setNewMember({
      name: "",
      surname: "",
      process: "",
      birthdate: "",
      image: "",
    });
  };

  return (
    <div className="suivi">
      <h1>Page Suivi</h1>
      {/* Container for all cards */}
      <div className="container">
        {members.map((member) => (
          <div className="card" key={member.id}>
            <div className="card-content">
              <img src="/src/assets/profil1.png" alt="User Icon" />
              <div className="card-text">
                <p>{member.name}</p>
                <p>{member.surname}</p>
                <p>{member.process}</p>
              </div>
            </div>
            <button className="card-button" onClick={() => handleVoirPlus(member)}>
              Voir plus
            </button>
          </div>
        ))}

        {/* Add Member Card */}
        <div className="card add-card" onClick={openAddModal}>
          <div className="card-content">
            <div className="card-text">
             
            </div>
          </div>
          <button className="card-button1 add-member-button">+</button>
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedMember && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <img src="/src/assets/profil1.png" alt="User Icon" />
              <div>
                <p>{selectedMember.name}</p>
                <p>{selectedMember.surname}</p>
                <p>Processus: {selectedMember.process}</p>
              </div>
              <button className="edit-button">✏️</button>
            </div>
            <div className="modal-body">
              <p>Date anniversaire: DD/MM/YY</p>
              <p>Nombre des absences dans les formations: X fois</p>
              <p>Nombre des absences dans les réunions: X fois</p>
              <p>Les projets réalisés: X projets réalisés :</p>
              <div className="projects">
                <div className="project-card">Projet Figma</div>
                <div className="project-card">Projet HTML CSS</div>
                <div className="project-card">Projet Interne</div>
                <button className="add-project">+</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Member Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeAddModal}>
              &times;
            </button>
            <div className="modal-header">
              <h2>Ajouter un nouveau membre</h2>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddMember}>
                <div className="form-group">
                  <label>Nom:</label>
                  <input
                    type="text"
                    name="name"
                    value={newMember.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Prénom:</label>
                  <input
                    type="text"
                    name="surname"
                    value={newMember.surname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Processus:</label>
                  <input
                    type="text"
                    name="process"
                    value={newMember.process}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Date de naissance:</label>
                  <input
                    type="date"
                    name="birthdate"
                    value={newMember.birthdate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Image URL:</label>
                  <input
                    type="text"
                    name="image"
                    value={newMember.image}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="save-button">
                  Sauvegarder
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Suivi; 