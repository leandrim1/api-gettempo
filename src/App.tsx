import { Outlet } from "react-router";

function App() {
  return (
    <header>
      <div className='App'>
          <div className="logo-clima">
            <img src="./public/climate-logo 1.svg" alt="" />
            <h1 className="title-header">GetTempo</h1>
          </div>
        <Outlet />
      </div>
    </header>
  );
}

export default App;
