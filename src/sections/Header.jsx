import { hamburgerButtonDark, hamburgerButtonLight } from "../constant/icons"

const Header = ({ isDarkMode, toggleNav }) => {
  return (
    <header className={`flex flex-1 max-md:justify-end fixed ${isDarkMode ? "header-dark-mode" : "header-light-mode"} w-full`}>
      <button 
        className={`hamburger-btn ${isDarkMode ? "hover:bg-[#C8BCF6]" : "hover:bg-[#EDEDED]"}`}
        onClick={toggleNav}
      >
        <img
          src={isDarkMode ? hamburgerButtonLight : hamburgerButtonDark}
          alt="Hamburger button"
          width={20}
          height={20}
          className="object-contain"
        />
      </button>
    </header>
  )
}

export default Header