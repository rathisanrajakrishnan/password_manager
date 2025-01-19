// Function to generate a random PIN
function generatePIN() {
    return Math.floor(Math.random() * 9000) + 1000;
}

// Retrieve saved passwords and PIN from localStorage or initialize defaults
let savedPasswords = [];
let userPIN = localStorage.getItem('pin');

// Function to set PIN using a pop-up
function setPin() {
    const setPinInput = prompt('Set your PIN (4 digits):');
    if (setPinInput && setPinInput.length === 4) {
        userPIN = setPinInput;
        localStorage.setItem('pin', userPIN);

        // Show success message using a pop-up
        alert('PIN set successfully!');
    } else if (setPinInput) {
        // Alert user that PIN must be 4 digits
        alert('Please enter a 4-digit PIN.');
        setPin();
    } else {
        // Alert user that PIN setting was canceled
        alert('PIN setting canceled.');
    }
}

// Function to hide and clear stored passwords
function hideAndClearStoredPasswords() {
    hideStoredPasswords();
    clearStoredPasswords();
}

// Function to clear stored passwords
function clearStoredPasswords() {
    const passwordList = document.getElementById('passwordList');
    passwordList.innerHTML = '';
}

// Function to display stored passwords
function displayStoredPasswords() {
    const passwordList = document.getElementById('passwordList');

    // Clear existing list
    clearStoredPasswords();

    // Iterate through saved passwords and add them to the list
    savedPasswords.forEach(password => {
        const listItem = document.createElement('li');
        listItem.textContent = `Website: ${password.website}, Username: ${password.username}, Password: ${password.password}`;
        passwordList.appendChild(listItem);
    });
}

// Function to hide stored passwords
function hideStoredPasswords() {
    document.getElementById('storedPasswordsSection').classList.add('hidden');
}

// Function to show stored passwords
function showStoredPasswords() {
    document.getElementById('storedPasswordsSection').classList.remove('hidden');
}

// Function to clear PIN input
function clearPinInput() {
    document.getElementById('pin').value = '';
}

// Function to check PIN and reveal/hide passwords
function checkPin() {
    const pinInput = document.getElementById('pin');

    if (pinInput.value === userPIN) {
        showStoredPasswords(); // Show stored passwords when PIN is correct
        displayStoredPasswords(); // Display stored passwords after entering the PIN
        clearPinInput(); // Clear PIN input after successful entry
    } else {
        hideStoredPasswords(); // Hide stored passwords if PIN is incorrect
    }
}

// Function to save password and hide and clear stored passwords
function savePassword() {
    const websiteInput = document.getElementById('website').value;
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Check if all fields are filled
    if (websiteInput && usernameInput && passwordInput) {
        // Create an object to represent the password entry
        const newPassword = {
            website: websiteInput,
            username: usernameInput,
            password: passwordInput,
        };

        // Add the new password to the array
        savedPasswords.push(newPassword);

        // Clear form fields
        document.getElementById('passwordForm').reset();

        // Hide and clear stored passwords
        hideAndClearStoredPasswords();

        // Alert user that password was saved
        alert('Password saved successfully!');
    } else {
        // Alert user to fill in all fields
        alert('Please fill in all fields.');
    }
}

// Prompt user to set PIN on page load
setPin();
