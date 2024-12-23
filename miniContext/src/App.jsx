// Importing necessary CSS and components
import './App.css'
import Login from './components/Login'  // Login component
import Profile from './components/Profile'  // Profile component
import UserContextProvider from './context/UserContextProvider'  // UserContextProvider component to manage state globally

function App() {
  return (
    // Wrapping the app with the UserContextProvider to provide global state/context to the child components
    <UserContextProvider>
      {/* Heading of the app */}
      <h1>React with Chai and share is important</h1>
      
      {/* The Login component for handling user login */}
      <Login />
      
      {/* The Profile component to display user profile details */}
      <Profile />
    </UserContextProvider>
  )
}

export default App
