import Button from "../../../components/Button/Button";
import { Character } from "../../types";
import "./CharacterCard.scss";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character,
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character">
      <img
        className="character__image"
        src={character.urlImage}
        alt={character.alternativeText}
        width="200"
        height="130"
      />
      <div className="info__container">
        <div className="character__info">
          <h2 className="character__name">{`${character.name}`}</h2>
          <div className="character__position">{character.position}</div>
          <div className="character__age">Edad: {character.age}</div>
        </div>
        <div className="character__infoextra">
          <div className="character__seasons">T.{character.seasons}</div>
          <div className="character__status">
            <img
              alt="imagen de una mesa con un check o una x"
              src={
                character.isWorking
                  ? "assets/curra.webp"
                  : "assets/Nocurra.webp"
              }
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          className="button"
          source="icons/brossa.svg"
          alternativeText="Botón de borrar"
          width="30"
          height="30"
          action={() => {}}
        />
      </div>
    </article>
  );
};

export default CharacterCard;
