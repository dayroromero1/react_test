import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#FF5100",
      light: "#00000029",
      dark: "#999999",
      contrastText: "",
    },
    common: {
      main: "#0D1319",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
