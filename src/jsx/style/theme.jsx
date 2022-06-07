import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// import Breakpoint from './breakpoint';

const Theme = createTheme({
  typography: {
    h1: {
      fontSize: "44px",
      lineHeight: "52px",
      letterSpacing: "-0.01em",
      fontWeight: 400,
      color: '#042d43', // Logo Primary
    },
    h2: {
      fontSize: "35px",
      lineHeight: "42px",
      fontWeight: 400,
      color: '#042d43', // Logo Primary
    },
    h3: {
      fontSize: "28px",
      lineHeight: "34px",
      fontWeight: 400,
      color: '#042d43', // Logo Primary
    },
    h4: {
      fontSize: "25px",
      lineHeight: "32px",
      letterSpacing: '-0.01em',
      fontWeight: 400,
      color: 'red',
    },
    h5: {
      fontSize: "18px",
      lineHeight: "auto",
      letterSpacing: '0.03em',
      fontWeight: 500,
      color: 'pink',
    },
    h6: {
      fontSize: "16px",
      lineHeight: "auto",
      fontWeight: 500,
      color: 'blue',
    },
    subtitle1: {
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "0.0056em",
      fontWeight: 300
    },
    subtitle2: {
      fontSize: "13px",
      fontWeight: 500
    }, 
    body1: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: 400
    }, 
    body2: {
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: 400
    }, 
    caption: {
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: '-0.02em',
      fontWeight: 400
    }
  },
  palette: {
    type: 'light',
    text: {
      // primary: '#ff6600',
    },
  },
});

export default Theme;

