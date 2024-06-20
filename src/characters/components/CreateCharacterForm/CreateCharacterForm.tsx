import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { NewCharacterData } from "../../types";

interface CharacterFormProps {
  submit: (NewCharacterData: NewCharacterData) => Promise<void>;
}

const characterFormInitialState: NewCharacterData = {
  name: "",
  age: 1,
  position: "",
  isWorking: true,
  description: "",
  urlImage: "",
  alternativeText: "",
  seasons: "",
};

const CreateCharacterForm = ({
  submit,
}: CharacterFormProps): React.ReactElement => {
  const [characterData, setCharacterData] = useState<NewCharacterData>(
    characterFormInitialState,
  );

  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setCharacterData((previousCharacterData) => {
      return {
        ...previousCharacterData,
        [event.target.id]: event.target.value,
      };
    });

  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={async (event) => {
        event?.preventDefault();

        await submit(characterData);

        setCharacterData(characterFormInitialState);
        navigate("/characters");
      }}
    >
      <div className="form__group">
        <label htmlFor="name">Nombre: </label>
        <input
          className="form__input"
          id="name"
          type="text"
          onChange={handleChange}
          value={characterData.name}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="age">Edad: </label>
        <input
          className="form__input"
          id="age"
          type="number"
          onChange={handleChange}
          value={characterData.age}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="isWorking">Trabaja en Dunder Mifflin: </label>
        <input
          className="form__input"
          id="isWorking"
          onChange={handleChange}
          type="checkbox"
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="seasons">Temporadas: </label>
        <input
          className="form__input"
          id="seasons"
          type="text"
          onChange={handleChange}
          value={characterData.seasons}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="description">Descripción: </label>
        <input
          className="form__input"
          id="description"
          type="text"
          onChange={handleChange}
          value={characterData.description}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="position">Cargo en la empresa: </label>
        <input
          className="form__input"
          id="position"
          type="text"
          onChange={handleChange}
          value={characterData.position}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="urlImage">Url de la Imagen: </label>
        <input
          className="form__input"
          id="urlImage"
          type="url"
          onChange={handleChange}
          value={characterData.urlImage}
          required
        />
      </div>
      <button className="button form__button">Crear personaje</button>
    </form>
  );
};

export default CreateCharacterForm;
