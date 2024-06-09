import { render, screen } from "@testing-library/react";
import { Character } from "../../types";
import CharactersList from "./CharactersList";

describe("Given the CharacterList component", () => {
  describe("When it receives a character list the names 'Michael' and 'Dwitgh'", () => {
    const charactersList: Character[] = [
      {
        name: "Michael",
        age: 50,
        alternativeText: "",
        imageUrl: "",
        isWorking: true,
        seasons: "",
        position: "",
        description: "",
        _id: "",
      },
      {
        name: "Dwitgh",
        age: 35,
        alternativeText: "",
        imageUrl: "",
        isWorking: true,
        seasons: "",
        position: "",
        description: "",
        _id: "",
      },
    ];

    test("Then it should show two headings containing 'Michael' and 'Dwight'", async () => {
      render(<CharactersList characters={charactersList} />);

      const expectedMichael = /michael/i;
      const expectedName = await screen.findByRole("heading", {
        name: expectedMichael,
      });

      expect(expectedName).toBeInTheDocument();
    });
  });
});
