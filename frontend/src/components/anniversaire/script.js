// Fonction pour afficher la boîte de commentaire pour chaque carte
function showCommentBox(cardId) {
  var commentBox = document.getElementById('comment-box-' + cardId);
  commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';
}

// Fonction pour envoyer le commentaire (ici, on le log juste dans la console)
function submitComment(cardId) {
  var commentText = document.getElementById('comment-text-' + cardId).value;
  if (commentText) {
    console.log('Commentaire pour la carte ' + cardId + ': ' + commentText);
    document.getElementById('comment-text-' + cardId).value = ''; // Efface le champ après l'envoi
  } else {
    alert('Veuillez entrer un commentaire avant d\'envoyer.');
  }
}
