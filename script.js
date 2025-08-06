// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        
        // Get input values using arrow functions
        const getValue = id => document.getElementById(id).value.trim();
        const username = getValue('username');
        const email = getValue('email');
        const password = getValue('password');
        
        // Create validation messages without using push()
        const messages = [
            username.length < 3 ? 'Username must be at least 3 characters long' : null,
            (!email.includes('@') || !email.includes('.')) ? 'Email must contain both "@" and "."' : null,
            password.length < 8 ? 'Password must be at least 8 characters long' : null
        ].filter(message => message !== null);
        
        const isValid = messages.length === 0;
        
        // Display results
        feedbackDiv.style.display = "block";
        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
            feedbackDiv.style.border = "1px solid #c3e6cb";
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
            feedbackDiv.style.border = "1px solid #f5c6cb";
        }
    });
});