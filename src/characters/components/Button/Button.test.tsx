import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";

describe("Given the Button component", () => {
  const buttonAction = vi.fn();
  const alternativeText = "boton de borrar";

  describe("When it receives an image with the alternative text 'botón de borrar'", () => {
    test("Then it should show an image with the alternative text 'botón de borrar'call its action", async () => {
      const expectedAlternativeText = /boton de borrar/i;
      render(
        <Button
          source="icons/icons8-delete.svg"
          action={buttonAction}
          width="20"
          height="20"
          alternativeText={alternativeText}
          className="button"
        />,
      );

      const imageText = screen.getByAltText(expectedAlternativeText);

      expect(imageText).toBeInTheDocument();
    });
  });
});
