import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../characters/components/App/App";
import HomePage from "../pages/HomePage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to="/characters" />} index />
      <Route path="/characters" element={<HomePage />} />
    </Route>,
  ),
);

export default mainRouter;
