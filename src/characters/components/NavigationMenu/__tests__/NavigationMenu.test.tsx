import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationMenu from "../NavigationMenu";
import { Provider } from "react-redux";
import store from "../../../../store/store";

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <NavigationMenu />
          </MemoryRouter>
        </Provider>,
      );
    });

    test("Then it should show a link with 'Home'", () => {
      const expectedLinkText = /home/i;

      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a link with 'Crear'", () => {
      const expectedLinkText = /crear/i;

      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });
  });
});
