import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#FF4053",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00b211",
      contrastText: "#fff",
    },
    error: {
      main: "#556cd6",
    },
    mode: "dark",
    background: {
      paper: "#141527",
    },
    text: {
      primary: "#fff",
    },
    action: {
      disabledBackground: "#bababa",
    },
    info: {
      main: "#82678f",
    },
  },
});

export default Theme;
