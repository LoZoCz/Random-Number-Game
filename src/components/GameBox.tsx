import MainForm from "./MainForm";
import { userGuessesType } from "../mainTypes";

type GameBoxProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  userNumber: number | string;
  setUserNumber: (e: string) => void;
  userGuesses: userGuessesType[];
};

const GameBox = ({
  handleSubmit,
  userNumber,
  setUserNumber,
  userGuesses,
}: GameBoxProps) => {
  return (
    <section className="sect">
      <h1 className="text-5xl">Guess the number game</h1>
      <p className="text-2xl">
        Guess a number between 1 and 100, you have 3 tries
      </p>

      <MainForm
        handleSubmit={handleSubmit}
        userNumber={userNumber}
        setUserNumber={setUserNumber}
        userGuesses={userGuesses}
      />
    </section>
  );
};

export default GameBox;
