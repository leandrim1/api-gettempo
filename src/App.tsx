import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Switch from "react-switch";
import './App.css';

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if(theme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  },[theme]);

  return (
      <header>
        <div className="App">
          <div className="logo-clima">
            <img src="https://api-gettempo.vercel.app/climate-logo%201.svg" alt="" />
            <h1 className="title-header">GetTempo</h1>
            <div className="tema-tela">
              <Switch
                onChange={toggleTheme}
                checked={theme}
                height={10}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor="#232323"
                onColor="#025939"
              />
            </div>
          </div>
          <Outlet />
        </div>
      </header>
  );
}

export default App;
