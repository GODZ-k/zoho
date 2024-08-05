import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="flex relative items-center">
      <input
        type="checkbox"
        className="checkbox hidden"
        id="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
     {theme === 'light' ? (
       <label
       htmlFor="checkbox"
       className="flex items-center justify-between bg-gray-900 w-12 h-6 rounded-full p-1 cursor-pointer"
     >
       <i className="fas fa-moon text-yellow-500"></i>
       <i className="fas fa-sun text-yellow-400"></i>
       <span className=" ball bg-white w-5 h-5 absolute  rounded-full transition-transform duration-200" />
     </label>
     ):(
      <label
      htmlFor="checkbox"
      className="flex items-center justify-between bg-gray-900 w-12 h-6 rounded-full p-1 cursor-pointer"
    >
      <i className="fas fa-moon text-yellow-500"></i>
      <i className="fas fa-sun text-yellow-400"></i>
      <span className=" ball bg-white w-5 h-5 absolute  rounded-full translate-x-[1.3rem] transition-transform duration-200" />
    </label>
     )}
    </div>
  );
};

export default ThemeToggle;
