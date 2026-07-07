import { useGameContext } from "./GameContext";
import Hole from "./Hole";

export default function Game() {
    const {score, moleIndex, restartGame} = useGameContext();

    const holes = Array.from({length: 9});

    return (
        <main>
            <h1>Score: {score}</h1>
            <button onClick={restartGame}>Restart</button>

          <div className="board">
            {holes.map((_, index) => (
            <Hole
                key={index}
                hasMole={index === moleIndex}
            />
            ))}
      </div>
        </main>
    )
}