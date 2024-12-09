"use client";
import { ThemeProvider } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ReactNode } from "react";
import { theme } from "./theme";

interface Props {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <InitColorSchemeScript attribute="class" /> */}
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
