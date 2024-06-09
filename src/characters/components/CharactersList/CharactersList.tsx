import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

interface CharactersListProps {
  characters: Character[];
}

const CharactersList = ({
  characters,
}: CharactersListProps): React.ReactElement => {
  return (
    <ul className="characters">
      {characters.map((character) => (
        <li key={character._id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
