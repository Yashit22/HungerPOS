import React from "react";

// Inline style objects for veg and non-veg dot borders/backgrounds
const vegBorder = { border: "1px solid #4caf50" };
const vegDot = { background: "#4caf50" };
const nonVegBorder = { border: "1px solid #e53935" };
const nonVegDot = { background: "#e53935" };

const Header = ({ onMenuClick, onSearch, onRefresh, onVeg, onNonVeg, onNew }) => (
  <header className="sticky top-0 bg-background-light dark:bg-background-dark z-10 p-4 shadow-sm dark:shadow-md dark:shadow-neutral-800">
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="font-semibold text-gray-800 dark:text-gray-200">
        Table No: SR21
      </div>
      <div className="w-10 h-10"></div>
    </div>

    <div className="relative flex items-center">
      <input
        className="w-full pl-4 pr-10 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg bg-background-light dark:bg-neutral-800 text-gray-800 dark:text-gray-200 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500"
        placeholder="Search..."
        type="text"
      />
      <div className="absolute right-2 flex items-center space-x-1">
        <button
          className="p-1.5 text-gray-500 dark:text-gray-400"
          onClick={onSearch}
        >
          <span className="material-symbols-outlined">search</span>
        </button>
        <button
          className="p-1.5 text-gray-500 dark:text-gray-400"
          onClick={onRefresh}
        >
          <span className="material-symbols-outlined">refresh</span>
        </button>
      </div>
    </div>

    <div className="flex items-center space-x-3 mt-4">
      <button
        className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-neutral-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
        onClick={onVeg}
      >
        <div className="w-4 h-4 flex items-center justify-center" style={vegBorder}>
          <span className="w-2 h-2 rounded-full" style={vegDot}></span>
        </div>
        <span>Veg</span>
      </button>
      <button
        className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-neutral-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
        onClick={onNonVeg}
      >
        <div className="w-4 h-4 flex items-center justify-center" style={nonVegBorder}>
          <span className="w-2 h-2 rounded-full" style={nonVegDot}></span>
        </div>
        <span>Non Veg</span>
      </button>
      <button
        className="px-3 py-1.5 border border-gray-300 dark:border-neutral-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
        onClick={onNew}
      >
        <span>New</span>
      </button>
    </div>
  </header>
);

export default Header;
