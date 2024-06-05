import { Character } from "../characters/types";

export interface CharacterClientStructure {
  getAll(): Promise<Character[]>;
}
