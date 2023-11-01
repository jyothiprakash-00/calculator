import './App.css';
import Calculator from './components/Calculator';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      
    <Calculator/>
    <div className="switch">
          <label> {theme === "light" ? " " : " "}</label>
         <div style={{marginTop:'-570px',marginLeft:'500px'}}> <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /></div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
