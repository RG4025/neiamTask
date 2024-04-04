document.getElementById('githubForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value.trim();
    if(username == '') {
      alert('Please enter a username');
      return;
    }
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        displayUserInfo(data);
      })
      .catch(error => {
        alert('User not found or an error occurred');
      });
  });
  
  function displayUserInfo(user) {
    document.getElementById('avatarImg').src = user.avatar_url;
    document.getElementById('username').textContent = user.login;
    document.getElementById('name').textContent = user.name || 'N/A';
    document.getElementById('publicRepos').textContent = user.public_repos;
    document.getElementById('publicGists').textContent = user.public_gists;
    const createdAt = new Date(user.created_at);
    document.getElementById('createdAt').textContent = createdAt.toISOString().split('T')[0];
    document.getElementById('userInfoCard').style.display = 'block';
  }