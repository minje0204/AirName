import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['SCDream4']
  },
  palette: {
    primary: {
      light: '#8DC7F7',
      main: '#42A5F5',
      dark: '#1565C0'
    },
    secondary: {
      light: '#FFC876',
      main: '#FF9800',
      dark: '#ED6C02'
    },
    info: {
      light: '#FFFCBF',
      main: '#F9F7F4',
      dark: '#C2D1C7'
    },
    checkedGreen: {
      main: '#008000'
    }
  }
});

export default theme;
