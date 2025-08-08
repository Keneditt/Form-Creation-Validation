
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse JSON response
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        
        // Create user list
        const userList = document.createElement('ul');
        
        // Add each user to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append user list to container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';  // Clear existing content
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);