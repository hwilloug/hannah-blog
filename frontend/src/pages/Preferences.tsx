import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Snackbar,
  styled,
} from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PreferencesContainer = styled("div")({
  padding: "10px",
});

interface Preferences {
  food: boolean;
  gardening: boolean;
  crafts: boolean;
  coding: boolean;
  books: boolean;
  antiquing: boolean;
}

const Preferences: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [preferences, setPreferences] = useState<Preferences>({
    food: false,
    gardening: false,
    crafts: false,
    coding: false,
    books: false,
    antiquing: false,
  });

  useEffect(() => {
    const getPreferences = async () => {
      const res: AxiosResponse<Preferences> = await axios.get(
        `${process.env.REACT_APP_API_URL}/newsletter/${email}/preferences`,
      );
      setPreferences(res.data);
    };

    getPreferences();
  }, [email]);

  const setPreference = (preference: keyof Preferences, value: boolean) => {
    setPreferences({ ...preferences, [preference]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/newsletter/${email}/preferences`,
        preferences,
      );
      setSnackbarOpen(true);
    } catch (e) {
      console.error(e);
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = (
    event: SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const categories = [
    "Food",
    "Gardening",
    "Crafts",
    "Coding",
    "Books",
    "Antiquing",
  ];
  return (
    <PreferencesContainer>
      <h2>Email Preferences</h2>
      {categories.map((category) => (
        <FormGroup key={category}>
          <FormControlLabel
            control={<Checkbox />}
            label={category}
            checked={preferences[category.toLowerCase() as keyof Preferences]}
            onChange={() =>
              setPreference(
                category.toLowerCase() as keyof Preferences,
                !preferences[category.toLowerCase() as keyof Preferences],
              )
            }
          />
        </FormGroup>
      ))}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message="Successfully saved preferences"
      />
    </PreferencesContainer>
  );
};

export default Preferences;
