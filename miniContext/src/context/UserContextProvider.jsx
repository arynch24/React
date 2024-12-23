// Importing React and UserContext to provide and consume context
import React from "react";
import UserContext from "./UserContext";  // Importing the context to provide user data to the child components

const UserContextProvider = ({children}) => {
    // Setting up state for 'user' with the default value of 'null' (no user logged in initially)
    const [user, setUser] = React.useState(null);

    return(
        // Wrapping the child components with the UserContext.Provider to share the state globally
        <UserContext.Provider value={{user, setUser}}>
            {children}  {/* Rendering the child components */}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
