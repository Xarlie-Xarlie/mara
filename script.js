document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('username and password cannot be empty.');
    return;
  }

  const data = {
    username: username,
    password: password
  };

  fetch('https://api-mare-lendas.vercel.app/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.access_token) {
        // Save the token to localStorage
        localStorage.setItem('access_token', data.access_token);

        // Redirect to the new page
        window.location.href = 'stage_1.html';
      } else {
        alert('Login failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
