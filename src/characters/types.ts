export interface Character {
  _id: string;
  name: string;
  position: string;
  age: number;
  isWorking: boolean;
  urlImage: string;
  alternativeText: string;
  description: string;
  seasons: string;
}

export type NewCharacterData = Omit<Character, "_id">;
