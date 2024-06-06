import { mocksCharacters } from "../../mocks/characters";
import charactersSlice, {
  loadCharactersActionCreator,
} from "../charactersSlice";
import { CharactersState } from "../types";

describe("Given an Characters reducer", () => {
  describe("When it receives loadCharacters with a list of characters with michael", () => {
    test("Then it should return a new state with the list of characters with michael", () => {
      const state: CharactersState = { characters: [] };
      const expectedNewState: CharactersState = {
        characters: mocksCharacters,
      };

      const action = loadCharactersActionCreator(mocksCharacters);

      const charactersReducer = charactersSlice.reducer;
      const newState = charactersReducer(state, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
