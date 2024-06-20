import CreateCharacterForm from "../../../characters/components/CreateCharacterForm/CreateCharacterForm";
import { NewCharacterData } from "../../../characters/types";
import charactersClient from "../../../characters/client/CharactersClient";

const createCharacter = async (
  newCharacterData: NewCharacterData,
): Promise<void> => {
  await charactersClient.createCharacter(newCharacterData);
};

const CreateCharacterPage = (): React.ReactElement => {
  return <CreateCharacterForm submit={createCharacter} />;
};

export default CreateCharacterPage;
