import React, { useState } from 'react';
import { NavigationBar, Header } from "./sections/index"

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
    <main className={`${isDarkMode ? "main-background-dark" : "main-background-light"} flex flex-row-reverse w-full`}>
      <header className='flex-1'>
        <Header 
          isDarkMode={isDarkMode} 
          toggleNav={toggleNav}
        />
      </header>
      <nav className={`${isNavCollapsed ? "w-20" : "w-56"} transition-width duration-300`}>
        <NavigationBar 
          isDarkMode={isDarkMode} 
          toggleMode={toggleMode} 
          isNavCollapsed={isNavCollapsed}
          setIsNavCollapsed={setIsNavCollapsed}  
        />
      </nav>
    </main>
  )
}

export default App