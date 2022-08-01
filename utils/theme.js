import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    primary: {
      main: '#FF4053',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00b211',
      contrastText: '#fff',
    },
    error: {
      main: '#556cd6',
    },
    mode: 'dark',
    background: {
      paper: '#141527',
    },
    text: {
      primary: '#fff',
    },
    action: {
      disabledBackground: '#bababa',
    },
    info: {
      main: '#82678f',
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FF4053',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00b211',
      contrastText: '#fff',
    },
    mode: 'light',
    text: {
      primary: '#000',
    },
    background: {
      paper: '#fff',
    },
    action: {
      disabledBackground: '#bababa',
    },
    error: {
      main: '#556cd6',
    },
  },
})

export default Theme
