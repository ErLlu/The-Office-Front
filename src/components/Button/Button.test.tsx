import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

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

      const imageAltText = screen.getByAltText(expectedAlternativeText);

      expect(imageAltText).toBeInTheDocument();
    });
    describe("When the button is clicked", () => {
      test("Then it should call the action", async () => {
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

        const button = screen.getByRole("button", {
          name: "boton de borrar",
        });

        await userEvent.click(button);

        expect(buttonAction).toHaveBeenCalled();
      });
    });
  });
});
