document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!email || !password || !passwordRegex.test(password)) {
        document.getElementById('error-message').innerHTML = 'Please enter a valid email and password. Password should contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.';
    } else {
       
        console.log('Form submitted successfully');
    }
});