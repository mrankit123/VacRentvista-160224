document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (username.length < 3) {
      document.getElementById('message').textContent = 'Username must be at least 3 characters long.';
      return;
    }
  
    if (!email.includes('@')) {
      document.getElementById('message').textContent = 'Please enter a valid email address.';
      return;
    }
  
    if (password.length < 8) {
      document.getElementById('message').textContent = 'Password must be at least 8 characters long.';
      return;
    }
  
    // If all validations pass, you can submit the form data to the server here.
  
    document.getElementById('message').textContent = 'Sign up successful!';
  });