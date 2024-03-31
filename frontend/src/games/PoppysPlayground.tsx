import { styled } from "@mui/material";
import { ContainerContainer } from "../components/StyledComponents";

const GameContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.main : "white",
  borderRadius: "5px",
  padding: "20px",
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
        <h2>Pong</h2>
        <iframe src="http://localhost:8000" height={400} width={500} />
      </GameContainer>
    </ContainerContainer>
  );
};

export default PoppysPlayground;
