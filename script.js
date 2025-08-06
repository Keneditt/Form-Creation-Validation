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
        
        // Validation using array methods
        const validations = [
            { 
                condition: username.length < 3, 
                message: 'Username must be at least 3 characters long' 
            },
            { 
                condition: !email.includes('@') || !email.includes('.'), 
                message: 'Email must contain both "@" and "."' 
            },
            { 
                condition: password.length < 8, 
                message: 'Password must be at least 8 characters long' 
            }
        ];
        
        // Collect error messages
        const messages = validations
            .filter(validation => validation.condition)
            .map(validation => validation.message);
        
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