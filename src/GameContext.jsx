import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

function randomMole() {
  return Math.floor(Math.random() * 9);
}

export function GameProvider({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [moleIndex, setMoleIndex] = useState(0);


    function startGame() {
        setIsPlaying(true);
        setScore(0);
        setMoleIndex(randomMole());

    }

    function restartGame() {
        setIsPlaying(false)
        setScore(0);
    }

    function whackMole() {
        setScore((currentScore) => currentScore + 1);
        setMoleIndex(randomMole());
    }

      return (
    <GameContext.Provider
      value={{
        isPlaying,
        score,
        moleIndex,
        startGame,
        restartGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}


export function useGameContext() {
  const context = useContext(GameContext);

  if (context === null) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return context;
}



