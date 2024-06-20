import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CreateCharacterForm from "./CreateCharacterForm";

describe("Given the CreateCharacterForm component", () => {
  describe("When its rendered", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <CreateCharacterForm submit={async () => {}} />
        </MemoryRouter>,
      );
    });

    test("Then it should show an 'nombre'", () => {
      const expectedText = /nombre/i;
      const name = screen.getByLabelText(expectedText);
      expect(name).toBeInTheDocument();
    });

    test("Then it should show an 'edad'", () => {
      const expectedText = /edad/i;
      const age = screen.getByLabelText(expectedText);
      expect(age).toBeInTheDocument();
    });

    test("Then it should show an 'trabaja en dunder mifflin'", () => {
      const expectedText = /trabaja en dunder mifflin/i;
      const isWorking = screen.getByLabelText(expectedText);
      expect(isWorking).toBeInTheDocument();
    });

    test("Then it should show an 'Temporadas'", () => {
      const expectedText = /temporadas/i;
      const seasons = screen.getByLabelText(expectedText);
      expect(seasons).toBeInTheDocument();
    });

    test("Then it should show an 'Descripción'", () => {
      const expectedText = /descripción/i;
      const description = screen.getByLabelText(expectedText);
      expect(description).toBeInTheDocument();
    });

    test("Then it should show an 'Cargo en la empresa'", () => {
      const expectedText = /cargo en la empresa/i;
      const position = screen.getByLabelText(expectedText);
      expect(position).toBeInTheDocument();
    });

    test("Then it should show an 'Url de la Imagen'", () => {
      const expectedText = /url de la imagen/i;
      const imageUrl = screen.getByLabelText(expectedText);
      expect(imageUrl).toBeInTheDocument();
    });
  });
});
