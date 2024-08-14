import React, { useEffect } from 'react';
import avatar from "../assets/images/avatar.png";
import { searchIcon, dashboard, revenueIcon, notificationIcon, analyticIcon, inventoryIcon, logoutIcon, lightmodeIcon, darkmodeIcon, searchDarkmode, analyticDarkmode, inventoryDarkmode, logoutDarkmode, notificationDarkmode, revenueDarkmode, dashboardDarkmode, dashboardLight, revenueLight, notificationLight, analyticLight, inventoryLight, logoutLight } from "../constant/icons";
import DarkmodeButton from '../components/DarkmodeButton';
import NavItem from '../components/NavItem';

const NavigationBar = ({ isDarkMode, toggleMode, isNavCollapsed, setIsNavCollapsed }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsNavCollapsed(true); // Automatically collapse nav if screen width <= 640px
      }
    };

    window.addEventListener('resize', handleResize);

    // Check on initial render
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`flex flex-wrap h-screen flex-col shadow-sm justify-between pb-2 max-sm:justify-normal ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div>
        <div className="py-3 flex gap-2 mx-5 items-center">
          <img
            src={avatar}
            alt="avatar"
            width={42}
            height={42}
            className="object-contain"
          />

          {!isNavCollapsed && (
            <div className="flex flex-col flex-wrap">
              <p className="font-palanquin text-sm font-bold">Duck UI</p>
              <p className="font-palanquin text-sm">Duckui@demo.com</p>
            </div>
          )}
        </div>

        <div className={`flex gap-1 p-2 mt-5 cursor-pointer rounded-lg w-fit mx-5 group ${isDarkMode ? "search-darkmode" : "search-button-bg"}`}>
          <img
            src={isDarkMode ? searchDarkmode : searchIcon}
            alt="Search Button"
            width={18}
            height={18}
            className="object-contain ml-1"
          />

          {!isNavCollapsed && (
            <input
              type="text"
              className={`text-sm font-palanquin py-1.5 w-28 ml-3 ${isDarkMode ? "search-darkmode" : "search-button-bg"}`}
              placeholder="Search..."
            />
          )}
        </div>

        <div className="mt-5">
          <NavItem
            isDarkMode={isDarkMode}
            isNavCollapsed={isNavCollapsed}
            icon={isDarkMode ? dashboardDarkmode : dashboard}
            iconHovered={isDarkMode ? dashboardLight : dashboard}
            tooltipText="Dashboard"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            isNavCollapsed={isNavCollapsed}
            icon={isDarkMode ? revenueDarkmode : revenueIcon}
            iconHovered={isDarkMode ? revenueLight : revenueIcon}
            tooltipText="Revenue"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            isNavCollapsed={isNavCollapsed}
            icon={isDarkMode ? notificationDarkmode : notificationIcon}
            iconHovered={isDarkMode ? notificationLight : notificationIcon}
            tooltipText="Notification"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            isNavCollapsed={isNavCollapsed}
            icon={isDarkMode ? analyticDarkmode : analyticIcon}
            iconHovered={isDarkMode ? analyticLight : analyticIcon}
            tooltipText="Analytic"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            isNavCollapsed={isNavCollapsed}
            icon={isDarkMode ? inventoryDarkmode : inventoryIcon}
            iconHovered={isDarkMode ? inventoryLight : inventoryIcon}
            tooltipText="Inventory"
            link="#"
          />
        </div>
      </div>

      <div>
        <NavItem
          isDarkMode={isDarkMode}
          isNavCollapsed={isNavCollapsed}
          icon={isDarkMode ? logoutDarkmode : logoutIcon}
          iconHovered={isDarkMode ? logoutLight : logoutIcon}
          tooltipText="Logout"
          link="#"
        />

        <div className="flex items-center px-8 py-3">
          <img
            src={isDarkMode ? darkmodeIcon : lightmodeIcon}
            alt={isDarkMode ? "Dark mode Icon" : "Light mode Icon"}
            width={18}
            height={18}
          />
          {!isNavCollapsed && (
            <p className="text-sm font-palanquin ml-3">
              {isDarkMode ? "Dark mode" : "Light mode"}
            </p>
          )}

          {!isNavCollapsed && (
            <DarkmodeButton isDarkMode={isDarkMode} toggleMode={toggleMode} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
