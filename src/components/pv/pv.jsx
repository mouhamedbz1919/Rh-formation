import React, { useState } from "react";
import "../pv/pv.css";

function Pv() {
  const [rows, setRows] = useState([
    { description: "PV de la reunion de samedi", author: "fares chebbi", process: "marketing", sentDate: "DD/MM/YY", deadline: "6/3/22" },
    { description: "PV", author: "mouhamed bouzidi", process: "projet", sentDate: "DD/MM/YY", deadline: "12/12/22" },
    { description: "PV", author: "amine baklouti", process: "projet", sentDate: "DD/MM/YY", deadline: "4/19/23" },
    { description: "PV", author: "ayoub kallel", process: "projet", sentDate: "DD/MM/YY", deadline: "1/2/23" },
    { description: "PV", author: "arsalen ammar", process: "marketing", sentDate: "DD/MM/YY", deadline: "9/4/23" },
    { description: "PV", author: "Rihem daidoul", process: "dev co", sentDate: "DD/MM/YY", deadline: "6/3/22" },
    { description: "PV", author: "salim benmahmoud", process: "projet", sentDate: "DD/MM/YY", deadline: "12/12/22" },
    { description: "PV", author: "omar hachicha", process: "projet", sentDate: "DD/MM/YY", deadline: "4/19/23" },
    { description: "PV", author: "aymen", process: "dev co", sentDate: "DD/MM/YY", deadline: "1/2/23" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (description && file) {
      const newRow = {
        description,
        author: "New Author", // You can modify this to allow user input
        process: "New Process", // You can modify this to allow user input
        sentDate: new Date().toLocaleDateString(), // Current date
        deadline: "DD/MM/YY", // You can modify this to allow user input
      };
      setRows([...rows, newRow]);
      setDescription("");
      setFile(null);
      handleCloseModal();
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="card-content">
          {/* Page Title */}
          <h1 className="title">Espace PV</h1>

          {/* Table */}
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">Description</th>
                <th className="table-header">Rédigé par</th>
                <th className="table-header">Processus</th>
                <th className="table-header">Date de l'envoie</th>
                <th className="table-header">Deadline</th>
                <th className="table-header">Pièce jointe</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="table-cell">{row.description || "No description"}</td>
                  <td className="table-cell name-cell">{row.author || "No author"}</td>
                  <td className="table-cell">{row.process || "No process"}</td>
                  <td className="table-cell">{row.sentDate || "No date"}</td>
                  <td className="table-cell">{row.deadline || "No deadline"}</td>
                  <td className="table-cell text-center">
                    <button className="file-button">📁</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Upload Button */}
          <div className="upload-button-container">
            <button className="button" onClick={handleOpenModal}>
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Upload File</h2>
            <div className="modal-content">
              <div className="input-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input-text"
                />
              </div>
              <div className="input-group">
                <label htmlFor="file">Upload File</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="input-file"
                  />
                  <label htmlFor="file" className="file-label">
                    Choose File
                  </label>
                  <span className="file-name">
                    {file ? file.name : "No file chosen"}
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-buttons">
              <button onClick={handleSubmit} className="button primary">
                Submit
              </button>
              <button onClick={handleCloseModal} className="button secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pv;