import { Character } from "../characters/types";
import { CharacterClientStructure } from "./type";

class CharactersClient implements CharacterClientStructure {
  async getAll(): Promise<Character[]> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/characters`,
      );

      if (!response.ok) {
        throw new Error("Request failed! Code: " + response.status);
      }

      return (await response.json()) as Character[];
    } catch (error) {
      throw new Error(
        "Unsuccessful to get Characters: " + (error as Error).message,
      );
    }
  }
}

export default CharactersClient;
