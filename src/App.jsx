import React from "react";
import "./App.css";

function App() {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [theme, setTheme] = React.useState("light");
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate text-3xl">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">Dark</div>
      <div className="swap-off">Light</div>
    </label>
  );
}

export default App;
