import { http, HttpResponse } from "msw";
import { Character } from "../characters/types";
import { mocksCharacters } from "./characters";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/characters`, () => {
    return HttpResponse.json<{ characters: Character[] }>({
      characters: mocksCharacters,
    });
  }),
];

export default handlers;
