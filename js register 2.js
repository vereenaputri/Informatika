function validateForm() {
    var firstName = document.getElementsByName("First Name")[0].value.trim();
    var lastName = document.getElementsByName("Last Name")[0].value.trim();
    var email = document.getElementById("Email").value.trim();
    var birthday = document.getElementsByName("Birthday")[0].value.trim();
    var gender = document.getElementById("Gender").value;
    var address = document.getElementsByName("Address")[0].value.trim();
    var phoneNumber = document.getElementsByName("Phone Number")[0].value.trim();
    var password = document.getElementsByName("password")[0].value.trim();
    var confirmPassword = document.getElementsByName("confirmed password")[0].value.trim();

        // Flag to track if there are any errors
        var hasError = false;

        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@gmail\.com$/;

        // Check if first name is provided and has at least 3 characters
        if (firstName.length < 3) {
            alert("First Name must be at least 3 characters long.");
            return;
        }

        // Check if last name is provided and has at least 3 characters
        if (lastName.length < 3) {
            alert("Last Name must be at least 3 characters long.");
            return;
        }

        // Check if email is in valid format
        if (!emailRegex.test(email)) {
            alert("Invalid email format. Please enter a valid Gmail address.");
            return;
        }

        // Check if birthday is provided
        if (birthday === "") {
            alert("Please enter your birthday.");
            return;
        }

        // Check if gender is selected
        if (gender === "") {
            alert("Please select your gender.");
            return;
        }

        // Check if address is provided
        if (address === "") {
            alert("Please enter your address.");
            return;
        }

        // Check if profile photo is uploaded
        var fileUpload = document.getElementById("filetoupload");
        if (!fileUpload.value) {
            alert("Please upload your profile photo.");
            return;
        }

        // Check if phone number is provided and is numeric
        if (phoneNumber === "" || isNaN(phoneNumber)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Check if password is at least 8 characters long
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // If there are no errors, submit the form
        if (!hasError) {
            // Submit the form
            document.forms["myForm"].submit();
        }
    }