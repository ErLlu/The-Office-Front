import { Character } from "../../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character,
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character">
      <h2 className="character__name">{`${character.name}`}</h2>
      <div className="character__position">{character.position}</div>
      <div className="character__image">
        <img
          className="character__image"
          src={character.urlImage}
          alt={character.alternativeText}
          width="150"
          height="150"
        />
      </div>
      <div className="character__age">{character.age}</div>
      <div className="character__seasons">{character.seasons}</div>
      <div className="character__status">
        {character.isWorking ? "Está trabajando" : "No está trabajando"}
      </div>
    </article>
  );
};

export default CharacterCard;
