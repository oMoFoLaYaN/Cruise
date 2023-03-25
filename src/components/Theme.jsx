import React, { useState, useEffect } from "react";

const Theme = (props) => {
  const [theme, setTheme] = useState("null");
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button className="" onClick={handleThemeSwitch}>
      <i
        onClick={() => setIcon(!icon)}
        className={`${icon ? "ri-sun-line" : "ri-moon-line"} text-lg ${
          props.color
        }`}
        id="theme-button"
      />
    </button>
  );
};

export default Theme;
