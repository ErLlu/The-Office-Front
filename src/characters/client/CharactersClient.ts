import { Character, NewCharacterData } from "../types";
import { CharactersClientStructure } from "./type";

class CharactersClient implements CharactersClientStructure {
  async getAll(): Promise<Character[]> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/characters`,
      );

      if (!response.ok) {
        throw new Error("Request failed! Code: " + response.status);
      }

      const { characters } = (await response.json()) as {
        characters: Character[];
      };

      return characters;
    } catch (error) {
      throw new Error(
        "Unsuccessful to get Characters: " + (error as Error).message,
      );
    }
  }

  async createCharacter(
    newCharacterData: NewCharacterData,
  ): Promise<Character> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${"/characters"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCharacterData),
        },
      );

      const { newCharacter } = (await response.json()) as {
        newCharacter: Character;
      };

      if (response.status === 409) {
        throw new Error(
          `Character with name: ${newCharacter.name} already exist`,
        );
      }

      return newCharacter;
    } catch (error) {
      throw new Error(
        "Failed to create a Character: " + (error as Error).message,
      );
    }
  }
}

const charactersClient = new CharactersClient();

export default charactersClient;
