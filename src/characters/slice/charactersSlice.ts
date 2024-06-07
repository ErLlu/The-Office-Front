import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../types";
import { CharactersState } from "./types";

const initialCharactersState: CharactersState = { characters: [] };

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharactersState,
  reducers: {
    loadCharacters: (
      state,
      action: PayloadAction<Character[]>,
    ): CharactersState => {
      return { ...state, characters: action.payload };
    },
  },
});

export default charactersSlice;

export const loadCharactersAction = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;

export const { loadCharacters: loadCharactersActionCreator } =
  charactersSlice.actions;
