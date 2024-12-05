"use client";
import { useColorScheme } from "@mui/material";

const ChangeThemeButton = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  const getMode = () => {
    return mode === "system" ? systemMode : mode;
  };

  return (
    <button onClick={() => setMode(getMode() === "light" ? "dark" : "light")}>
      {getMode()}
    </button>
  );
};

export default ChangeThemeButton;
