// Context and custom hook for managing theme state
import { useContext, createContext } from "react";

// Create a context with default values
export const ThemeContext = createContext({
    themeMode: "light", // Default theme
    lightTheme: () => {}, // Placeholder for switching to light theme
    darkTheme: () => {}, // Placeholder for switching to dark theme
});

// Provider component for theme context
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to access theme context
export default function useTheme() {
    return useContext(ThemeContext);
}