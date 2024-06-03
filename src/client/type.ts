import { Character } from "../characters/types";

export interface CharacterClientStructure {
  getCharacters: () => Promise<Character[]>;
}
