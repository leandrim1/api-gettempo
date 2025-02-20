import { Outlet } from "react-router";
import Switch from "react-switch";

function App() {
  return (
      <header>
        <div className="App">
          <div className="logo-clima">
            <img src="./public/climate-logo 1.svg" alt="" />
            <h1 className="title-header">GetTempo</h1>
            <div className="tema-tela">
              <Switch
                onChange={() => {}}
                checked
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor="#fff"
                onColor="#232323"
              />
            </div>
          </div>
          <Outlet />
        </div>
      </header>
  );
}

export default App;
