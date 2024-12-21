// Importing necessary modules from React and React Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing the CSS file for styling
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Importing components
import Layout from './Layout.jsx'; // The layout component (likely contains the common structure/navigation for the app)
import Home from './components/home/Home.jsx'; // Home component (for the homepage)
import About from './components/About/About.jsx'; // About component (for the about page)
import Contact from './components/Contact/Conatct.jsx'; // Contact component (for the contact page)
import User from './components/User/User.jsx'; // User component (to display user-specific details)
import Github, { githubInfoLoader } from './components/Github/Github.jsx'; // Github component with its data loader

// Setting up the router using `createRoutesFromElements` for defining routes in JSX format
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Root route renders the Layout component */}
      
      <Route path='' element={<Home />} />
      {/* Home route: renders Home component at the root '/' */}

      <Route path='about' element={<About />} />
      {/* About route: renders About component at '/about' */}

      <Route path='contact' element={<Contact />} />
      {/* Contact route: renders Contact component at '/contact' */}

      <Route path='user/:userid' element={<User />} />
      {/* Dynamic User route: renders User component at '/user/:userid', where ':userid' is a URL parameter */}

      <Route 
        loader={githubInfoLoader} // Data loader for the Github component
        path='github' 
        element={<Github />}
      />
      {/* Github route: renders Github component at '/github' and preloads data using githubInfoLoader */}
    </Route>
  )
);

// Rendering the application to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* RouterProvider provides the routing context to the application */}
    <RouterProvider router={router} />
  </React.StrictMode>
);




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
