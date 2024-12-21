// Importing React and necessary components
import React from 'react';
import Header from './components/header/header'; // Header component (likely contains the navigation bar or top section of the page)
import Footer from './components/footer/footer'; // Footer component (likely contains the bottom section of the page)
import { Outlet } from 'react-router-dom'; // Outlet for rendering child routes

// Layout component to provide a consistent structure for all pages
export default function Layout() {
  return (
    <>
      {/* Header component is rendered at the top of the page */}
      <Header />
      
      {/* Outlet serves as a placeholder for rendering child routes */}
      <Outlet />
      
      {/* Footer component is rendered at the bottom of the page */}
      <Footer />
    </>
  );
}
