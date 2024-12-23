// Importing React and useContext hook to access the context data
import React, { useContext } from 'react';
// Importing the UserContext to consume the user data
import UserContext from '../context/UserContext';

function Profile() {
    // Using the useContext hook to access the 'user' data from the UserContext
    const { user } = useContext(UserContext);
    
    // If there is no user (i.e., user is null), display a message asking the user to log in
    if (!user) return <div>please login</div>;

    // If there is a user, display the username
    return <div>Welcome {user.username}</div>;
}

export default Profile;
