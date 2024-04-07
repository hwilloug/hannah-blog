import { styled } from "@mui/material";
import { ContainerContainer } from "../components/StyledComponents";
import { useParams } from "react-router-dom";

const GameContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.main : "white",
  borderRadius: "5px",
  padding: "20px",
}));

const Game: React.FC = () => {
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

  const params = useParams()

  return (
    <ContainerContainer>
      <GameContainer>
        <h2>{params.game}</h2>
        <iframe src={`http://localhost:8000/${params.game}`} height={400} width={500} />
      </GameContainer>
    </ContainerContainer>
  );
};

export default Game;
