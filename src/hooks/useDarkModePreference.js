import { useEffect, useState } from 'react';

export const useDarkModePreference = () => {
    const isDarkMode = false;

    return isDarkMode;
};


// Import necessary Redux dependencies
// import { useSelector } from 'react-redux';

// // Define your useDarkModePreference hook
// export const useDarkModePreference = () => {
//   // Use useSelector to access the 'darkMode' state from Redux
//   const isDarkMode = useSelector((state) => state.darkMode);

//   return isDarkMode;
// };
