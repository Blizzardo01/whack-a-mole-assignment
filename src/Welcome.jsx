import { useGameContext } from "./GameContext";

export default function Welcome() {
    const {startGame} = useGameContext();

    return (
        <section>
            <h1>Whack a Mole!</h1>
            <p>Click the mole as quickly as you can to earn points!</p>
            <button onClick={startGame}>Play</button>
        </section>
    );
}