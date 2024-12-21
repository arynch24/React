// Importing React and necessary hooks from React Router
import React from 'react';
import { useParams } from 'react-router-dom'; // Hook to access URL parameters

// User component to display information based on the URL parameter
export default function User() {
  // Destructuring the `userid` parameter from the URL using `useParams` hook
  const { userid } = useParams();

  return (
    <div>
      {/* Displaying the user ID from the URL */}
      User: {userid}
    </div>
  );
}
