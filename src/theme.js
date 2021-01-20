import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3d5afe",
    },
    secondary: {
      main: "#ff1744",
    },
    error: {
      main: "#ff1744",
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      dark: colors.indigo.A700,
      main: "#282c34",
      light: colors.indigo.A200,
    },
    secondary: {
      dark: colors.orange.A700,
      main: "#ff1744",
      light: colors.orange.A200,
    },
    background: {
      default: "#1c2025",
      dark: "#1c2025",
      paper: "#282c34",
    },
    text: {
      primary: "#e6e5e8",
      secondary: "#adb0bb",
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      dark: colors.indigo.A700,
      main: "#3d5afe",
      light: colors.indigo.A200,
    },
    secondary: {
      dark: colors.orange.A700,
      main: "#ff1744",
      light: colors.orange.A200,
    },
    background: {
      default: colors.common.white,
      dark: "#f5f8f7",
      paper: colors.common.white,
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
});
