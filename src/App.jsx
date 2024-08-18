import React, { useState, useEffect } from 'react';
import { NavigationBar, Header } from "./sections/index";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
    setIsNavVisible(!isNavVisible);
  };

  // Ensure nav remains visible when screen is larger than 'max-md'
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavVisible(true);  // Always show nav on larger screens
      }
    };

    // Attach the event listener to window resize
    window.addEventListener('resize', handleResize);

    // Initial check for when the component mounts
    handleResize();

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex flex-row-reverse max-md:flex-row w-full overflow-y-auto`}>
      <div className='flex flex-col flex-1 h-screen'>
        <Header
          isDarkMode={isDarkMode}
          toggleNav={toggleNav}
        />

        <main className={`flex-1 overflow-auto ${isDarkMode ? "main-background-dark" : "main-background-light"}`}>
          {/* Your content here */}
          <div className="text-7xl"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt tenetur ab eveniet nisi enim quam nihil sunt. Odio voluptate laudantium commodi magnam qui consectetur sed nemo doloremque porro illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum sint consequuntur ad veniam beatae, laboriosam in quisquam quas quam esse neque modi! Et soluta optio earum alias quas iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores eos libero laudantium quaerat deserunt id consequuntur delectus placeat tenetur sequi et eaque sint ea cum quisquam, quos quis incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ratione laboriosam magnam! Maiores iste cupiditate enim modi dolore minima ea dignissimos cumque. Qui nulla libero esse fuga, consequatur sapiente blanditiis.</div>
        </main>
      </div>

      <nav className={`max-md:absolute max-md:${isNavVisible ? "block" : "hidden"} ${isNavCollapsed ? "w-20" : "w-56"} transition-width duration-300`}>
        <NavigationBar
          isDarkMode={isDarkMode}
          toggleMode={toggleMode}
          isNavCollapsed={isNavCollapsed}
        />
      </nav>

    </div>
  );
}

export default App;
