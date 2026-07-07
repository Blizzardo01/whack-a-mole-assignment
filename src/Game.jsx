import { useGameContext } from "./GameContext";

export default function Game() {
    const {score, restartGame} = useGameContext();

    return (
        <main>
            <h1>Score: {score}</h1>
            <button onClick={restartGame}>Restart</button>

            <div className="holes">
                
            </div>
        </main>
    )
}