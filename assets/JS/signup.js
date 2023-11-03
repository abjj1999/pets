// JavaScript source code
document.getElementById("signupForm").addEventListener("submit", function (event) {

    // Get the name and password values from the form field
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Define a regex pattern to match a valid name and password (e.g., at least 8 characters)
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let errorMsg = ""

    // Check if the password matches the pattern
    if (!nameRegex.test(name)) {
        // Password doesn't match the pattern, prevent form submission
        errorMsg += "Name must start with a capital letter and must be at least 2 charaters. It can only have letters and spaces.\n"
    }
    if (!passwordRegex.test(password)) {
        // Password doesn't match the pattern, prevent form submission
        errorMsg += "Password contain at least one uppercase letter, one digit, one special character and must be at least 8 characters."
    }
    if (errorMsg !== "") {
        alert(errorMsg)
        event.preventDefault();
    }
});