import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import CreateCharacterPage from "../pages/HomePage/CreateCharacterPage/CreateCharacterPage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to="/characters" />} index />
      <Route path="/characters" element={<HomePage />} />
      <Route path="/create" element={<CreateCharacterPage />} />
    </Route>,
  ),
);

export default mainRouter;
