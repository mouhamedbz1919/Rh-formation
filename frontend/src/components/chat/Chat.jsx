import React from "react";
import '../chat/Chat.css'
import profil1 from "../../assets/profil1.png";

const members = [
  { id: 1, name: "Chebbi", surname: "Fares", avatar: profil1 },
  { id: 2, name: "Benmahmoud", surname: "Salim", avatar: profil1 },
  { id: 3, name: "Baklouti", surname: "Amine", avatar: profil1 },
  { id: 4, name: "Dadoul", surname: "Rihem", avatar: profil1 },
  { id: 5, name: "Boughalmi", surname: "Nour", avatar: profil1 },
  { id: 6, name: "Slama", surname: "Hadil", avatar: profil1 },
  { id: 7, name: "Amen", surname: "Khlil", avatar: profil1 },
  { id: 8, name: "Bouzidi", surname: "Mouhamed", avatar: profil1 },
  { id: 9, name: "Hilali", surname: "Atta", avatar: profil1 },
  { id: 10, name: "Ammar", surname: "Arsalan", avatar: profil1 },
  { id: 11, name: "Brahmi", surname: "Oumaima", avatar: profil1 },
  { id: 12, name: "Ben Rayana", surname: "Chayma", avatar: profil1 },
  { id: 13, name: "Rifi", surname: "Bilel", avatar: profil1 },
  { id: 14, name: "Kallel", surname: "Ayoub", avatar: profil1 },
  { id: 15, name: "Hachicha", surname: "Omar", avatar: profil1 },
  { id: 16, name: "Zitouni", surname: "Aymen", avatar: profil1 },
  { id: 17, name: "Ghdiri", surname: "Rabie", avatar: profil1 },
];

function Chat() {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [message, setMessage] = React.useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${selectedMember}: ${message}`);
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className="chat">
        <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Contact avec les membres</h2>
          <ul className="members-list">
            {members.map((member) => (
              <li
                key={member.id}
                className={`member-item ${selectedMember === member.name ? "active" : ""}`}
                onClick={() => setSelectedMember(member.name)}
              >
                <div className="avatar">
                  <img src={member.avatar} alt={`${member.name}'s avatar`} />
                </div>
                <span>{member.name}</span>
              </li>
            ))}
          </ul>
          <button className="add-button">+ Plus</button>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          <h2>Discussions</h2>
          {selectedMember ? (
            <div className="chat-box">
              <div className="chat-header">
                <div className="avatar">
                  <img
                    src={members.find((member) => member.name === selectedMember)?.avatar}
                    alt={`${selectedMember}'s avatar`}
                  />
                </div>
                <span>{selectedMember}</span>
              </div>
              <div className="chat-content">
                {/* Chat messages would go here */}
              </div>
              {/* Chat Input - Positioned at the bottom */}
              <div className="chat-input">
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Tapez votre message"
                />
                <button className="send-button" onClick={handleSendMessage}>
                  ➤
                </button>
              </div>
            </div>
          ) : (
            <div className="placeholder">
              Sélectionnez un membre pour commencer une discussion
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
