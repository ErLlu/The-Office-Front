import { HttpResponse, http } from "msw";
import { Character } from "../../characters/types";
import { mocksCharacters } from "../../mocks/characters";
import { server } from "../../mocks/node";
import CharactersClient from "../CharactersClient";

const client = new CharactersClient();

describe("Given a CharactersClient getCharacter method", () => {
  describe("When its called the API and responds with character list containing Michael Scott's and Dwight Schrute characters", () => {
    test("Then it should return a list with Michael Scott's and Dwight Schrute character", async () => {
      const expectedMocksCharacters: { characters: Character[] } = {
        characters: mocksCharacters,
      };

      const characters = await client.getAll();

      expect(characters).toEqual(expectedMocksCharacters);
    });

    describe("When the api responds with a status code 500", () => {
      test("Then it should throw an error:'Unsuccessful to get Characters: Request failed! Code: 500'", async () => {
        const expectedError =
          /Unsuccessful to get Characters: Request failed! Code: 500/i;
        server.boundary(() => {
          server.use(
            http.get(`${import.meta.env.VITE_API_URL}/characters`, () => {
              return new HttpResponse(null, {
                status: 500,
              });
            }),
          );

          expect(async () => {
            await client.getAll();
          }).rejects.toThrowError(expectedError);
        });
      });
    });
  });
});
