import { lightmodeIcon, darkmodeIcon } from "../constant/icons";

const DarkmodeButton = ({ isDarkMode, toggleMode }) => {
  return (
    <button
      onClick={toggleMode}
      className={`relative flex items-center w-10 h-5 rounded-full ml-2 transition-colors duration-[1.5s] ease-in-out ${
        isDarkMode ? 'lightmode-button-bg' : 'darkmode-button-bg'
      }`}
    >
      <div
        className={`absolute transition-transform duration-500 ease-in-out transform ${
          isDarkMode ? 'translate-x-[2px]' : 'translate-x-[22px]'
        }`}
      >
        <img
          src={isDarkMode ? lightmodeIcon : darkmodeIcon}
          alt={isDarkMode ? "Light Mode Icon" : "Dark Mode Icon"}
          width={19}
          height={19}
          className={`rounded-full object-contain ${isDarkMode ? "darkmode-button-bg" : "bg-black"}`}
        />
      </div>
    </button>
  );
};

export default DarkmodeButton;