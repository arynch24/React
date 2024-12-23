// Importing React, useState hook for local state and useContext to access the global context
import React, { useState, useContext } from 'react';
// Importing the UserContext to update the user data in the global state
import UserContext from '../context/UserContext';

function Login() {
    // Local state to hold the values of the username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Destructuring setUser from the UserContext to update the global user data
    const { setUser } = useContext(UserContext);

    // Handle form submission and update the global user state
    const handleSubmit = (e) => {
        e.preventDefault();
        // Set the user context with the username and password (you may want to handle validation or authentication here)
        setUser({ username, password });
    }

    return (
        <div>
            <h2>Login</h2>
            {/* Input for username */}
            <input 
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}  // Updates the username state on change
                placeholder='username'  
            />
            {" "}
            {/* Input for password */}
            <input 
                type='password'  // Changed input type to password for security
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // Updates the password state on change
                placeholder='password'  
            />
            {/* Submit button triggers the handleSubmit function */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
