import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CharactersClient from "../characters/client/CharactersClient";
import { loadCharactersActionCreator } from "../characters/slice/charactersSlice";
import CharactersList from "../characters/components/CharactersList/CharactersList.js";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characters);

  useEffect(() => {
    const fetchCharacters = async () => {
      const client = new CharactersClient();
      const characters = await client.getAll();
      const action = loadCharactersActionCreator(characters);
      dispatch(action);
    };

    fetchCharacters();
  }, [dispatch]);

  return <CharactersList characters={characters} />;
};

export default HomePage;
