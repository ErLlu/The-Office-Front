import { NavLink } from "react-router-dom";
import "./NavigationMenu.scss";

const NavigationMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <NavLink className={"link"} to="/characters">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"link"} to="/create">
            Crear
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
