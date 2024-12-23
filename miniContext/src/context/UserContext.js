// Importing React to use the createContext function
import React from 'react'

// Creating the UserContext to be used for passing the user data globally in the app
const UserContext = React.createContext()

// Exporting the UserContext so it can be used by other components (e.g., UserContextProvider and consumers)
export default UserContext;
