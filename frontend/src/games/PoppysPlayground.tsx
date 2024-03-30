import { styled } from "@mui/material";
import { ContainerContainer } from "../components/StyledComponents";
import Poppy from "./components/Poppy";

const GAME_HEIGHT = 500;
const GAME_WIDTH = 600;

export interface GameSettings {
  GAME_HEIGHT: number;
  GAME_WIDTH: number;
}

export const GAME_SETTINGS: GameSettings = {
  GAME_HEIGHT,
  GAME_WIDTH,
};

const GameContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.main : "white",
  borderRadius: "5px",
  padding: "20px",
}));

const Game = styled("div")(() => ({
  backgroundColor: "#492E1C",
  width: `${GAME_WIDTH}px`,
  height: `${GAME_HEIGHT}px`,
  overflow: "clip",
}));

const PoppysPlayground: React.FC = () => {
  window.addEventListener(
    "keydown",
    function (e) {
      if (
        ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
          e.code,
        ) > -1
      ) {
        e.preventDefault();
      }
    },
    false,
  );

  return (
    <ContainerContainer>
      <GameContainer>
        <h2>Poppy's Playground</h2>
        <Game>
          <Poppy settings={GAME_SETTINGS} />
        </Game>
      </GameContainer>
    </ContainerContainer>
  );
};

export default PoppysPlayground;
