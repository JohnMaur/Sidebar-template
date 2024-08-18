import React from 'react';
import { searchIcon, dashboard, revenueIcon, notificationIcon, analyticIcon, inventoryIcon, logoutIcon, lightmodeIcon, darkmodeIcon, searchDarkmode, analyticDarkmode, inventoryDarkmode, logoutDarkmode, notificationDarkmode, revenueDarkmode, dashboardDarkmode, dashboardLight, revenueLight, notificationLight, analyticLight, inventoryLight, logoutLight } from "../constant/icons";
import avatar from "../assets/images/avatar.png";
import NavItem from '../components/NavItem';
import DarkmodeButton from '../components/DarkmodeButton';

const MobileDropdown = ({ isDarkMode, toggleMode, toggleNav }) => {
  return (
    <nav className={`max-md:block md:hidden fixed top-0 right-0 w-full h-full bg-opacity-50 ${isDarkMode ? "main-background-dark text-white" : "main-background-light text-black"} z-10`}>
      <div className={`flex flex-col p-4`}>
        <button onClick={toggleNav} className="self-end mb-4 text-xl">
          ✖
        </button>
        <div>
          <div className="py-3 flex gap-2 mx-5 items-center">
            <img
              src={avatar}
              alt="avatar"
              width={42}
              height={42}
              className="object-contain"
            />

            <div className="flex flex-col flex-wrap">
              <p className="font-palanquin text-sm font-bold">Duck UI</p>
              <p className="font-palanquin text-sm">Duckui@demo.com</p>
            </div>

          </div>

          <div className={`flex gap-1 p-2 mt-5 cursor-pointer rounded-lg w-fit mx-5 group ${isDarkMode ? "search-darkmode" : "search-button-bg"}`}>
            <img
              src={isDarkMode ? searchDarkmode : searchIcon}
              alt="Search Button"
              width={18}
              height={18}
              className="object-contain ml-1"
            />
            <input
              type="text"
              className={`text-sm font-palanquin py-1.5 w-28 ml-3 ${isDarkMode ? "search-darkmode" : "search-button-bg"}`}
              placeholder="Search..."
            />
          </div>
          <NavItem
            isDarkMode={isDarkMode}
            icon={isDarkMode ? dashboardDarkmode : dashboard}
            iconHovered={isDarkMode ? dashboardLight : dashboard}
            tooltipText="Dashboard"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            icon={isDarkMode ? revenueDarkmode : revenueIcon}
            iconHovered={isDarkMode ? revenueLight : revenueIcon}
            tooltipText="Revenue"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            icon={isDarkMode ? notificationDarkmode : notificationIcon}
            iconHovered={isDarkMode ? notificationLight : notificationIcon}
            tooltipText="Notification"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            icon={isDarkMode ? analyticDarkmode : analyticIcon}
            iconHovered={isDarkMode ? analyticLight : analyticIcon}
            tooltipText="Analytic"
            link="#"
          />

          <NavItem
            isDarkMode={isDarkMode}
            icon={isDarkMode ? inventoryDarkmode : inventoryIcon}
            iconHovered={isDarkMode ? inventoryLight : inventoryIcon}
            tooltipText="Inventory"
            link="#"
          />
          <NavItem
            isDarkMode={isDarkMode}
            icon={isDarkMode ? logoutDarkmode : logoutIcon}
            iconHovered={isDarkMode ? logoutLight : logoutIcon}
            tooltipText="Logout"
            link="#"
          />
        </div>
        <div>
          <div className="flex items-center px-8 py-3">
            <img
              src={isDarkMode ? darkmodeIcon : lightmodeIcon}
              alt={isDarkMode ? "Dark mode Icon" : "Light mode Icon"}
              width={18}
              height={18}
            />
            <p className="text-sm font-palanquin ml-3">
              {isDarkMode ? "Dark mode" : "Light mode"}
            </p>
            <DarkmodeButton isDarkMode={isDarkMode} toggleMode={toggleMode} />
          </div>
        </div>
      </div>
    </nav>

  );
}

export default MobileDropdown;
