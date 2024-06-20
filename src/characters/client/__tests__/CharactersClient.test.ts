import { HttpResponse, http } from "msw";
import { server } from "../../mocks/node";
import { mocksCharacters } from "../../mocks/characters.js";
import { Character } from "../../types.js";
import charactersClient from "../CharactersClient.js";

const client = charactersClient;

describe("Given a CharactersClient getCharacter method", () => {
  describe("When its called the API and responds with character list containing Michael Scott's and Dwight Schrute characters", () => {
    test("Then it should return a list with Michael Scott's and Dwight Schrute character", async () => {
      const expectedMocksCharacters: Character[] = mocksCharacters;

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
