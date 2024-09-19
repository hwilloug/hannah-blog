import { Typography } from "@mui/material";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const WelcomeScene = lazy(() => import("../three-components/Scene"));

const WelcomePage: React.FC = () => {
  return (
    <>
      <div
        id="welcome-div"
        style={{ height: window.innerHeight, width: window.innerWidth }}
      >
        <Suspense fallback={<Loading />}>
          <WelcomeScene />
        </Suspense>
        <div style={{ position: "absolute", top: 20, left: 0, width: "100%" }}>
          <div>
            <Typography
              variant="h1"
              fontFamily={"Gluten"}
              fontSize={36}
              textAlign={"center"}
            >
              Welcome to Hannah's Hobby Room!
            </Typography>
          </div>
          <div>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontFamily={"Ubuntu"}
              fontSize={18}
              textAlign={"center"}
            >
              Take your time and look around, but <a href="/">click here</a> if
              you just want to get to the site.
            </Typography>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#4b614e99",
            position: "absolute",
            bottom: 0,
            left: 0,
            borderRadius: "8px",
            padding: "5px",
            border: "1px solid #304733",
          }}
        >
          <Typography textAlign={"center"}>
            <i>
              <b>Controls</b>
            </i>
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              alignItems: "center",
            }}
          >
            <Typography>
              <b>Move</b>:
            </Typography>
            <Typography>shift + click + drag</Typography>
            <Typography>
              <b>Rotate</b>:
            </Typography>
            <Typography>click + drag</Typography>
            <Typography>
              <b>Zoom</b>:
            </Typography>
            <Typography>scroll</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
