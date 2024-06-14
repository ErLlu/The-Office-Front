import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./App.scss";

const App = () => {
  return (
    <div>
      <img
        className="header__image"
        src="https://distritooficina.com/wp-content/uploads/2023/08/image-1080x757.jpg"
        alt="Imagen de la oficina de The Office"
        width="415"
        height="78"
      />
      <div className="main-container">
        <Header />
        <NavigationMenu />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
