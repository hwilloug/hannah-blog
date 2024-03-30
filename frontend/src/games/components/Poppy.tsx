import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { GameSettings } from "../PoppysPlayground";

const AVATAR_SPEED = 1;
const AVATAR_SIZE = 165;

interface PoppyProps {
  settings: GameSettings;
}

const Poppy: React.FC<PoppyProps> = ({ settings }) => {
  const [avatarSprite, setAvatarSprite] = useState("down");
  const [avatarMoving, setAvatarMoving] = useState(false);
  const [positionX, setPositionX] = useState(100);
  const [positionY, setPositionY] = useState(100);

  const Avatar = styled("img")(() => ({
    position: "relative",
    left: `${positionX}px`,
    top: `${positionY}px`,
  }));

  const setAvatarPosition = () => {
    if (avatarMoving) {
      switch (avatarSprite) {
        case "left":
          if (positionX > 0) {
            setPositionX(positionX - AVATAR_SPEED);
          }
          break;
        case "right":
          if (positionX < settings.GAME_WIDTH - AVATAR_SIZE) {
            setPositionX(positionX + AVATAR_SPEED);
          }
          break;
        case "up":
          if (positionY > -20) {
            setPositionY(positionY - AVATAR_SPEED);
          }
          break;
        case "down":
          if (positionY < settings.GAME_HEIGHT - AVATAR_SIZE) {
            setPositionY(positionY + AVATAR_SPEED);
          }
          break;
      }
    }
  };

  const handleKeyPress = (e: any) => {
    switch (e.key) {
      case "ArrowLeft":
        setAvatarSprite("left");
        setAvatarMoving(true);
        break;
      case "ArrowRight":
        setAvatarSprite("right");
        setAvatarMoving(true);

        break;
      case "ArrowUp":
        setAvatarSprite("up");
        setAvatarMoving(true);

        break;
      case "ArrowDown":
        setAvatarSprite("down");
        setAvatarMoving(true);
        break;
      default:
        console.log(e.key);
    }
  };

  const handleKeyUp = (e: any) => {
    switch (e.key) {
      case "ArrowLeft":
        setAvatarMoving(false);
        break;
      case "ArrowRight":
        setAvatarMoving(false);
        break;
      case "ArrowUp":
        setAvatarMoving(false);
        break;
      case "ArrowDown":
        setAvatarMoving(false);
        break;
      default:
        console.log(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  setTimeout(setAvatarPosition, 10);

  return (
    <Avatar
      src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppy_${avatarSprite}.${avatarMoving ? "gif" : "png"}`}
    />
  );
};

export default Poppy;
