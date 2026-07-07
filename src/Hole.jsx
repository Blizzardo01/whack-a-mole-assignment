import { useGameContext } from "./GameContext";

export default function Hole({hasMole}) {
    const {whackMole} = useGameContext();

    return (
        <div className={hasMole ? "hole mole" : "hole"}
        onClick={hasMole ? whackMole : undefined}>
        </div>
    );
}