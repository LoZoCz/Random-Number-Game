import { userGuessesType } from "../mainTypes";

type MainFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  userNumber: number | string;
  setUserNumber: (e: string) => void;
  userGuesses: userGuessesType[];
};

const MainForm = ({
  handleSubmit,
  userNumber,
  setUserNumber,
  userGuesses,
}: MainFormProps) => {
  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        type="number"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
        placeholder="Enter your number"
        maxLength={3}
        className="text-slate-950 text-xl outline-none px-2 rounded-sm"
      />
      <button
        type="submit"
        className={`btn ${
          userGuesses.length === 3 ||
          userGuesses.some((guess: userGuessesType) => guess.isCorrect)
            ? "inactiveBtn"
            : ""
        }`}
        disabled={
          userGuesses.length === 3 ||
          userGuesses.some((guess: userGuessesType) => guess.isCorrect)
        }
      >
        Guess
      </button>
    </form>
  );
};

export default MainForm;
