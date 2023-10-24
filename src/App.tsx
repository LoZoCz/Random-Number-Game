import "./scss/index.scss";
import { useEffect, useState } from "react";
import { userGuessesType } from "./mainTypes";
import ResultBox from "./components/ResultBox";
import GameBox from "./components/GameBox";

function App() {
  const [randomNumber, setRandomNumber] = useState<number>();
  const [userNumber, setUserNumber] = useState<number | string>("");
  const [userGuesses, setUserGuesses] = useState<Array<userGuessesType>>([]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  }, []);

  console.log(randomNumber);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      userNumber === "" ||
      Number(userNumber) < 1 ||
      Number(userNumber) > 100
    ) {
      return;
    }

    setUserGuesses((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        userGuess: userNumber,
        isCorrect: Number(userNumber) === randomNumber ? true : false,
      },
    ]);

    setUserNumber("");
  };

  const restartGame = () => {
    setUserNumber("");
    setUserGuesses([]);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <>
      <GameBox
        handleSubmit={handleSubmit}
        userNumber={userNumber}
        setUserNumber={setUserNumber}
        userGuesses={userGuesses}
      />
      <ResultBox userGuesses={userGuesses} restartGame={restartGame} />
    </>
  );
}

export default App;
