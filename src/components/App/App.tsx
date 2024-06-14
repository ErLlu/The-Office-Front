import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <NavigationMenu />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
