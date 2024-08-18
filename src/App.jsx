import React, { useState } from 'react';
import { NavigationBar, Header } from "./sections/index"
import MobileDropdown from './sections/MobileDropdown';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <main className={`flex flex-row-reverse max-md:flex-row w-full`}>
      <div className='flex flex-col flex-1 h-screen'>
        <Header
          isDarkMode={isDarkMode}
          toggleNav={toggleNav}
        />

        <body className={`flex-1 overflow-auto ${isDarkMode ? "main-background-dark" : "main-background-light"}`}>
          {/* Your content here */}
        </body>
      </div>

      <nav className={`max-md:hidden ${isNavCollapsed ? "w-20" : "w-56"} transition-width duration-300`}>
        <NavigationBar
          isDarkMode={isDarkMode}
          toggleMode={toggleMode}
          isNavCollapsed={isNavCollapsed}
        />
      </nav>

      {/* Mobile dropdown menu */}
      {isNavCollapsed && (
        <MobileDropdown
          isDarkMode={isDarkMode}
          toggleMode={toggleMode}
          toggleNav={toggleNav}
        />
      )}
    </main>
  )
}

export default App;
