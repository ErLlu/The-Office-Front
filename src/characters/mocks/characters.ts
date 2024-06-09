import { Character } from "../types";

export const michaelMockCharacter: Character = {
  _id: "66",
  name: "Michael",
  age: 54,
  isWorking: false,
  position: "gerente",
  urlImage:
    "https://en.wikipedia.org/wiki/Michael_Scott_%28The_Office%29#/media/File:MichaelScott.png",
  alternativeText: "Imagen de Michael Scott en su mesa",
  seasons: "1-7",
  description:
    "Michael es el gerente regional de la sucursal de Dunder Mifflin",
};

export const dwightMockCharacter: Character = {
  _id: "6",
  name: "Dwight",
  age: 35,
  isWorking: true,
  position: "",
  urlImage:
    "https://en.wikipedia.org/wiki/Dwight_Schrute#/media/File:Dwight_Schrute.jpg",
  alternativeText: "Imagen de Dwight Schrute sorniendo a cámara",
  seasons: "1-9",
  description: "Es uno de los vendedores de más alto rango",
};

export const mocksCharacters: Character[] = [
  michaelMockCharacter,
  dwightMockCharacter,
];
