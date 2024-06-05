import { Character } from "../characters/types";
import { CharacterClientStructure } from "./type";

class CharactersClient implements CharacterClientStructure {
  async getAll(): Promise<Character[]> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/characters`,
      );
      const { characters } = (await response.json()) as {
        characters: Character[];
      };

      return characters;
    } catch (error) {
      throw new Error("Server failed");
    }
  }
}

export default CharactersClient;
