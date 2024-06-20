import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks.js";
import { loadCharactersActionCreator } from "../../characters/slice/charactersSlice.js";
import CharactersList from "../../characters/components/CharactersList/CharactersList.js";
import charactersClient from "../../characters/client/CharactersClient.js";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characters);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await charactersClient.getAll();
      const action = loadCharactersActionCreator(characters);
      dispatch(action);
    };

    fetchCharacters();
  }, [dispatch]);

  return <CharactersList characters={characters} />;
};

export default HomePage;
