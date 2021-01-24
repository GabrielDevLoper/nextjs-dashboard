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
      light: "#e6e5e8",
      main: "#282c34",
      dark: "#e6e5e8",
      contrastText: "#e6e5e8",
    },
    secondary: {
      main: "#ff1744",
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
      main: "#3d5afe",
    },
    secondary: {
      main: "#ff1744",
    },
    neutral: {
      main: "#834bff",
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
