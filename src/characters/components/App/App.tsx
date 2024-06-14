import { Outlet } from "react-router-dom";
import "./App.scss";
import NavigationMenu from "../../../components/NavigationMenu/NavigationMenu";
import Header from "../../../components/Header/Header";

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
