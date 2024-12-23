// Component to toggle between light and dark themes
import React from 'react';
import useTheme from '../context/theme'; // Custom hook to access theme context

export default function ThemeBtn() {

    // Destructuring values from theme context
    const { themeMode, lightTheme, darkTheme } = useTheme();

    // Handles theme toggle switch change
    const onChangeButton = (e) => {
        const darkModeStatus = e.currentTarget.checked; // true if toggle is checked
        darkModeStatus ? darkTheme() : lightTheme(); // Call appropriate function
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            {/* Hidden checkbox for toggle functionality */}
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeButton}
                checked={themeMode === "dark"} // Checked if current theme is dark
            />
            {/* Styled toggle switch */}
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            {/* Label text */}
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}