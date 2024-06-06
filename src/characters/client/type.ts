import { Character } from "../types";

export interface CharacterClientStructure {
  getAll(): Promise<Character[]>;
}
