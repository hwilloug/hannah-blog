import { Alert, Button, Input, Snackbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [failureSnackbarOpen, setFailureSnackbarOpen] = useState(false);

  useEffect(() => {
    if (email?.includes("@") && email?.includes(".")) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);

  const handleEmailSignup = async () => {
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_API_URL}/newsletter`,
        { email },
      );
      if (resp.status === 201) {
        setSuccessSnackbarOpen(true);
      } else if (resp.status === 409) {
        setFailureSnackbarOpen(true);
      }
    } catch (e) {
      console.log(e);
      setFailureSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSuccessSnackbarOpen(false);
    setFailureSnackbarOpen(false);
  };

  const SNACKBAR_DURATION = 5000;

  return (
    <>
      <Input
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Button disabled={!emailValid} onClick={handleEmailSignup}>
        Sign up
      </Button>
      <Snackbar
        autoHideDuration={SNACKBAR_DURATION}
        open={successSnackbarOpen}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          variant="filled"
          severity="success"
        >
          You are now signed up fo the newsletter!
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={SNACKBAR_DURATION}
        open={failureSnackbarOpen}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} variant="filled" severity="error">
          You are already subscribed!
        </Alert>
      </Snackbar>
    </>
  );
};

export default EmailSignup;
