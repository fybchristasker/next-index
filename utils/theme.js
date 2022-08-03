import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    primary: {
      main: '#08617d',
      contrastText: '#fff',
    },
    mode: 'dark',
    background: {
      paper: '#141527',
    },
    text: {
      primary: '#fff',
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#08617d',
      contrastText: '#fff',
    },
    mode: 'light',
    text: {
      primary: '#000',
    },
    background: {
      paper: '#fff',
    },
  },
})

export default Theme
