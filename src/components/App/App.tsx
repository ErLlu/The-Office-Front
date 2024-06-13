import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import NavigationMenu from "../../../components/NavigationMenu/NavigationMenu";
import "./App.scss";

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
