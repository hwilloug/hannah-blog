import { AlternateEmailRounded } from "@mui/icons-material";
import { styled } from "@mui/material";
import EmailSignup from "./EmailSignup";

const ToastContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: theme.palette.warning.main,
  borderRadius: "50%",
  boxShadow: "-1px 0 1px grey, 0 1px 1px grey, 1px 0 1px grey, 0 -1px 1px grey",
  ".hide-on-collapse": {
    display: "none",
  },
  ":hover": {
    boxShadow:
      "-1px 0 3px grey, 0 1px 3px grey, 1px 0 3px grey, 0 -1px 3px grey",
    cursor: "pointer",
    width: "fit-content",
    borderRadius: "10px",
    ".hide-on-collapse": {
      display: "flex",
    },
    svg: {
      margin: "5px",
    },
  },
}));

const TitleContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const EmailSignupContainer = styled("div")({
  padding: "0 5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "0px 0px 10px 10px",
});

const NewsletterToast: React.FC = () => {
  return (
    <ToastContainer>
      <TitleContainer>
        <AlternateEmailRounded />
        <p className="hide-on-collapse">Newsletter Signup</p>
      </TitleContainer>
      <EmailSignupContainer className="hide-on-collapse">
        <p>Want to be notified of new articles? Sign up here 🌸</p>
        <EmailSignup />
      </EmailSignupContainer>
    </ToastContainer>
  );
};

export default NewsletterToast;
