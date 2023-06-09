import React from "react";
import "./App.css";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [theme, setTheme] = React.useState("light");
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate text-2xl">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on"><FaMoon></FaMoon></div>
      <div className="swap-off"><FaSun></FaSun></div>
    </label>
  );
}

export default App;
