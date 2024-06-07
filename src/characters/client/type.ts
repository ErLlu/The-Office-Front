import { Character } from "../types";

export interface CharactersClientStructure {
  getAll(): Promise<Character[]>;
}
