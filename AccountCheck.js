document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("CreateForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent form submission
            if (validatePassword() && validateEmail()) {  // Call validation functions
                alert("Account created successfully.");
            }
        });
    } else {
        console.error("Form with ID 'CreateForm' not found.");
    }
});

function validatePassword() {
    const password = document.getElementById("Password").value;
    const minLength = 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[\!\@\#\$\%\^\&\*\(\)]/.test(password); // Special characters

    if (password.length < minLength || !hasLowerCase || !hasUpperCase || !hasDigit || !hasSpecialChar) {
        alert("Your password must be at least 8 characters long and have 1 upper case, 1 lower case, 1 digit, and 1 special character to be valid!");
        return false;
    }

    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.(com|org|net|gov|edu|io)$/i.test(email); // Check for valid domains
    if (!isValidEmail) {
        alert("This is an incorrect email, please try again!");
        return false;
    }
    return true;
}
/*function validNumber(){
    
}*/
