import { useGameContext } from "./GameContext";
import Welcome from "./Welcome";
import Game from "./Game";


export default function App() {
  const { isPlaying } = useGameContext();

  return (
    <>
    {isPlaying ? <Game/> : <Welcome/>}
    </>
  )
}
