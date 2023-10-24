import { userGuessesType } from "../mainTypes";

type ResultBoxProps = {
  userGuesses: userGuessesType[];
  restartGame: () => void;
};

const ResultBox = ({ userGuesses, restartGame }: ResultBoxProps) => {
  return (
    <section className="sect">
      <h2 className="text-4xl">Results</h2>
      <ol className="list-decimal pl-6 text-2xl">
        {userGuesses.map((guess: userGuessesType) => (
          <li key={guess.id}>
            {guess.userGuess}, {guess.isCorrect ? "correct" : "incorrect"}
          </li>
        ))}
      </ol>
      <button
        className={`btn ${userGuesses.length === 0 ? "inactiveBtn" : ""}`}
        disabled={userGuesses.length === 0}
        onClick={() => restartGame()}
      >
        Play again
      </button>
    </section>
  );
};

export default ResultBox;
