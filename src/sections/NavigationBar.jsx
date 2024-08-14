import React, { useState, useEffect } from 'react';
import avatar from "../assets/images/avatar.png";
import { searchIcon, dashboard, revenueIcon, notificationIcon, analyticIcon, inventoryIcon, logoutIcon, lightmodeIcon, darkmodeIcon, searchDarkmode, analyticDarkmode, inventoryDarkmode, logoutDarkmode, notificationDarkmode, revenueDarkmode, dashboardDarkmode, dashboardLight, revenueLight, notificationLight, analyticLight, inventoryLight, logoutLight } from "../constant/icons";
import DarkmodeButton from '../components/DarkmodeButton';

const NavigationBar = ({ isDarkMode, toggleMode, isNavCollapsed, setIsNavCollapsed }) => {
  const [isHovered, setIsHovered] = useState(false);

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
  }, [setIsNavCollapsed]);

  return (
    <nav className={`flex flex-wrap h-screen flex-col shadow-sm justify-between pb-2 ${isDarkMode ? "dark-mode" : "light-mode"}`}>
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
          <a href="#">
            <div
              className="navlink-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={
                  isHovered
                    ? (isDarkMode ? dashboardLight : dashboard)
                    : (isDarkMode ? dashboardDarkmode : dashboard)
                }
                alt="Dashboard Icon"
                width={18}
                height={18}
              />
              {!isNavCollapsed && <p className="text-sm font-palanquin ml-3">Dashboard</p>}
            </div>
          </a>

          <a href="#">
            <div
              className="navlink-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={
                  isHovered
                    ? (isDarkMode ? revenueLight : revenueIcon)
                    : (isDarkMode ? revenueDarkmode : revenueIcon)
                }
                alt="Revenue Icon"
                width={18}
                height={18}
              />
              {!isNavCollapsed && <p className="text-sm font-palanquin ml-3">Revenue</p>}
            </div>
          </a>

          <a href="#">
            <div
              className="navlink-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={
                  isHovered
                    ? (isDarkMode ? notificationLight : notificationIcon)
                    : (isDarkMode ? notificationDarkmode : notificationIcon)
                }
                alt="Notification Icon"
                width={18}
                height={18}
              />
              {!isNavCollapsed && <p className="text-sm font-palanquin ml-3">Notification</p>}
            </div>
          </a>

          <a href="#">
            <div
              className="navlink-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={
                  isHovered
                    ? (isDarkMode ? analyticLight : analyticIcon)
                    : (isDarkMode ? analyticDarkmode : analyticIcon)
                }
                alt="Analytic Icon"
                width={18}
                height={18}
              />
              {!isNavCollapsed && <p className="text-sm font-palanquin ml-3">Analytic</p>}
            </div>
          </a>

          <a href="#">
            <div
              className="navlink-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={
                  isHovered
                    ? (isDarkMode ? inventoryLight : inventoryIcon)
                    : (isDarkMode ? inventoryDarkmode : inventoryIcon)
                }
                alt="Inventory Icon"
                width={18}
                height={18}
              />
              {!isNavCollapsed && <p className="text-sm font-palanquin ml-3">Inventory</p>}
            </div>
          </a>

        </div>
      </div>

      <div>
        <a href="#">
          <div
            className="navlink-style"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={
                isHovered
                  ? (isDarkMode ? logoutLight : logoutIcon)
                  : (isDarkMode ? logoutDarkmode : logoutIcon)
              }
              alt="Logout Icon"
              width={18}
              height={18}
            />
            {!isNavCollapsed && <p className="text-sm font-palanquin ml-3">Logout</p>}
          </div>
        </a>

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
