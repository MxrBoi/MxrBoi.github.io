
function checkPassword() {
  var password = document.getElementById('password').value;
  var correctPassword = 'reality'; // Replace 'real' with your actual password
  var maxAttempts = 5; // Maximum number of incorrect attempts allowed
  var incorrectCounter = parseInt(localStorage.getItem('incorrectCounter')) || 0;

  if (password === correctPassword) {
    document.getElementById('linkContainer').style.display = 'block';
  } else {
    incorrectCounter++;
    localStorage.setItem('incorrectCounter', incorrectCounter);

    if (incorrectCounter >= maxAttempts) {
      // Redirect to a different page after too many incorrect attempts
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
