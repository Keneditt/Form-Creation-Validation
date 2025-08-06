document.addEventListener('DOMContentLoaded', () => {
    // Select form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Add form submission handler
    form.addEventListener('submit', (event) => {
        // Prevent form submission
        event.preventDefault();
        
        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Initialize validation variables
        let isValid = true;
        const messages = [];
        
        // Validate username (min 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }
        
        // Validate email (must contain @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain both "@" and "."');
        }
        
        // Validate password (min 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }
        
        // Display feedback
        feedbackDiv.style.display = "block";
        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
            feedbackDiv.style.border = "1px solid #c3e6cb";
            
            // Reset form after successful registration
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
            feedbackDiv.style.border = "1px solid #f5c6cb";
        }
    });
});