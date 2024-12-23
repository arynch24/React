// Main application component managing the theme and providing context.
import React, { useState, useEffect } from "react";
import ThemeBtn from "./components/themeBtn"; // Button to toggle theme
import Card from "./components/card"; // Example product card
import { ThemeProvider } from "./context/theme"; // Provides theme context

export default function App() {

  // State to track the current theme ("light" or "dark")
  const [themeMode, setThemeMode] = useState("light");

  // Function to switch to light theme
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Function to switch to dark theme
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Effect hook to update the HTML class when themeMode changes
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark"); // Remove existing theme classes
    document.querySelector('html').classList.add(themeMode); // Add new theme class
  }, [themeMode]); // Dependency array ensures it runs whenever themeMode changes

  return (
    // ThemeProvider supplies themeMode, lightTheme, and darkTheme to child components
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme toggle button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Product card component */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
