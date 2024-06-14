import { render, screen } from "@testing-library/react";
import { michaelMockCharacter } from "../../mocks/characters";
import CharacterCard from "./CharacterCard";

describe("Given the CharacterCard", () => {
  describe("When it receives 'Michael'", () => {
    test("Then it should show a heading with 'Michael'", () => {
      const expectedName = /michael/i;

      render(<CharacterCard character={michaelMockCharacter} />);

      const name = screen.getByRole("heading", { name: expectedName });

      expect(name).toBeInTheDocument();
    });

    test("Then it should show the age with the number 54", () => {
      const expectedAge = /54/i;

      render(<CharacterCard character={michaelMockCharacter} />);

      const age = screen.getByText(expectedAge);

      expect(age).toBeInTheDocument();
    });

    test("Then it should show the alternatieveText with the text 'Imagen de Michael Scott en su mesa'", () => {
      const expectedText = /imagen de Michael Scott en su mesa/i;

      render(<CharacterCard character={michaelMockCharacter} />);

      const alternativeText = screen.getByAltText(expectedText);

      expect(alternativeText).toBeInTheDocument();
    });

    test("Then it should show the position with the text 'gerente'", () => {
      const expectedText = /gerente/i;

      render(<CharacterCard character={michaelMockCharacter} />);

      const position = screen.getAllByText(expectedText);

      expect(position.length).toBeGreaterThan(0);
    });

    test("Then it should show the seasons with the text '1-7'", () => {
      const expectedText = /1-7/i;

      render(<CharacterCard character={michaelMockCharacter} />);

      const seasons = screen.getByText(expectedText);

      expect(seasons).toBeInTheDocument();
    });

    test("Then it should show the working status 'imagen de una mesa con un check o una x'", () => {
      const expectedAltText = "imagen de una mesa con un check o una x";
      render(<CharacterCard character={michaelMockCharacter} />);

      const status = screen.getByAltText(expectedAltText);

      expect(status).toBeInTheDocument();
    });

    test("Then it should show the working status 'imagen de una mesa con un check o una x' when isWorking is false", () => {
      const expectedAltText = "imagen de una mesa con un check o una x";
      const nonWorkingCharacter = { ...michaelMockCharacter, isWorking: false };

      render(<CharacterCard character={nonWorkingCharacter} />);

      const status = screen.getByAltText(expectedAltText);

      expect(status).toBeInTheDocument();
    });
  });
});
