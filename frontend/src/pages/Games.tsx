import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { ContainerContainer } from "../components/StyledComponents";

const GamesContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.main : "white",
  borderRadius: "5px",
  padding: "20px",
}));

const Games: React.FC = () => {
  return (
    <ContainerContainer>
      <GamesContainer>
        <h2>Games</h2>
        <ul>
          <li>
            <Link to="/games/pong">Pong</Link>
          </li>
          <li>
            <Link to="/games/poppys-playground">Poppy's Playground</Link>
          </li>
        </ul>
      </GamesContainer>
    </ContainerContainer>
  );
};

export default Games;
