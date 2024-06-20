import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import { CharactersState } from "../../characters/slice/types";
import { michaelMockCharacter } from "../../characters/mocks/characters";

describe("Given a HomePage component", () => {
  describe("When the characters list contains 'michael'", () => {
    test("Then it should show a heading with the text 'michael'", () => {
      const initialState: CharactersState = {
        characters: [michaelMockCharacter],
      };

      const mockSlice = createSlice({
        name: "characters",
        initialState,
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: {
          characters: mockSlice.reducer,
        },
      });

      render(
        <Provider store={mockStore}>
          <HomePage />
        </Provider>,
      );

      const expectedText = /michael/i;

      const name = screen.getByRole("heading", { name: expectedText });

      expect(name).toBeInTheDocument();
    });
  });
});
